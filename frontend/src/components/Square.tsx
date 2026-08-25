import type { Piece } from "../types/chess";
import { PIECE_SYMBOLS } from "../types/chess";

interface SquareProps {
  piece: Piece | null;
  isLight: boolean;
  position: string;
  isSelected?: boolean;
  isValidMove?: boolean;
  isCheck?: boolean;
  onClick?: () => void;
}

export default function Square({
  piece,
  isLight,
  position,
  isSelected = false,
  isValidMove = false,
  isCheck = false,
  onClick,
}: SquareProps) {
  // Cores base
  let bgColor = isLight ? "#F0D9B5" : "#B58863";

  // ✅ Xeque tem prioridade (vermelho)
  if (isCheck) {
    bgColor = "#E74C3C"; // Vermelho para xeque
  } else if (isSelected) {
    bgColor = "#BACA44"; // Verde/amarelo (selecionado)
  }
  // ❌ REMOVIDO: else if (isLastMove) - não mais destaque!

  // Símbolo da peça
  const symbol = piece ? PIECE_SYMBOLS[piece.color][piece.type] : "";

  // Cor do símbolo (contraste melhorado)
  let pieceColor = "#ffffff"; // Brancas em branco
  let pieceShadow = "0 2px 4px rgba(0,0,0,0.4)";

  if (piece?.color === "black") {
    pieceColor = "#000000"; // Pretas em preto
    pieceShadow = "0 2px 4px rgba(255,255,255,0.3)";
  }

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
        // ✅ Removido: !isLastMove
        if (!isSelected && !isCheck) {
          el.style.backgroundColor = isLight ? "#E8C86E" : "#A67C52";
          el.style.opacity = "0.8";
        }
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLDivElement;
        el.style.opacity = "1";
        // Voltar à cor anterior
        if (isCheck) {
          el.style.backgroundColor = "#E74C3C";
        } else if (isSelected) {
          el.style.backgroundColor = "#BACA44";
        } else {
          // ✅ Volta apenas à cor base (sem lastMove)
          el.style.backgroundColor = isLight ? "#F0D9B5" : "#B58863";
        }
      }}
      data-position={position}
    >
      {/* Indicador de movimento válido: PEQUENO DOT CENTRAL */}
      {isValidMove && (
        <div
          style={{
            position: "absolute",
            width: "12px",
            height: "12px",
            borderRadius: "50%",
            backgroundColor: "rgba(0, 0, 0, 0.4)",
            boxShadow: "0 1px 2px rgba(0, 0, 0, 0.3)",
            zIndex: 1,
          }}
        />
      )}

      {/* Indicador de captura: DOT MAIOR COM ANEL */}
      {isValidMove && piece && (
        <div
          style={{
            position: "absolute",
            width: "18px",
            height: "18px",
            borderRadius: "50%",
            border: "2px solid rgba(0, 0, 0, 0.4)",
            backgroundColor: "transparent",
            zIndex: 1,
          }}
        />
      )}

      {/* Peça com contraste melhorado */}
      <span
        style={{
          color: pieceColor,
          textShadow: pieceShadow,
          filter: piece ? "drop-shadow(0 2px 3px rgba(0,0,0,0.2))" : "none",
          zIndex: 2,
        }}
      >
        {symbol}
      </span>
    </div>
  );
}
