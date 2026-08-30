import axios, { type AxiosInstance } from "axios";

/**
 * Instância de cliente HTTP (axios).
 * Pré-configurada com:
 * - Base URL da API
 * - Headers padrão
 * - Interceptores JWT e erro 401
 */
const apiClient: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:3000/api",
  headers: {
    "Content-Type": "application/json",
  },
});

/**
 * Interceptor para erro 401 (não autorizado).
 * Se a resposta for 401, redireciona para login (futuro).
 */
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      console.warn("Sessão expirada (401) — redirecionando para login");
      // Futuro: window.location.href = '/login'
    }
    return Promise.reject(error);
  },
);

/**
 * Interceptor para adicionar JWT token aos headers.
 * Futuro: quando sistema de autenticação estiver pronto.
 */
apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem("authToken");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// ✅ EXPORTAR COMO NAMED EXPORT
export { apiClient };

// ✅ EXPORTAR COMO DEFAULT EXPORT (compatibilidade)
export default apiClient;
