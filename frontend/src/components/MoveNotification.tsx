interface MoveNotificationProps {
  lastMove: { from: string; to: string } | null;
  currentPlayer: "white" | "black";
}

export default function MoveNotification({
  lastMove,
  currentPlayer,
}: MoveNotificationProps) {
  if (!lastMove) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 20,
        right: 20,
        backgroundColor: "#2C3E50",
        color: "white",
        padding: "12px 20px",
        borderRadius: "8px",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.2)",
        animation: "slideIn 0.3s ease-out",
      }}
    >
      <p className="text-sm font-semibold">
        ✅ Movimento: {lastMove.from.toUpperCase()} →{" "}
        {lastMove.to.toUpperCase()}
      </p>
      <p className="text-xs text-gray-300 mt-1">
        Turno: {currentPlayer === "white" ? "⚪ Brancas" : "⚫ Pretas"}
      </p>

      <style>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
}
