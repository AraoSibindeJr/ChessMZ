/*import {
  getInitialBoard,
  indexToPosition,
  positionToIndex,
} from "../../types/chess";

describe("ChessBoard", () => {
  test("getInitialBoard retorna 32 peças", () => {
    const board = getInitialBoard();
    let pieceCount = 0;
    board.forEach((row) => {
      row.forEach((piece) => {
        if (piece) pieceCount++;
      });
    });
    expect(pieceCount).toBe(32);
  });

  test("indexToPosition funciona corretamente", () => {
    expect(indexToPosition(0, 0)).toBe("a8");
    expect(indexToPosition(7, 0)).toBe("a1");
    expect(indexToPosition(7, 7)).toBe("h1");
  });

  test("positionToIndex funciona corretamente", () => {
    expect(positionToIndex("a8")).toEqual([0, 0]);
    expect(positionToIndex("a1")).toEqual([7, 0]);
    expect(positionToIndex("h1")).toEqual([7, 7]);
  });

  test("peças brancas estão em baixo", () => {
    const board = getInitialBoard();
    // Linhas 6 e 7 (brancas)
    expect(board[6][0]?.color).toBe("white");
    expect(board[7][0]?.color).toBe("white");
  });

  test("peças pretas estão em cima", () => {
    const board = getInitialBoard();
    // Linhas 0 e 1 (pretas)
    expect(board[0][0]?.color).toBe("black");
    expect(board[1][0]?.color).toBe("black");
  });
});*/
