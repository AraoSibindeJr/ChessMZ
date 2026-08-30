import type { Piece } from "../types/chess";
import { PIECE_SYMBOLS } from "../types/chess";

/**
 * Props para um quadrado individual do tabuleiro.
 * @interface
 */
interface SquareProps {
  /** Peça neste quadrado (null se vazio) */
  piece: Piece | null;

  /** true se quadrado é claro (#F0D9B5), false se escuro (#B58863) */
  isLight: boolean;

  /** Posição em notação algébrica (ex: "e4") */
  position: string;

  /** true se peça neste quadrado está selecionada */
  isSelected?: boolean;

  /** true se este é um movimento válido da peça selecionada */
  isValidMove?: boolean;

  /** true se o rei neste quadrado está em xeque */
  isCheck?: boolean;

  /** Callback executado quando quadrado é clicado */
  onClick?: () => void;
}

/**
 * Componente de um quadrado individual do tabuleiro.
 *
 * Renderiza:
 * - Fundo (claro/escuro)
 * - Peça (se houver)
 * - Indicadores visuais:
 *   - Amarelo se selecionado
 *   - Vermelho se rei em xeque
 *   - Pequeno dot se movimento válido
 * - Efeito hover
 *
 * @component
 * @param {SquareProps} props - Configuração do quadrado
 * @returns {JSX.Element} Quadrado renderizado
 *
 * @example
 * <Square
 *   piece={{ type: 'P', color: 'white' }}
 *   isLight={true}
 *   position="e2"
 *   isSelected={false}
 *   isValidMove={true}
 *   onClick={() => handleClick('e2')}
 * />
 */
export default function Square({
  piece,
  isLight,
  position,
  isSelected = false,
  isValidMove = false,
  isCheck = false,
  onClick,
}: SquareProps) {
  // ────────────────────────────────────────────────────────────
  // LÓGICA DE COR
  // ────────────────────────────────────────────────────────────

  // Cor base do quadrado
  let bgColor = isLight ? "#F0D9B5" : "#B58863";

  // Prioridade de cores: Xeque > Selecionado
  if (isCheck) {
    bgColor = "#E74C3C"; // Vermelho para xeque
  } else if (isSelected) {
    bgColor = "#BACA44"; // Verde/amarelo para selecionado
  }

  // Símbolo Unicode da peça
  const symbol = piece ? PIECE_SYMBOLS[piece.color][piece.type] : "";

  // Cor e shadow da peça (contraste melhorado)
  let pieceColor = "#ffffff"; // Brancas em branco
  let pieceShadow = "0 2px 4px rgba(0,0,0,0.4)";

  if (piece?.color === "black") {
    pieceColor = "#000000"; // Pretas em preto
    pieceShadow = "0 2px 4px rgba(255,255,255,0.3)";
  }

  // ────────────────────────────────────────────────────────────
  // RENDER
  // ────────────────────────────────────────────────────────────

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
        // Efeito hover (apenas se não é selecionado/check)
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
          el.style.backgroundColor = isLight ? "#F0D9B5" : "#B58863";
        }
      }}
      data-position={position}
    >
      {/* Indicador de movimento válido: pequeno dot */}
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

      {/* Indicador de captura: dot com anel */}
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
