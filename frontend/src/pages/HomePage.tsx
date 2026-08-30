import { useNavigate } from "react-router-dom";
import { useHealth } from "../hooks/useHealth";
import LoadingSpinner from "../components/LoadingSpinner";

/**
 * Página inicial — Homepage.
 *
 * Design minimalista com foco na ação principal: "Começar a Jogar".
 *
 * Filosofia:
 * - Remover tudo que não é essencial
 * - Hierarquia visual clara
 * - Uma ação principal bem definida
 * - Responsivo em todos os tamanhos
 *
 * @component
 * @returns {JSX.Element} Homepage renderizada
 */
export default function HomePage() {
  const navigate = useNavigate();
  const { data, loading, error } = useHealth();

  // ────────────────────────────────────────────────────────────
  // HANDLERS
  // ────────────────────────────────────────────────────────────

  /**
   * Navega para página de jogo.
   * Independente do status de conexão (usa mock se necessário).
   */
  const handleStartGame = () => {
    navigate("/game");
  };

  /**
   * Recarrega a página para tentar reconectar.
   */
  const handleRetry = () => {
    window.location.reload();
  };

  // ────────────────────────────────────────────────────────────
  // RENDER
  // ────────────────────────────────────────────────────────────

  return (
    <div className="min-h-screen bg-gradient-to-br from-dark to-primary p-4 md:p-6 flex flex-col justify-center items-center">
      {/* Container Principal */}
      <div className="w-full max-w-lg">
        {/* Logo & Título */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-3">
            ♟️ ChessMZ
          </h1>
        </div>

        {/* Botão Principal — Começar a Jogar */}
        <button
          onClick={handleStartGame}
          disabled={loading}
          className="w-full bg-primary hover:bg-opacity-90 disabled:bg-gray-400 text-white font-bold py-4 px-6 rounded-lg transition-all duration-200 ease-out mb-6 shadow-lg hover:shadow-xl active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
          style={{
            fontSize: "1.1rem",
            minHeight: "56px",
            cursor: loading ? "not-allowed" : "pointer",
          }}
        >
          {loading ? (
            <span className="flex items-center justify-center gap-2">
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
              A carregar...
            </span>
          ) : (
            " Começar Jogo"
          )}
        </button>

        {/* Estado de Erro */}
        {error && (
          <div className="mb-6 bg-red-50 border-l-4 border-red-500 p-4 rounded">
            <p className="text-red-700 font-semibold text-sm">
              Não conseguimos conectar ao servidor
            </p>
            <p className="text-red-600 text-xs mt-1">
              Mas pode jogar mesmo assim! Usaremos dados locais.
            </p>
          </div>
        )}

        {/* Botão Tentar Novamente (só aparece em erro) */}
        {error && (
          <button
            onClick={handleRetry}
            className="w-full bg-accent hover:bg-opacity-90 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 ease-out shadow-md hover:shadow-lg active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent"
            style={{
              fontSize: "1rem",
            }}
          >
            Tentar Novamente
          </button>
        )}

        {/* Status Discreto */}
        <div className="mt-8 text-center">
          {loading ? (
            <p className="text-gray-300 text-sm">Verificando conexão...</p>
          ) : data ? (
            <p className="text-green-300 text-sm"> </p>
          ) : error ? (
            <p className="text-orange-300 text-sm">
              Modo offline (dados locais)
            </p>
          ) : null}
        </div>
      </div>

      {/* Footer */}
      <div className="absolute bottom-4 left-0 right-0 text-center">
        <p className="text-gray-400 text-xs">
          ChessMZ © 2026 — Jogue xadrez de Moçambique
        </p>
      </div>
    </div>
  );
}
