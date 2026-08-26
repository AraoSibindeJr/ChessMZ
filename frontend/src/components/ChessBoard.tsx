import type { BoardState } from "../types/chess";
import { indexToPosition } from "../types/chess";
import Square from "./Square";

/**
 * Props para o componente ChessBoard.
 * @interface
 */
interface ChessBoardProps {
  /** Estado do tabuleiro (8x8 array com peças) */
  board: BoardState;

  /** Posição da peça selecionada (ex: "e2"), null se nenhuma */
  selectedPosition?: string | null;

  /** Array de posições válidas para movimento (ex: ["e3", "e4"]) */
  validMoves?: string[];

  /** true se o rei do jogador atual está em xeque */
  isCheck?: boolean;

  /** Posição do rei em xeque (ex: "e1"), usado para destaque visual */
  checkPosition?: string | null;

  /** Callback executado quando quadrado é clicado */
  onSquareClick?: (position: string) => void;
}

/**
 * Componente do tabuleiro de xadrez interativo.
 *
 * Renderiza um grid 8x8 com:
 * - Peças nas posições corretas
 * - Indicadores de movimento válido (pequenos dots)
 * - Destaque visual do rei em xeque (vermelho)
 * - Destaque visual da peça selecionada (amarelo)
 *
 * @component
 * @param {ChessBoardProps} props - Configuração do tabuleiro
 * @returns {JSX.Element} Tabuleiro renderizado
 *
 * @example
 * <ChessBoard
 *   board={board}
 *   selectedPosition="e2"
 *   validMoves={["e3", "e4"]}
 *   onSquareClick={handleClick}
 * />
 */
export default function ChessBoard({
  board,
  selectedPosition = null,
  validMoves = [],
  isCheck = false,
  checkPosition = null,
  onSquareClick,
}: ChessBoardProps) {
  /**
   * Determina se uma posição de tabuleiro tem fundo claro ou escuro.
   * Fórmula: (row + col) % 2 === 0 → claro, senão escuro
   *
   * @param {number} row - Índice de linha (0-7)
   * @param {number} col - Índice de coluna (0-7)
   * @returns {boolean} true se quadrado é claro
   */
  const isLightSquare = (row: number, col: number): boolean => {
    return (row + col) % 2 === 0;
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* Grid 8x8 do tabuleiro */}
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
        {/* Renderizar 64 quadrados */}
        {board.map((row, rowIndex) =>
          row.map((piece, colIndex) => {
            const position = indexToPosition(rowIndex, colIndex);
            const isLight = isLightSquare(rowIndex, colIndex);
            const isSelected = position === selectedPosition;
            const isValidMove = validMoves.includes(position);

            return (
              <Square
                key={position}
                piece={piece}
                isLight={isLight}
                position={position}
                isSelected={isSelected}
                isValidMove={isValidMove}
                isCheck={isCheck && position === checkPosition}
                onClick={() => onSquareClick?.(position)}
              />
            );
          }),
        )}
      </div>

      {/* Informação descritiva */}
      <div className="mt-4 text-center text-sm text-gray-600">
        <p>Tabuleiro com posição inicial</p>
      </div>
    </div>
  );
}
