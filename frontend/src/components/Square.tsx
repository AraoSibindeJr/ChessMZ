import type { Piece } from "../types/chess";
import { PIECE_SYMBOLS } from "../types/chess";

interface SquareProps {
  piece: Piece | null;
  isLight: boolean;
  position: string;
  onClick?: () => void;
}

export default function Square({
  piece,
  isLight,
  position,
  onClick,
}: SquareProps) {
  const bgColor = isLight ? "#ECF0F1" : "#2C3E50"; // light : dark
  const textColor = isLight ? "#2C3E50" : "#ECF0F1";
  const symbol = piece ? PIECE_SYMBOLS[piece.color][piece.type] : "";

  return (
    <div
      onClick={onClick}
      style={{
        backgroundColor: bgColor,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "3rem",
        cursor: "pointer",
        userSelect: "none",
        transition: "opacity 0.2s",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLDivElement).style.opacity = "0.8";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLDivElement).style.opacity = "1";
      }}
      data-position={position}
    >
      {symbol}
    </div>
  );
}
