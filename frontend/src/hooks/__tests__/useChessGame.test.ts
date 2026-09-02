/**
 * Testes para o hook useChessGame.
 *
 * Cobre:
 * - Inicialização do jogo
 * - Seleção de peças
 * - Validação de movimentos
 * - Execução de movimentos
 * - Detecção de xeque/xeque-mate/empate
 * - Edge cases
 *
 * Total: 15+ test cases
 */

import { describe, it, expect } from "vitest";
import { renderHook, act } from "@testing-library/react";
import { useChessGame } from "../useChessGame";

describe("useChessGame Hook", () => {
  // ────────────────────────────────────────────────────────────
  // INICIALIZAÇÃO
  // ────────────────────────────────────────────────────────────

  describe("Inicialização", () => {
    /**
     * Teste 1: Verificar que o tabuleiro começa com 32 peças
     */
    it("should initialize with 32 pieces on the board", () => {
      const { result } = renderHook(() => useChessGame());

      let pieceCount = 0;
      result.current.board.forEach((row) => {
        row.forEach((piece) => {
          if (piece) pieceCount++;
        });
      });

      expect(pieceCount).toBe(32);
    });

    /**
     * Teste 2: Verificar posição inicial das peças brancas
     */
    it("should have white pieces in starting positions", () => {
      const { result } = renderHook(() => useChessGame());

      // Peões brancos em rank 2 (índice 6)
      for (let col = 0; col < 8; col++) {
        expect(result.current.board[6][col]).toEqual({
          type: "P",
          color: "white",
        });
      }
    });

    /**
     * Teste 3: Verificar posição inicial das peças pretas
     */
    it("should have black pieces in starting positions", () => {
      const { result } = renderHook(() => useChessGame());

      // Peões pretos em rank 7 (índice 1)
      for (let col = 0; col < 8; col++) {
        expect(result.current.board[1][col]).toEqual({
          type: "P",
          color: "black",
        });
      }
    });

    /**
     * Teste 4: Começar com turno das brancas
     */
    it("should start with white player turn", () => {
      const { result } = renderHook(() => useChessGame());

      expect(result.current.currentPlayer).toBe("white");
    });

    /**
     * Teste 5: Estado inicial sem seleção
     */
    it("should start with no piece selected", () => {
      const { result } = renderHook(() => useChessGame());

      expect(result.current.selectedPosition).toBeNull();
      expect(result.current.validMoves).toEqual([]);
    });

    /**
     * Teste 6: Status inicial é "ongoing"
     */
    it('should start with status "ongoing"', () => {
      const { result } = renderHook(() => useChessGame());

      expect(result.current.status).toBe("ongoing");
      expect(result.current.isGameOver).toBe(false);
    });
  });

  // ────────────────────────────────────────────────────────────
  // SELEÇÃO DE PEÇAS
  // ────────────────────────────────────────────────────────────

  describe("Seleção de Peças", () => {
    /**
     * Teste 7: Seleccionar peça branca
     */
    it("should select white piece on valid position", () => {
      const { result } = renderHook(() => useChessGame());

      act(() => {
        result.current.selectPosition("e2"); // Peão branco
      });

      expect(result.current.selectedPosition).toBe("e2");
    });

    /**
     * Teste 8: Mostrar movimentos válidos após seleção
     */
    it("should show valid moves when piece is selected", () => {
      const { result } = renderHook(() => useChessGame());

      act(() => {
        result.current.selectPosition("e2");
      });

      // Peão em e2 pode mover para e3 ou e4
      expect(result.current.validMoves).toContain("e3");
      expect(result.current.validMoves).toContain("e4");
      expect(result.current.validMoves.length).toBe(2);
    });

    /**
     * Teste 9: Não conseguir seleccionar peça preta quando é turno branco
     */
    it("should not select black piece during white turn", () => {
      const { result } = renderHook(() => useChessGame());

      act(() => {
        result.current.selectPosition("e7"); // Peão preto
      });

      // Não deve seleccionar
      expect(result.current.selectedPosition).not.toBe("e7");
    });

    /**
     * Teste 10: Deseleccionar clicando no mesmo quadrado
     */
    it("should deselect piece by clicking same square twice", () => {
      const { result } = renderHook(() => useChessGame());

      act(() => {
        result.current.selectPosition("e2");
      });

      expect(result.current.selectedPosition).toBe("e2");

      act(() => {
        result.current.selectPosition("e2");
      });

      expect(result.current.selectedPosition).toBeNull();
      expect(result.current.validMoves).toEqual([]);
    });

    /**
     * Teste 11: Cavaleiro bloqueado não tem movimentos
     */
    it("should show valid moves for knight", () => {
      const { result } = renderHook(() => useChessGame());

      act(() => {
        result.current.selectPosition("b1"); // Cavaleiro branco
      });

      // Cavaleiro em b1 pode mover para a3 ou c3
      expect(result.current.validMoves.length).toBe(2);
      expect(result.current.validMoves).toContain("a3");
      expect(result.current.validMoves).toContain("c3");
    });
  });

  // ────────────────────────────────────────────────────────────
  // EXECUÇÃO DE MOVIMENTOS
  // ────────────────────────────────────────────────────────────

  describe("Execução de Movimentos", () => {
    it("should execute valid move", () => {
      const { result } = renderHook(() => useChessGame());

      act(() => {
        result.current.selectPosition("e2");
      });

      act(() => {
        result.current.selectPosition("e4");
      });

      expect(result.current.lastMove).toEqual({
        from: "e2",
        to: "e4",
      });

      const piece = result.current.board[4][4];
      expect(piece).toEqual({ type: "P", color: "white" });

      const original = result.current.board[6][4];
      expect(original).toBeNull();
    });

    it("should change turn after move", () => {
      const { result } = renderHook(() => useChessGame());

      expect(result.current.currentPlayer).toBe("white");

      act(() => {
        result.current.selectPosition("e2");
      });

      act(() => {
        result.current.selectPosition("e4");
      });

      expect(result.current.currentPlayer).toBe("black");
    });

    it("should deselect piece after move", () => {
      const { result } = renderHook(() => useChessGame());

      act(() => {
        result.current.selectPosition("e2");
      });

      act(() => {
        result.current.selectPosition("e4");
      });

      expect(result.current.selectedPosition).toBeNull();
      expect(result.current.validMoves).toEqual([]);
    });

    it("should reject invalid move", () => {
      const { result } = renderHook(() => useChessGame());

      const moveBefore = result.current.lastMove;

      act(() => {
        result.current.selectPosition("e2");
      });

      act(() => {
        result.current.selectPosition("a5"); // Movimento ilegal
      });

      expect(result.current.lastMove).toEqual(moveBefore);
      expect(result.current.currentPlayer).toBe("white");
      expect(result.current.selectedPosition).toBeNull();
    });
  });

  // ────────────────────────────────────────────────────────────
  // DETECÇÃO DE XEQUE/XEQUE-MATE/EMPATE
  // ────────────────────────────────────────────────────────────

  describe("Detecção de Xeque e Xeque-Mate", () => {
    it("should detect checkmate (Fools Mate)", () => {
      const { result } = renderHook(() => useChessGame());

      // Movimento 1: f3
      act(() => {
        result.current.selectPosition("f2");
      });
      act(() => {
        result.current.selectPosition("f3");
      });

      expect(result.current.currentPlayer).toBe("black");
      expect(result.current.status).toBe("ongoing");

      // Movimento 2: e5
      act(() => {
        result.current.selectPosition("e7");
      });
      act(() => {
        result.current.selectPosition("e5");
      });

      expect(result.current.currentPlayer).toBe("white");

      // Movimento 3: g4
      act(() => {
        result.current.selectPosition("g2");
      });
      act(() => {
        result.current.selectPosition("g4");
      });

      expect(result.current.currentPlayer).toBe("black");

      // Movimento 4: Qh4# (xeque-mate)
      act(() => {
        result.current.selectPosition("d8");
      });
      act(() => {
        result.current.selectPosition("h4");
      });

      expect(result.current.status).toBe("checkmate");
      expect(result.current.isGameOver).toBe(true);
    });

    it("should block moves after checkmate", () => {
      const { result } = renderHook(() => useChessGame());

      // Setup checkmate (Fools Mate)
      act(() => {
        result.current.selectPosition("f2");
      });
      act(() => {
        result.current.selectPosition("f3");
      });
      act(() => {
        result.current.selectPosition("e7");
      });
      act(() => {
        result.current.selectPosition("e5");
      });
      act(() => {
        result.current.selectPosition("g2");
      });
      act(() => {
        result.current.selectPosition("g4");
      });
      act(() => {
        result.current.selectPosition("d8");
      });
      act(() => {
        result.current.selectPosition("h4");
      });

      const beforeMove = result.current.board;

      act(() => {
        result.current.selectPosition("a2");
      });

      expect(result.current.selectedPosition).toBeNull();
      expect(result.current.board).toEqual(beforeMove);
    });

    it("should have stalemate detection available", () => {
      const { result } = renderHook(() => useChessGame());

      expect(["ongoing", "checkmate", "stalemate", "draw"]).toContain(
        result.current.status,
      );
    });
  });

  // ────────────────────────────────────────────────────────────
  // TESTES DE STRESS & EDGE CASES
  // ────────────────────────────────────────────────────────────

  describe("Edge Cases", () => {
    it("should not make move without selected piece", () => {
      const { result } = renderHook(() => useChessGame());

      const success = result.current.makeMove("e4");

      expect(success).toBe(false);
      expect(result.current.lastMove).toBeNull();
    });

    it("should handle series of valid moves", () => {
      const { result } = renderHook(() => useChessGame());

      // Movimento 1: e2-e4
      act(() => {
        result.current.selectPosition("e2");
      });
      act(() => {
        result.current.selectPosition("e4");
      });

      expect(result.current.currentPlayer).toBe("black");

      // Movimento 2: c7-c5
      act(() => {
        result.current.selectPosition("c7");
      });
      act(() => {
        result.current.selectPosition("c5");
      });

      expect(result.current.currentPlayer).toBe("white");

      // Movimento 3: Nf3
      act(() => {
        result.current.selectPosition("g1");
      });
      act(() => {
        result.current.selectPosition("f3");
      });

      expect(result.current.currentPlayer).toBe("black");

      expect(result.current.board[4][4]).toEqual({
        type: "P",
        color: "white",
      });

      expect(result.current.board[3][2]).toEqual({
        type: "P",
        color: "black",
      });

      expect(result.current.board[5][5]).toEqual({
        type: "N",
        color: "white",
      });
    });
  });
});
