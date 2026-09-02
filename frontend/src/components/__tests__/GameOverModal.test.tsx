/**
 * Testes para o componente GameOverModal.
 *
 * Cobre:
 * - Mostrar/ocultar modal baseado em status
 * - Mensagens correctas para diferentes resultados
 * - Botões funcionais
 *
 * Total: 5 test cases
 */

import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import GameOverModal from "../GameOverModal";

describe("GameOverModal Component", () => {
  // ────────────────────────────────────────────────────────────
  // VISIBILIDADE
  // ────────────────────────────────────────────────────────────

  describe("Visibilidade", () => {
    /**
     * Teste 1: Não renderizar quando jogo está em curso
     */
    it("should not render when game is ongoing", () => {
      const { container } = render(
        <GameOverModal status="ongoing" currentPlayer="white" />,
      );

      // Modal não deve estar no DOM
      expect(container.firstChild).toBeNull();
    });

    /**
     * Teste 2: Renderizar quando xeque-mate
     */
    it("should render when checkmate", () => {
      render(
        <GameOverModal
          status="checkmate"
          currentPlayer="black"
          lastMove={{ from: "e2", to: "e4" }}
        />,
      );

      // Deve estar visível
      expect(screen.getByText(/Brancas Venceram/)).toBeInTheDocument();
    });

    /**
     * Teste 3: Renderizar quando empate por afogamento
     */
    it("should render when stalemate", () => {
      render(<GameOverModal status="stalemate" currentPlayer="white" />);

      expect(screen.getByText(/Afogamento/)).toBeInTheDocument();
    });
  });

  // ────────────────────────────────────────────────────────────
  // CONTEÚDO
  // ────────────────────────────────────────────────────────────

  describe("Conteúdo", () => {
    /**
     * Teste 4: Mostrar ganhador correcto em xeque-mate
     */
    it("should show correct winner in checkmate", () => {
      const { rerender } = render(
        <GameOverModal status="checkmate" currentPlayer="white" />,
      );

      // Se currentPlayer é branco, significa que pretas venceram
      // (porque foi o turno de brancas e estão em xeque-mate)
      expect(screen.getByText(/Pretas Venceram/)).toBeInTheDocument();

      rerender(<GameOverModal status="checkmate" currentPlayer="black" />);

      expect(screen.getByText(/Brancas Venceram/)).toBeInTheDocument();
    });

    /**
     * Teste 5: Mostrar último movimento
     */
    it("should display last move", () => {
      render(
        <GameOverModal
          status="checkmate"
          currentPlayer="white"
          lastMove={{ from: "e2", to: "e4" }}
        />,
      );

      expect(screen.getByText(/E2 → E4/)).toBeInTheDocument();
    });
  });

  // ────────────────────────────────────────────────────────────
  // INTERAÇÕES
  // ────────────────────────────────────────────────────────────

  describe("Interações", () => {
    /**
     * Teste 6: Chamar onNewGame ao clicar botão
     */
    it("should call onNewGame when button is clicked", async () => {
      const handleNewGame = vi.fn();
      render(
        <GameOverModal
          status="checkmate"
          currentPlayer="white"
          onNewGame={handleNewGame}
        />,
      );

      const button = screen.getByText(/Nova Partida/);
      await userEvent.click(button);

      expect(handleNewGame).toHaveBeenCalledOnce();
    });
  });
});
