interface CheckIndicatorProps {
  isCheck: boolean;
  currentPlayer: "white" | "black";
}

export default function CheckIndicator({ isCheck }: CheckIndicatorProps) {
  if (!isCheck) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 20,
        left: 20,
        backgroundColor: "#E74C3C",
        color: "white",
        padding: "12px 20px",
        borderRadius: "8px",
        boxShadow: "0 4px 12px rgba(231, 76, 60, 0.4)",
        fontWeight: "bold",
      }}
    >
      XEQUE!
    </div>
  );
}
