/// <reference types="vitest" />
import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import path from "path";

/**
 * Configuração de Vitest para testes da aplicação.
 *
 * Características:
 * - Environment: happy-dom (DOM simulator leve)
 * - Globals: describe, it, expect sem imports
 * - Setup: jest-dom matchers
 * - Coverage: v8 (mais rápido que c8)
 */
export default defineConfig({
  plugins: [react()],
  test: {
    // ────────────────────────────────────────────────────────────
    // ENVIRONMENT & GLOBALS
    // ────────────────────────────────────────────────────────────

    /** Environment para rodar testes (happy-dom é mais leve) */
    environment: "happy-dom",

    /** Disponibilizar globais (describe, it, expect) sem import */
    globals: true,

    /** Setup files a correr antes dos testes */
    setupFiles: ["./src/test/setup.ts"],

    // ────────────────────────────────────────────────────────────
    // INCLUDES & EXCLUDES
    // ────────────────────────────────────────────────────────────

    /** Padrão de ficheiros de teste */
    include: ["src/**/*.{test,spec}.{js,ts,jsx,tsx}"],

    /** Ficheiros a ignorar */
    exclude: ["node_modules", "dist", ".idea", ".git", ".cache"],

    // ────────────────────────────────────────────────────────────
    // COVERAGE
    // ────────────────────────────────────────────────────────────

    coverage: {
      provider: "v8",
      reporter: ["text", "json", "html", "lcov"],
      exclude: [
        "node_modules/",
        "src/test/",
        "**/*.d.ts",
        "**/*.config.ts",
        "**/mockData",
      ],
      // Thresholds agora vão aqui
      thresholds: {
        lines: 80,
        functions: 80,
        branches: 80,
        statements: 80,
      },
    },

    // ────────────────────────────────────────────────────────────
    // REPORTERS
    // ────────────────────────────────────────────────────────────

    reporters: ["verbose"],
    outputFile: {
      html: "./coverage/index.html",
    },

    // ────────────────────────────────────────────────────────────
    // TIMEOUTS
    // ────────────────────────────────────────────────────────────

    testTimeout: 10000,
    hookTimeout: 10000,
  },
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "./src"),
    },
  },
});
