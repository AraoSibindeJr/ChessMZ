import { useState, useCallback, useMemo } from "react";
import { Chess } from "chess.js";
import type { BoardState, PieceType } from "../types/chess";
import { getInitialBoard } from "../types/chess";

/**
 * Hook principal para gerenciar a lógica completa do jogo de xadrez.
 *
 * Usa chess.js como fonte de verdade para validação de movimentos,
 * detectando automaticamente xeque, xeque-mate, empates, etc.
 *
 * @hook
 * @returns {Object} Estado do jogo e funções de controle
 * @example
 * const { board, selectPosition, makeMove, status } = useChessGame()
 */
export function useChessGame() {
  // ────────────────────────────────────────────────────────────
  // ESTADO
  // ────────────────────────────────────────────────────────────

  /**
   * Instância chess.js — fonte de verdade para toda a lógica de xadrez.
   * Criada uma única vez na montagem do componente.
   */
  const [chess] = useState(() => new Chess());

  /**
   * Posição da peça selecionada (ex: "e2").
   * Null = nenhuma peça selecionada.
   */
  const [selectedPosition, setSelectedPosition] = useState<string | null>(null);

  /**
   * Último movimento realizado.
   * Usado para feedback visual e notificações.
   * { from: "e2", to: "e4" }
   */
  const [lastMove, setLastMove] = useState<{ from: string; to: string } | null>(
    null,
  );

  /**
   * Contador de versão do jogo — incrementado após cada movimento.
   * Força re-cálculo de useMemo quando o estado chess.js muda.
   * Necessário porque chess.js muta estado interno.
   */
  const [gameVersion, setGameVersion] = useState(0);

  // ────────────────────────────────────────────────────────────
  // VALORES DERIVADOS (useMemo)
  // ────────────────────────────────────────────────────────────

  /**
   * Converte estado interno de chess.js para formato BoardState (8x8 array).
   *
   * Recalcula automaticamente quando:
   * - chess (nunca muda após init)
   * - gameVersion (muda após cada movimento)
   *
   * @returns {BoardState} Array 8x8 com peças nas posições corretas
   */
  const board = useMemo<BoardState>(() => {
    const newBoard = getInitialBoard();

    // Limpar tabuleiro
    for (let i = 0; i < 8; i++) {
      for (let j = 0; j < 8; j++) {
        newBoard[i][j] = null;
      }
    }

    // Preencher com peças do chess.js (estado atual)
    const pieces = chess.board();
    pieces.forEach((row, rowIndex) => {
      row.forEach((piece, colIndex) => {
        if (piece) {
          newBoard[rowIndex][colIndex] = {
            type: piece.type.toUpperCase() as PieceType,
            color: piece.color === "w" ? "white" : "black",
          };
        }
      });
    });

    return newBoard;
  }, [chess, gameVersion]);

  /**
   * Calcula movimentos válidos para a peça atualmente selecionada.
   * Usa validação completa de chess.js (roque, en passant, etc).
   *
   * @returns {string[]} Array de posições válidas (ex: ["e3", "e4"])
   */
  const validMoves = useMemo<string[]>(() => {
    if (!selectedPosition) return [];

    try {
      const moves = chess.moves({
        square: selectedPosition as any,
        verbose: true,
      });
      return moves.map((move) => move.to);
    } catch (error) {
      console.warn(
        `Erro ao calcular movimentos para ${selectedPosition}:`,
        error,
      );
      return [];
    }
  }, [chess, selectedPosition, gameVersion]);

  /**
   * Determina o status atual do jogo.
   * Verifica automaticamente para xeque-mate, afogamento, etc.
   *
   * @returns {'ongoing' | 'checkmate' | 'stalemate' | 'draw'}
   */
  const status = useMemo<"ongoing" | "checkmate" | "stalemate" | "draw">(() => {
    if (chess.isCheckmate()) return "checkmate";
    if (chess.isStalemate()) return "stalemate";
    if (chess.isDraw()) return "draw";
    return "ongoing";
  }, [chess, gameVersion]);

  /**
   * Verifica se o rei do jogador atual está sob ataque (xeque).
   *
   * @returns {boolean} true se em xeque
   */
  const isCheck = useMemo<boolean>(() => {
    return chess.isCheck();
  }, [chess, gameVersion]);

  /**
   * Verifica se o jogo terminou.
   * Combinação de xeque-mate, afogamento ou empate.
   *
   * @returns {boolean} true se jogo terminou
   */
  const isGameOver = useMemo<boolean>(() => {
    return (
      status === "checkmate" || status === "stalemate" || status === "draw"
    );
  }, [status]);

  // ────────────────────────────────────────────────────────────
  // FUNÇÕES (useCallback)
  // ────────────────────────────────────────────────────────────

  /**
   * Executa um movimento no tabuleiro.
   * Atualiza estado chess.js e força re-render de componentes.
   *
   * @param {string} to - Posição destino (ex: "e4")
   * @returns {boolean} true se movimento foi bem-sucedido
   *
   * @example
   * makeMove("e4") // Move peça selecionada para e4
   */
  const makeMove = useCallback(
    (to: string): boolean => {
      if (!selectedPosition) {
        console.warn("Nenhuma peça selecionada para mover");
        return false;
      }

      try {
        // Tenta fazer movimento em chess.js
        const result = chess.move({
          from: selectedPosition as any,
          to: to as any,
          promotion: "q", // Sempre promove para rainha
        });

        if (!result) {
          console.warn(`Movimento inválido: ${selectedPosition} → ${to}`);
          return false;
        }

        // Atualizar estado local
        setLastMove({ from: selectedPosition, to });
        setSelectedPosition(null);

        // Forçar re-cálculo de board e validMoves
        setGameVersion((v) => v + 1);

        console.log(`✓ Movimento: ${selectedPosition} → ${to}`);
        return true;
      } catch (error) {
        console.error("Erro ao fazer movimento:", error);
        return false;
      }
    },
    [chess, selectedPosition],
  );

  /**
   * Selecciona ou deselecciona uma peça.
   * Se houver peça selecionada e o utilizador clicar num movimento válido,
   * o movimento é executado automaticamente.
   *
   * @param {string} position - Posição clicada (ex: "e2")
   *
   * @example
   * selectPosition("e2")  // Selecciona peão em e2
   * selectPosition("e4")  // Se e4 é válido, move; senão deselecciona
   */
  const selectPosition = useCallback(
    (position: string) => {
      // Bloquear se jogo terminou
      if (isGameOver) {
        console.log("Jogo terminado — nenhum movimento permitido");
        return;
      }

      // Se há peça selecionada, verificar se clicou num movimento válido
      if (selectedPosition) {
        try {
          const moves = chess.moves({
            square: selectedPosition as any,
            verbose: true,
          });
          const isValidMove = moves.some((m) => m.to === position);

          if (isValidMove) {
            // Executar movimento automaticamente
            makeMove(position);
            return;
          }
        } catch (error) {
          console.warn("Erro ao validar movimento:", error);
        }
      }

      // Seleccionar nova peça (se é do turno atual)
      try {
        const piece = chess.get(position as any);

        // Validar que é peça do jogador atual
        if (piece && piece.color === (chess.turn() === "w" ? "w" : "b")) {
          setSelectedPosition(position);
          console.log(`Peça selecionada: ${position}`);
        }
        // Deseleccionar se clica no mesmo quadrado
        else if (position === selectedPosition) {
          setSelectedPosition(null);
          console.log("Peça deseleccionada");
        }
        // Deseleccionar se clica noutro lugar
        else {
          setSelectedPosition(null);
        }
      } catch (error) {
        console.error("Erro ao seleccionar posição:", error);
      }
    },
    [chess, selectedPosition, makeMove, isGameOver],
  );

  // ────────────────────────────────────────────────────────────
  // RETURN
  // ────────────────────────────────────────────────────────────

  return {
    // Estado do tabuleiro
    board,
    selectedPosition,
    validMoves,
    lastMove,

    // Status do jogo
    status,
    isCheck,
    isGameOver,
    currentPlayer: (chess.turn() === "w" ? "white" : "black") as
      | "white"
      | "black",

    // Funções de controle
    selectPosition,
    makeMove,

    // Para debug apenas
    chess,
  };
}
