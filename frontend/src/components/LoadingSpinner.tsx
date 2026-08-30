/**
 * Props para o spinner de carregamento.
 * @interface
 */
interface LoadingSpinnerProps {
  /** Texto a mostrar abaixo do spinner (opcional) */
  text?: string;
}

/**
 * Componente de spinner de carregamento.
 *
 * Mostra 3 dots animados bouncing para indicar
 * que algo está a carregar.
 *
 * @component
 * @param {LoadingSpinnerProps} props - Configuração
 * @returns {JSX.Element} Spinner renderizado
 *
 * @example
 * <LoadingSpinner text="A carregar..." />
 */
export default function LoadingSpinner({
  text = "A carregar...",
}: LoadingSpinnerProps) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "16px",
        padding: "24px",
      }}
    >
      {/* Dots Animados */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "8px",
        }}
      >
        {/* Dot 1 */}
        <div
          style={{
            width: "12px",
            height: "12px",
            borderRadius: "50%",
            backgroundColor: "#007956",
            animation: "bounce 1.4s infinite",
          }}
        />

        {/* Dot 2 */}
        <div
          style={{
            width: "12px",
            height: "12px",
            borderRadius: "50%",
            backgroundColor: "#007956",
            animation: "bounce 1.4s infinite 0.2s",
          }}
        />

        {/* Dot 3 */}
        <div
          style={{
            width: "12px",
            height: "12px",
            borderRadius: "50%",
            backgroundColor: "#007956",
            animation: "bounce 1.4s infinite 0.4s",
          }}
        />
      </div>

      {/* Texto */}
      {text && (
        <p
          style={{
            fontSize: "0.95rem",
            color: "#666",
            fontWeight: "500",
            margin: 0,
          }}
        >
          {text}
        </p>
      )}

      {/* Animação */}
      <style>{`
        @keyframes bounce {
          0%, 80%, 100% {
            transform: translateY(0);
            opacity: 1;
          }
          40% {
            transform: translateY(-12px);
            opacity: 0.8;
          }
        }
      `}</style>
    </div>
  );
}
