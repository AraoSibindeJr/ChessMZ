import { useState, useCallback, useMemo } from "react";
import { Chess } from "chess.js";
import type { BoardState, Piece, PieceType, PieceColor } from "../types/chess";
import { getInitialBoard, positionToIndex } from "../types/chess";

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

  // Converter estado chess.js para BoardState (8x8 array)
  const board = useMemo<BoardState>(() => {
    const newBoard = getInitialBoard();
    const fen = chess.fen();

    // Limpar tabuleiro
    for (let i = 0; i < 8; i++) {
      for (let j = 0; j < 8; j++) {
        newBoard[i][j] = null;
      }
    }

    // Preencher com peças do chess.js
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
  }, [chess]);

  // Calcular movimentos válidos para posição selecionada
  const validMoves = useMemo<string[]>(() => {
    if (!selectedPosition) return [];

    const moves = chess.moves({
      square: selectedPosition as any,
      verbose: true,
    });

    return moves.map((move) => move.to);
  }, [chess, selectedPosition]);

  // Selecionar peça
  const selectPosition = useCallback(
    (position: string) => {
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
    [chess, selectedPosition],
  );

  // Fazer movimento (será usado em Task 7)
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
          return true;
        }
        return false;
      } catch {
        return false;
      }
    },
    [chess, selectedPosition],
  );

  // Status do jogo
  const status = useMemo<"ongoing" | "checkmate" | "stalemate" | "draw">(() => {
    if (chess.isCheckmate()) return "checkmate";
    if (chess.isStalemate()) return "stalemate";
    if (chess.isDraw()) return "draw";
    return "ongoing";
  }, [chess]);

  return {
    board,
    selectedPosition,
    validMoves,
    lastMove,
    status,
    currentPlayer: chess.turn() === "w" ? "white" : "black",
    selectPosition,
    makeMove,
    chess, // Para debug
  };
}
