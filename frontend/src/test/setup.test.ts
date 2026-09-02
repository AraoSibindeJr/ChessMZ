/**
 * Teste de setup — Validar que o Vitest está configurado corretamente.
 *
 * Este é um teste simples para confirmar que tudo está funcionando.
 */

import { describe, it, expect } from "vitest";

describe("Vitest Setup", () => {
  /**
   * Teste básico de arithmetic.
   * Se isto passar, Vitest está funcionando.
   */
  it("should have Vitest working", () => {
    expect(1 + 1).toBe(2);
  });

  /**
   * Teste de localStorage mock.
   */
  it("should have localStorage mock", () => {
    const key = "testKey";
    const value = "testValue";

    localStorage.setItem(key, value);
    expect(localStorage.getItem(key)).toBe(value);

    localStorage.removeItem(key);
    expect(localStorage.getItem(key)).toBeNull();
  });

  /**
   * Teste de environment.
   */
  it("should have DOM available", () => {
    const element = document.createElement("div");
    element.textContent = "Hello, Vitest!";

    expect(element.textContent).toBe("Hello, Vitest!");
  });

  /**
   * Teste de tipos TypeScript.
   */
  it("should support TypeScript", () => {
    const greeting: string = "Hello";
    const count: number = 42;

    expect(typeof greeting).toBe("string");
    expect(typeof count).toBe("number");
  });
});
