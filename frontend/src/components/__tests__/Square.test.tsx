/**
 * Testes para o componente Square.
 *
 * Cobre:
 * - Renderização de quadrados vazios
 * - Renderização de peças
 * - Estados visuais (selecionado, movimento válido, xeque)
 * - Interações (cliques)
 *
 * Total: 8 test cases
 */

import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Square from "../Square";
import type { Piece } from "../../types/chess";

describe("Square Component", () => {
  // ────────────────────────────────────────────────────────────
  // RENDERIZAÇÃO BÁSICA
  // ────────────────────────────────────────────────────────────

  describe("Renderização", () => {
    /**
     * Teste 1: Renderizar quadrado vazio
     */
    it("should render empty square", () => {
      const { container } = render(
        <Square piece={null} isLight={true} position="e4" onClick={() => {}} />,
      );

      const square = container.querySelector('[data-position="e4"]');
      expect(square).toBeInTheDocument();
      expect(square?.textContent).toBe("");
    });

    /**
     * Teste 2: Renderizar peça branca
     */
    it("should render white piece", () => {
      const piece: Piece = { type: "K", color: "white" };
      const { container } = render(
        <Square
          piece={piece}
          isLight={true}
          position="e1"
          onClick={() => {}}
        />,
      );

      const square = container.querySelector('[data-position="e1"]');
      // Rei branco é ♔
      expect(square?.textContent).toContain("♔");
    });

    /**
     * Teste 3: Renderizar peça preta
     */
    it("should render black piece", () => {
      const piece: Piece = { type: "K", color: "black" };
      const { container } = render(
        <Square
          piece={piece}
          isLight={false}
          position="e8"
          onClick={() => {}}
        />,
      );

      const square = container.querySelector('[data-position="e8"]');
      // Rei preto é ♚
      expect(square?.textContent).toContain("♚");
    });

    /**
     * Teste 4: Renderizar todos os tipos de peças
     */
    it("should render all piece types", () => {
      const pieces: Piece[] = [
        { type: "P", color: "white" },
        { type: "N", color: "white" },
        { type: "B", color: "white" },
        { type: "R", color: "white" },
        { type: "Q", color: "white" },
        { type: "K", color: "white" },
      ];

      pieces.forEach((piece) => {
        const { container } = render(
          <Square
            piece={piece}
            isLight={true}
            position="a1"
            onClick={() => {}}
          />,
        );

        const square = container.querySelector('[data-position="a1"]');
        expect(square?.textContent?.length).toBeGreaterThan(0);
      });
    });
  });

  // ────────────────────────────────────────────────────────────
  // ESTADOS VISUAIS
  // ────────────────────────────────────────────────────────────

  describe("Estados Visuais", () => {
    /**
     * Teste 5: Quadrado selecionado tem cor diferente
     */
    it("should have different background when selected", () => {
      const { container: selectedContainer } = render(
        <Square
          piece={null}
          isLight={true}
          position="e2"
          isSelected={true}
          onClick={() => {}}
        />,
      );

      const { container: unselectedContainer } = render(
        <Square
          piece={null}
          isLight={true}
          position="e2"
          isSelected={false}
          onClick={() => {}}
        />,
      );

      const selectedSquare = selectedContainer.querySelector(
        '[data-position="e2"]',
      ) as HTMLElement;
      const unselectedSquare = unselectedContainer.querySelector(
        '[data-position="e2"]',
      ) as HTMLElement;

      // Cores devem ser diferentes
      expect(selectedSquare?.style.backgroundColor).not.toBe(
        unselectedSquare?.style.backgroundColor,
      );
    });

    /**
     * Teste 6: Quadrado com movimento válido mostra indicador
     */
    it("should show indicator for valid move", () => {
      const { container } = render(
        <Square
          piece={null}
          isLight={true}
          position="e4"
          isValidMove={true}
          onClick={() => {}}
        />,
      );

      // Procurar por div indicadora (12px circle)
      const square = container.querySelector('[data-position="e4"]');
      const indicator = square?.querySelector("div");

      // Deve ter pelo menos um elemento filho (o indicador)
      expect(square?.children.length).toBeGreaterThan(0);
    });

    /**
     * Teste 7: Quadrado em xeque tem cor vermelha
     */
    it("should have red background when in check", () => {
      const { container } = render(
        <Square
          piece={{ type: "K", color: "white" }}
          isLight={true}
          position="e1"
          isCheck={true}
          onClick={() => {}}
        />,
      );

      const square = container.querySelector(
        '[data-position="e1"]',
      ) as HTMLElement;
      const bgColor = square?.style.backgroundColor;

      // Deve conter cor vermelha (#E74C3C ou variantes)
      // Verificar se é uma das variações de vermelho
      const isRed =
        bgColor?.includes("E74C3C") ||
        bgColor?.includes("e74c3c") ||
        bgColor?.includes("rgb(231, 76, 60)") ||
        bgColor?.includes("rgb(229, 57, 53)");

      expect(isRed).toBe(true);
    });
  });

  // ────────────────────────────────────────────────────────────
  // INTERAÇÕES
  // ────────────────────────────────────────────────────────────

  describe("Interações", () => {
    /**
     * Teste 8: Chamar onClick ao clicar no quadrado
     */
    it("should call onClick handler when clicked", async () => {
      const handleClick = vi.fn();
      const { container } = render(
        <Square
          piece={null}
          isLight={true}
          position="e4"
          onClick={handleClick}
        />,
      );

      const square = container.querySelector('[data-position="e4"]');
      await userEvent.click(square as HTMLElement);

      expect(handleClick).toHaveBeenCalledOnce();
    });
  });
});
