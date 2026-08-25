import { useState, useCallback, useMemo } from "react";
import { Chess } from "chess.js";
import type { BoardState, Piece, PieceType } from "../types/chess";
import { getInitialBoard } from "../types/chess";

export function useChessGame() {
  const [chess] = useState(() => new Chess());
  const [selectedPosition, setSelectedPosition] = useState<string | null>(null);
  const [lastMove, setLastMove] = useState<{ from: string; to: string } | null>(
    null,
  );
  const [gameVersion, setGameVersion] = useState(0);

  const board = useMemo<BoardState>(() => {
    const newBoard = getInitialBoard();
    for (let i = 0; i < 8; i++) {
      for (let j = 0; j < 8; j++) {
        newBoard[i][j] = null;
      }
    }
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

  const validMoves = useMemo<string[]>(() => {
    if (!selectedPosition) return [];
    const moves = chess.moves({
      square: selectedPosition as any,
      verbose: true,
    });
    return moves.map((move) => move.to);
  }, [chess, selectedPosition, gameVersion]);

  const status = useMemo<"ongoing" | "checkmate" | "stalemate" | "draw">(() => {
    if (chess.isCheckmate()) return "checkmate";
    if (chess.isStalemate()) return "stalemate";
    if (chess.isDraw()) return "draw";
    return "ongoing";
  }, [chess, gameVersion]);

  const isCheck = useMemo<boolean>(() => {
    return chess.isCheck();
  }, [chess, gameVersion]);

  const isGameOver = useMemo<boolean>(() => {
    return (
      status === "checkmate" || status === "stalemate" || status === "draw"
    );
  }, [status]);

  const makeMove = useCallback(
    (to: string): boolean => {
      if (!selectedPosition) return false;
      try {
        const result = chess.move({
          from: selectedPosition as any,
          to: to as any,
          promotion: "q",
        });
        if (result) {
          setLastMove({ from: selectedPosition, to });
          setSelectedPosition(null);
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

  const selectPosition = useCallback(
    (position: string) => {
      if (isGameOver) {
        console.log("Jogo terminado!");
        return;
      }

      if (selectedPosition) {
        const moves = chess.moves({
          square: selectedPosition as any,
          verbose: true,
        });
        const isValidMove = moves.some((m) => m.to === position);
        if (isValidMove) {
          makeMove(position);
          return;
        }
      }

      const piece = chess.get(position as any);
      if (piece && piece.color === (chess.turn() === "w" ? "w" : "b")) {
        setSelectedPosition(position);
      } else if (position === selectedPosition) {
        setSelectedPosition(null);
      } else {
        setSelectedPosition(null);
      }
    },
    [chess, selectedPosition, makeMove, isGameOver],
  );

  return {
    board,
    selectedPosition,
    validMoves,
    lastMove,
    status,
    isCheck,
    isGameOver,
    currentPlayer: (chess.turn() === "w" ? "white" : "black") as
      | "white"
      | "black",
    selectPosition,
    makeMove,
    chess,
  };
}
