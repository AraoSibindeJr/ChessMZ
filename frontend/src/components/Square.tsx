import type { Piece } from "../types/chess";
import { PIECE_SYMBOLS } from "../types/chess";

interface SquareProps {
  piece: Piece | null;
  isLight: boolean;
  position: string;
  isSelected?: boolean;
  isValidMove?: boolean;
  isLastMove?: boolean;
  onClick?: () => void;
}

export default function Square({
  piece,
  isLight,
  position,
  isSelected = false,
  isValidMove = false,
  isLastMove = false,
  onClick,
}: SquareProps) {
  // Cores base
  let bgColor = isLight ? "#F0D9B5" : "#B58863";

  // Cores especiais
  if (isSelected) {
    bgColor = "#BACA44"; // Verde/amarelo (selecionado)
  } else if (isValidMove) {
    bgColor = "#BDD5AF"; // Verde claro (movimento válido)
  } else if (isLastMove) {
    bgColor = "#BBE6A3"; // Verde muito claro (último movimento)
  }

  const symbol = piece ? PIECE_SYMBOLS[piece.color][piece.type] : "";

  return (
    <div
      onClick={onClick}
      style={{
        backgroundColor: bgColor,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "3.5rem",
        fontWeight: "bold",
        cursor: "pointer",
        userSelect: "none",
        transition: "all 0.15s ease",
        position: "relative",
        aspectRatio: "1 / 1",
        boxShadow: isLight
          ? "inset 0 1px 0 rgba(255,255,255,0.3)"
          : "inset 0 1px 0 rgba(0,0,0,0.2)",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLDivElement;
        if (!isSelected && !isValidMove && !isLastMove) {
          el.style.backgroundColor = isLight ? "#E8C86E" : "#A67C52";
          el.style.opacity = "0.8";
        }
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLDivElement;
        el.style.opacity = "1";
        // Voltar à cor anterior
        if (isSelected) {
          el.style.backgroundColor = "#BACA44";
        } else if (isValidMove) {
          el.style.backgroundColor = "#BDD5AF";
        } else if (isLastMove) {
          el.style.backgroundColor = "#BBE6A3";
        } else {
          el.style.backgroundColor = isLight ? "#F0D9B5" : "#B58863";
        }
      }}
      data-position={position}
    >
      {/* Indicador de movimento válido (círculo pequeno) */}
      {isValidMove && !piece && (
        <div
          style={{
            position: "absolute",
            width: "16px",
            height: "16px",
            borderRadius: "50%",
            backgroundColor: "rgba(0, 0, 0, 0.3)",
          }}
        />
      )}

      {/* Indicador de movimento válido (anel) */}
      {isValidMove && piece && (
        <div
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            borderRadius: "4px",
            border: "3px solid rgba(0, 0, 0, 0.3)",
          }}
        />
      )}

      {/* Peça */}
      <span
        style={{
          textShadow: isLight
            ? "0 2px 4px rgba(0,0,0,0.2)"
            : "0 2px 4px rgba(255,255,255,0.2)",
          filter: piece ? "drop-shadow(0 2px 3px rgba(0,0,0,0.15))" : "none",
          zIndex: 2,
        }}
      >
        {symbol}
      </span>
    </div>
  );
}
