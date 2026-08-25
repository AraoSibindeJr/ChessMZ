import { useState, useCallback, useMemo } from "react";
import { Chess } from "chess.js";
import type { BoardState, Piece, PieceType } from "../types/chess";
import { getInitialBoard } from "../types/chess";

interface UseChessGameState {
  board: BoardState;
  selectedPosition: string | null;
  validMoves: string[];
  lastMove: { from: string; to: string } | null;
  status: "ongoing" | "checkmate" | "stalemate" | "draw";
  currentPlayer: "white" | "black";
}

export function useChessGame() {
  // Estado interno do chess.js (fonte da verdade)
  const [chess] = useState(() => new Chess());

  // Estado para renderização
  const [selectedPosition, setSelectedPosition] = useState<string | null>(null);
  const [lastMove, setLastMove] = useState<{ from: string; to: string } | null>(
    null,
  );

  // ⚠️ IMPORTANTE: Force re-render quando movimento é feito
  const [gameVersion, setGameVersion] = useState(0);

  // Converter estado chess.js para BoardState (8x8 array)
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
  }, [chess, gameVersion]); // ⚠️ Adicionado gameVersion

  // Calcular movimentos válidos para posição selecionada
  const validMoves = useMemo<string[]>(() => {
    if (!selectedPosition) return [];

    const moves = chess.moves({
      square: selectedPosition as any,
      verbose: true,
    });

    return moves.map((move) => move.to);
  }, [chess, selectedPosition, gameVersion]); // ⚠️ Adicionado gameVersion

  // Fazer movimento
  const makeMove = useCallback(
    (to: string): boolean => {
      if (!selectedPosition) return false;

      try {
        const result = chess.move({
          from: selectedPosition as any,
          to: to as any,
          promotion: "q", // Sempre promove para rainha
        });

        if (result) {
          setLastMove({ from: selectedPosition, to });
          setSelectedPosition(null);

          // ⚠️ Force re-render incrementando gameVersion
          setGameVersion((v) => v + 1);

          return true;
        }
        return false;
      } catch {
        return false;
      }
    },
    [chess, selectedPosition],
  );

  // Seleccionar peça
  const selectPosition = useCallback(
    (position: string) => {
      // Se há movimento selecionado e clica num movimento válido
      if (selectedPosition) {
        const moves = chess.moves({
          square: selectedPosition as any,
          verbose: true,
        });
        const isValidMove = moves.some((m) => m.to === position);

        if (isValidMove) {
          // Fazer movimento
          makeMove(position);
          return;
        }
      }

      // Seleccionar peça
      const piece = chess.get(position as any);

      // Se clica numa peça do jogador atual
      if (piece && piece.color === (chess.turn() === "w" ? "w" : "b")) {
        setSelectedPosition(position);
      }
      // Se clica no mesmo quadrado → deselecciona
      else if (position === selectedPosition) {
        setSelectedPosition(null);
      }
      // Se clica em outro quadrado → deselecciona
      else {
        setSelectedPosition(null);
      }
    },
    [chess, selectedPosition, makeMove],
  );

  // Status do jogo
  const status = useMemo<"ongoing" | "checkmate" | "stalemate" | "draw">(
    () => {
      if (chess.isCheckmate()) return "checkmate";
      if (chess.isStalemate()) return "stalemate";
      if (chess.isDraw()) return "draw";
      return "ongoing";
    },
    [chess, gameVersion], // ⚠️ Adicionado gameVersion
  );

  return {
    board,
    selectedPosition,
    validMoves,
    lastMove,
    status,
    currentPlayer: (chess.turn() === "w" ? "white" : "black") as
      | "white"
      | "black",
    selectPosition,
    makeMove,
    chess, // Para debug
  };
}
