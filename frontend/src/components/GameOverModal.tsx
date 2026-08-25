interface GameOverModalProps {
  status: "checkmate" | "stalemate" | "draw" | "ongoing";
  currentPlayer: "white" | "black";
  lastMove?: { from: string; to: string } | null;
  onNewGame?: () => void;
}

export default function GameOverModal({
  status,
  currentPlayer,
  lastMove,
  onNewGame,
}: GameOverModalProps) {
  if (status === "ongoing") return null;

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

  const getDescription = () => {
    if (status === "checkmate") {
      return currentPlayer === "white"
        ? "As peças pretas fizeram xeque-mate!"
        : "As peças brancas fizeram xeque-mate!";
    }
    if (status === "stalemate") {
      return "Rei não está em xeque mas não tem movimentos legais.";
    }
    return "Jogo terminou em empate.";
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
      }}
    >
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
        <h1
          style={{ fontSize: "2.5rem", marginBottom: "16px", color: "#2C3E50" }}
        >
          {getTitle()}
        </h1>

        <p style={{ fontSize: "1rem", color: "#666", marginBottom: "24px" }}>
          {getDescription()}
        </p>

        {lastMove && (
          <div
            style={{
              backgroundColor: "#f5f5f5",
              padding: "16px",
              borderRadius: "8px",
              marginBottom: "24px",
            }}
          >
            <p
              style={{ fontSize: "0.9rem", color: "#888", marginBottom: "8px" }}
            >
              Último movimento:
            </p>
            <p
              style={{
                fontSize: "1.2rem",
                fontWeight: "bold",
                color: "#2C3E50",
              }}
            >
              {lastMove.from.toUpperCase()} → {lastMove.to.toUpperCase()}
            </p>
          </div>
        )}

        <button
          onClick={onNewGame}
          style={{
            backgroundColor: "#007956",
            color: "white",
            border: "none",
            padding: "12px 32px",
            fontSize: "1rem",
            fontWeight: "bold",
            borderRadius: "8px",
            cursor: "pointer",
            transition: "background-color 0.2s",
          }}
          onMouseEnter={(e) => {
            (e.target as HTMLButtonElement).style.backgroundColor = "#005a3d";
          }}
          onMouseLeave={(e) => {
            (e.target as HTMLButtonElement).style.backgroundColor = "#007956";
          }}
        >
          Nova Partida
        </button>

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
        `}</style>
      </div>
    </div>
  );
}
