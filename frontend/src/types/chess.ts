// Tipos de pecas
export type PieceType = "K" | "Q" | "R" | "B" | "N" | "P";

// Cores das pecas
export type PieceColor = "white" | "black";

// Representacao de uma peca
export interface Piece {
  type: PieceType;
  color: PieceColor;
}

// Posicao no tabuleiro (a1 a h8)
export type Position = string;

// Estado do tabuleiro (64 quadrados)
export type BoardState = (Piece | null)[][];

// Criar tabuleiro vazio
export function createEmptyBoard(): BoardState {
  return Array(8)
    .fill(null)
    .map(() => Array(8).fill(null));
}

// Posicao inicial do xadrez
export function getInitialBoard(): BoardState {
  const board = createEmptyBoard();

  // Pecas pretas (topo)
  const blackBackRank = ["R", "N", "B", "Q", "K", "B", "N", "R"] as PieceType[];
  blackBackRank.forEach((type, col) => {
    board[0][col] = { type, color: "black" };
  });

  // Peoes pretos
  for (let col = 0; col < 8; col++) {
    board[1][col] = { type: "P", color: "black" };
  }

  // Peoes brancos
  for (let col = 0; col < 8; col++) {
    board[6][col] = { type: "P", color: "white" };
  }

  // Pecas brancas (topo)
  const whiteBackRank = ["R", "N", "B", "Q", "K", "B", "N", "R"] as PieceType[];
  whiteBackRank.forEach((type, col) => {
    board[7][col] = { type, color: "white" };
  });

  return board;
}

// Converter indice (row, col) para notacao algebrica (a1-h8)
export function indexToPosition(row: number, col: number): Position {
  const files = "abcdefgh";
  const ranks = "87654321";
  return `${files[col]}${ranks[row]}`;
}

// Converter notacai algebrica para indices
export function positionToIndex(pos: Position): [number, number] {
  const col = pos.charCodeAt(0) - "a".charCodeAt(0);
  const row = 8 - parseInt(pos[1]);
  return [row, col];
}

// Unicode symbols
export const PIECE_SYMBOLS = {
  white: {
    K: "♔",
    Q: "♕",
    R: "♖",
    B: "♗",
    N: "♘",
    P: "♙",
  },
  black: {
    K: "♚",
    Q: "♛",
    R: "♜",
    B: "♝",
    N: "♞",
    P: "♟",
  },
};
