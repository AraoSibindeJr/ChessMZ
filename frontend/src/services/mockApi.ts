/**
 * Serviço de Mock API para desenvolvimento independente do backend.
 *
 * Simula respostas da API real, permitindo testar e desenvolver
 * o frontend sem depender do servidor backend.
 *
 * Trocar para API real: altere USE_MOCK_API para false
 */

// ────────────────────────────────────────────────────────────
// CONFIGURAÇÃO
// ────────────────────────────────────────────────────────────

/**
 * true: usa mocks | false: usa API real
 * Altere para false quando backend estiver pronto
 */
export const USE_MOCK_API = true;

// ────────────────────────────────────────────────────────────
// TIPOS
// ────────────────────────────────────────────────────────────

export interface HealthData {
  status: string;
  timestamp: string;
  uptime: number;
}

export interface HealthResponse {
  success: boolean;
  data: HealthData;
}

// ────────────────────────────────────────────────────────────
// MOCK DATA
// ────────────────────────────────────────────────────────────

/**
 * Simula resposta de GET /api/health
 * Retarda 500ms para simular latência da rede
 */
export const mockHealthCheck = (): Promise<HealthResponse> => {
  return new Promise((resolve) => {
    // Simular latência
    setTimeout(() => {
      resolve({
        success: true,
        data: {
          status: "ok",
          timestamp: new Date().toISOString(),
          uptime: Math.random() * 100, // 0-100ms
        },
      });
    }, 500);
  });
};

/**
 * Simula erro de conexão (para testes de error handling)
 */
export const mockHealthCheckError = (): Promise<never> => {
  return new Promise((_, reject) => {
    setTimeout(() => {
      reject(new Error("Servidor indisponível (mock)"));
    }, 500);
  });
};
