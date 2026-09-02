/**
 * Setup file para testes.
 *
 * Executa antes de cada suite de testes.
 * Configura mocks globais, matchers customizados, etc.
 */

import "@testing-library/jest-dom";
import { expect, afterEach, vi } from "vitest";
import { cleanup } from "@testing-library/react";

// ────────────────────────────────────────────────────────────
// CLEANUP
// ────────────────────────────────────────────────────────────

/**
 * Limpar DOM após cada teste.
 * Evita que testes se afetem mutuamente.
 */
afterEach(() => {
  cleanup();
});

// ────────────────────────────────────────────────────────────
// MOCKS GLOBAIS
// ────────────────────────────────────────────────────────────

/**
 * Mock de localStorage para testes.
 * Permite testar persistência sem database.
 */
const localStorageMock = (() => {
  let store: Record<string, string> = {};

  return {
    getItem: (key: string) => store[key] || null,
    setItem: (key: string, value: string) => {
      store[key] = value.toString();
    },
    removeItem: (key: string) => {
      delete store[key];
    },
    clear: () => {
      store = {};
    },
  };
})();

Object.defineProperty(window, "localStorage", {
  value: localStorageMock,
});

// ────────────────────────────────────────────────────────────
// CONSOLE MOCKS
// ────────────────────────────────────────────────────────────

/**
 * Suprimir console.logs em testes (opcional).
 * Descomente se quiser ver todos os logs.
 */
// vi.spyOn(console, 'log').mockImplementation(() => {})
// vi.spyOn(console, 'warn').mockImplementation(() => {})
// vi.spyOn(console, 'error').mockImplementation(() => {})

// ────────────────────────────────────────────────────────────
// CUSTOM MATCHERS (Opcional)
// ────────────────────────────────────────────────────────────

/**
 * Exemplo de custom matcher (descomente se quiser).
 *
 * expect(element).toBeVisible()
 */
expect.extend({
  toBeWithinRange(received: number, floor: number, ceiling: number) {
    const pass = received >= floor && received <= ceiling;
    if (pass) {
      return {
        message: () =>
          `expected ${received} not to be within range ${floor} - ${ceiling}`,
        pass: true,
      };
    } else {
      return {
        message: () =>
          `expected ${received} to be within range ${floor} - ${ceiling}`,
        pass: false,
      };
    }
  },
});

// ────────────────────────────────────────────────────────────
// TIPOS GLOBAIS
// ────────────────────────────────────────────────────────────

declare global {
  namespace Vi {
    interface Matchers<R> {
      toBeWithinRange(floor: number, ceiling: number): R;
    }
  }
}
