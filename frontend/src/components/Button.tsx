/**
 * Componente de botão reutilizável com variantes.
 * Encapsula estilos e comportamentos padrão.
 */

interface ButtonProps {
  /** Texto do botão */
  label: string;

  /** Callback ao clicar */
  onClick?: () => void;

  /** Variante visual: primary ou secondary */
  variant?: "primary" | "secondary";

  /** true desabilita o botão */
  disabled?: boolean;

  /** true mostra spinner de loading */
  loading?: boolean;

  /** Classe CSS adicional (Tailwind) */
  className?: string;

  /** Tipo HTML do botão */
  type?: "button" | "submit" | "reset";

  /** Ícone/emoji antes do texto */
  icon?: string;

  /** Tamanho: small, medium, large */
  size?: "sm" | "md" | "lg";
}

/**
 * Botão reutilizável com variantes de estilo.
 *
 * @component
 * @param {ButtonProps} props - Configuração do botão
 * @returns {JSX.Element} Botão renderizado
 *
 * @example
 * <Button
 *   label="Começar"
 *   variant="primary"
 *   size="lg"
 *   icon="🎮"
 *   onClick={() => navigate('/game')}
 * />
 */
export default function Button({
  label,
  onClick,
  variant = "primary",
  disabled = false,
  loading = false,
  className = "",
  type = "button",
  icon,
  size = "md",
}: ButtonProps) {
  // ────────────────────────────────────────────────────────────
  // ESTILOS
  // ────────────────────────────────────────────────────────────

  const baseStyles =
    "font-semibold rounded-lg transition-all duration-200 ease-out focus:outline-none focus:ring-2 focus:ring-offset-2 active:scale-95";

  const sizeStyles = {
    sm: "py-2 px-4 text-sm min-h-[40px]",
    md: "py-3 px-6 text-base min-h-[48px]",
    lg: "py-4 px-6 text-lg min-h-[56px]",
  };

  const variantStyles = {
    primary:
      "bg-primary hover:bg-opacity-90 disabled:bg-gray-400 text-white shadow-lg hover:shadow-xl focus:ring-primary",
    secondary:
      "bg-accent hover:bg-opacity-90 disabled:bg-gray-400 text-white shadow-md hover:shadow-lg focus:ring-accent",
  };

  const disabledStyles =
    disabled || loading ? "opacity-75 cursor-not-allowed" : "cursor-pointer";

  // ────────────────────────────────────────────────────────────
  // RENDER
  // ────────────────────────────────────────────────────────────

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${disabledStyles} ${className}`}
    >
      {loading ? (
        <span className="flex items-center justify-center gap-2">
          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
          A carregar...
        </span>
      ) : (
        <span>
          {icon && `${icon} `}
          {label}
        </span>
      )}
    </button>
  );
}
