import { useEffect, useState } from "react";
import { apiClient } from "../services/api";
import {
  USE_MOCK_API,
  mockHealthCheck,
  type HealthData,
  type HealthResponse,
} from "../services/mockApi";

/**
 * Hook para verificar a saúde do servidor backend.
 *
 * - Se USE_MOCK_API é true: usa dados simulados
 * - Se USE_MOCK_API é false: chama API real
 * - Fallback automático para mock se API falhar
 *
 * @hook
 * @returns {Object} Estado de saúde com dados, loading e erro
 *
 * @example
 * const { data, loading, error } = useHealth()
 */
export function useHealth() {
  // ────────────────────────────────────────────────────────────
  // STATE
  // ────────────────────────────────────────────────────────────

  const [data, setData] = useState<HealthData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  // ────────────────────────────────────────────────────────────
  // EFFECT
  // ────────────────────────────────────────────────────────────

  useEffect(() => {
    const checkHealth = async () => {
      try {
        setLoading(true);
        setError(null);

        let response: HealthResponse;

        if (USE_MOCK_API) {
          // Usar mock data
          console.log("📱 Modo Mock: usando dados simulados");
          response = await mockHealthCheck();
        } else {
          // Chamar API real
          console.log("🌐 Modo Real: conectando ao backend...");
          const apiResponse = await apiClient.get<HealthResponse>("/health");
          response = apiResponse.data;
        }

        if (response.success && response.data) {
          setData(response.data);
          console.log(
            `✓ Backend saúde OK (${USE_MOCK_API ? "mock" : "real"}):`,
            response.data,
          );
        } else {
          throw new Error("Resposta inválida do servidor");
        }
      } catch (err) {
        // Se API real falhar, tentar fallback para mock
        if (!USE_MOCK_API) {
          console.warn("⚠️ Falha na API real, tentando mock como fallback...");
          try {
            const mockResponse = await mockHealthCheck();
            setData(mockResponse.data);
            console.log("✓ Fallback para mock bem-sucedido");
            return;
          } catch (mockErr) {
            // Mock também falhou
          }
        }

        const error =
          err instanceof Error ? err : new Error("Erro desconhecido");
        setError(error);
        console.error("✗ Erro ao verificar saúde:", error.message);
      } finally {
        setLoading(false);
      }
    };

    checkHealth();
  }, []);

  // ────────────────────────────────────────────────────────────
  // RETURN
  // ────────────────────────────────────────────────────────────

  return {
    data,
    loading,
    error,
  };
}
