import type { BoardState } from "../types/chess";
import { indexToPosition } from "../types/chess";
import Square from "./Square";

interface ChessBoardProps {
  board: BoardState; // ← ADICIONADO
  selectedPosition?: string | null;
  validMoves?: string[];
  lastMove?: { from: string; to: string } | null;
  onSquareClick?: (position: string) => void;
}

export default function ChessBoard({
  board, // ← ADICIONADO
  selectedPosition = null,
  validMoves = [],
  lastMove = null,
  onSquareClick,
}: ChessBoardProps) {
  // ⚠️ REMOVIDO: const board = getInitialBoard();
  // Agora usamos o board passado como prop

  // Determinar se quadrado é claro ou escuro
  const isLightSquare = (row: number, col: number): boolean => {
    return (row + col) % 2 === 0;
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* Tabuleiro */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(8, 1fr)",
          gridTemplateRows: "repeat(8, 1fr)",
          gap: 0,
          width: "100%",
          aspectRatio: "1 / 1",
          border: "4px solid #2C3E50",
          boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
        }}
      >
        {board.map((row, rowIndex) =>
          row.map((piece, colIndex) => {
            const position = indexToPosition(rowIndex, colIndex);
            const isLight = isLightSquare(rowIndex, colIndex);
            const isSelected = position === selectedPosition;
            const isValidMove = validMoves.includes(position);
            const isLastMoveSquare = Boolean(
              lastMove &&
              (position === lastMove.from || position === lastMove.to),
            );

            return (
              <Square
                key={position}
                piece={piece}
                isLight={isLight}
                position={position}
                isSelected={isSelected}
                isValidMove={isValidMove}
                isLastMove={isLastMoveSquare}
                onClick={() => onSquareClick?.(position)}
              />
            );
          }),
        )}
      </div>

      {/* Coordenadas para referência */}
      <div className="mt-4 text-center text-sm text-gray-600">
        <p>Tabuleiro com posição inicial</p>
      </div>
    </div>
  );
}
