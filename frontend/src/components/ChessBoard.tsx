import type { BoardState } from "../types/chess";
import { getInitialBoard, indexToPosition } from "../types/chess";
import Square from "./Square";

interface ChessBoardProps {
  onSquareClick?: (position: string) => void;
}

export default function ChessBoard({ onSquareClick }: ChessBoardProps) {
  const board = getInitialBoard();

  // Determinar se quadrado é claro ou escuro
  const isLightSquare = (row: number, col: number): boolean => {
    return (row + col) % 2 === 0;
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* Tabuleiro com inline style para garantir grid */}
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

            return (
              <Square
                key={position}
                piece={piece}
                isLight={isLight}
                position={position}
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
