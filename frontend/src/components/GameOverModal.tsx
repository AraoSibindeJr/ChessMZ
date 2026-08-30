/**
 * Props para o modal de fim de jogo.
 * @interface
 */
interface GameOverModalProps {
  /** Status do jogo (checkmate, stalemate, draw, ongoing) */
  status: "checkmate" | "stalemate" | "draw" | "ongoing";

  /** Jogador atual (quem é a vez) */
  currentPlayer: "white" | "black";

  /** Último movimento realizado */
  lastMove?: { from: string; to: string } | null;

  /** Callback ao clicar "Nova Partida" */
  onNewGame?: () => void;
}

/**
 * Modal que aparece quando o jogo termina.
 *
 * Mostra:
 * - Título (vencedor/empate)
 * - Descrição do resultado
 * - Último movimento
 * - Botões de ação
 *
 * @component
 * @param {GameOverModalProps} props - Configuração do modal
 * @returns {JSX.Element | null} Modal renderizado ou null se jogo ativo
 */
export default function GameOverModal({
  status,
  currentPlayer,
  lastMove,
  onNewGame,
}: GameOverModalProps) {
  // Não renderizar se jogo está ativo
  if (status === "ongoing") return null;

  /**
   * Gera título baseado no status do jogo.
   * Em xeque-mate, o jogador OPOSTO venceu.
   *
   * @returns {string} Título do modal
   */
  const getTitle = () => {
    if (status === "checkmate") {
      return currentPlayer === "white"
        ? "🏆 Pretas Venceram!"
        : "🏆 Brancas Venceram!";
    }
    if (status === "stalemate") {
      return "🤝 Empate (Afogamento)";
    }
    return "🤝 Empate";
  };

  /**
   * Gera descrição baseada no status do jogo.
   *
   * @returns {string} Descrição do resultado
   */
  const getDescription = () => {
    if (status === "checkmate") {
      return currentPlayer === "white"
        ? "As peças pretas fizeram xeque-mate! Parabéns ao vencedor!"
        : "As peças brancas fizeram xeque-mate! Parabéns ao vencedor!";
    }
    if (status === "stalemate") {
      return "O rei não está em xeque mas não tem movimentos legais. Jogo empatado.";
    }
    return "O jogo terminou em empate.";
  };

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1000,
        animation: "fadeIn 0.2s ease-out",
      }}
    >
      {/* Container do modal */}
      <div
        style={{
          backgroundColor: "white",
          borderRadius: "12px",
          padding: "40px",
          maxWidth: "500px",
          boxShadow: "0 20px 60px rgba(0, 0, 0, 0.3)",
          textAlign: "center",
          animation: "slideUp 0.3s ease-out",
        }}
      >
        {/* Título */}
        <h1
          style={{
            fontSize: "2.5rem",
            marginBottom: "16px",
            color: "#2C3E50",
            fontWeight: "bold",
          }}
        >
          {getTitle()}
        </h1>

        {/* Descrição */}
        <p
          style={{
            fontSize: "1rem",
            color: "#666",
            marginBottom: "24px",
            lineHeight: "1.6",
          }}
        >
          {getDescription()}
        </p>

        {/* Informação do Último Movimento */}
        {lastMove && (
          <div
            style={{
              backgroundColor: "#f5f5f5",
              padding: "16px",
              borderRadius: "8px",
              marginBottom: "24px",
              border: "1px solid #e0e0e0",
            }}
          >
            <p
              style={{
                fontSize: "0.9rem",
                color: "#888",
                marginBottom: "8px",
                fontWeight: "600",
                textTransform: "uppercase",
              }}
            >
              Último Movimento
            </p>
            <p
              style={{
                fontSize: "1.2rem",
                fontWeight: "bold",
                color: "#2C3E50",
                letterSpacing: "2px",
              }}
            >
              {lastMove.from.toUpperCase()} → {lastMove.to.toUpperCase()}
            </p>
          </div>
        )}

        {/* Botões de Ação */}
        <div
          style={{
            display: "flex",
            gap: "12px",
            marginTop: "32px",
          }}
        >
          {/* Botão Nova Partida */}
          <button
            onClick={onNewGame}
            style={{
              flex: 1,
              backgroundColor: "#007956",
              color: "white",
              border: "none",
              padding: "14px 24px",
              fontSize: "1rem",
              fontWeight: "bold",
              borderRadius: "8px",
              cursor: "pointer",
              transition: "all 0.2s ease",
            }}
            onMouseEnter={(e) => {
              (e.target as HTMLButtonElement).style.backgroundColor = "#005a3d";
              (e.target as HTMLButtonElement).style.transform =
                "translateY(-2px)";
              (e.target as HTMLButtonElement).style.boxShadow =
                "0 8px 12px rgba(0, 121, 86, 0.3)";
            }}
            onMouseLeave={(e) => {
              (e.target as HTMLButtonElement).style.backgroundColor = "#007956";
              (e.target as HTMLButtonElement).style.transform = "translateY(0)";
              (e.target as HTMLButtonElement).style.boxShadow = "none";
            }}
          >
            🎮 Nova Partida
          </button>

          {/* Botão Voltar ao Menu */}
          <button
            onClick={() => (window.location.href = "/")}
            style={{
              flex: 1,
              backgroundColor: "#666",
              color: "white",
              border: "none",
              padding: "14px 24px",
              fontSize: "1rem",
              fontWeight: "bold",
              borderRadius: "8px",
              cursor: "pointer",
              transition: "all 0.2s ease",
            }}
            onMouseEnter={(e) => {
              (e.target as HTMLButtonElement).style.backgroundColor = "#555";
              (e.target as HTMLButtonElement).style.transform =
                "translateY(-2px)";
              (e.target as HTMLButtonElement).style.boxShadow =
                "0 8px 12px rgba(0, 0, 0, 0.2)";
            }}
            onMouseLeave={(e) => {
              (e.target as HTMLButtonElement).style.backgroundColor = "#666";
              (e.target as HTMLButtonElement).style.transform = "translateY(0)";
              (e.target as HTMLButtonElement).style.boxShadow = "none";
            }}
          >
            ← Voltar ao Menu
          </button>
        </div>

        {/* Estilos Globais */}
        <style>{`
          @keyframes slideUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes fadeIn {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }
        `}</style>
      </div>
    </div>
  );
}
