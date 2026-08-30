import { useChessGame } from "../hooks/useChessGame";
import { useEffect } from "react"; // ← ADICIONE
import ChessBoard from "../components/ChessBoard";
import MoveNotification from "../components/MoveNotification";
import GameOverModal from "../components/GameOverModal";
import CheckIndicator from "../components/CheckIndicator";

export default function GamePage() {
  const {
    board,
    selectedPosition,
    validMoves,
    lastMove,
    status,
    currentPlayer,
    selectPosition,
    isGameOver,
    isCheck,
  } = useChessGame();

  // ────────────────────────────────────────────────────────────
  // KEYBOARD SHORTCUTS
  // ────────────────────────────────────────────────────────────

  /**
   * Atalhos de teclado:
   * - ESC: Deseleccionar peça atual
   */
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // ESC para deseleccionar
      if (event.key === "Escape" && selectedPosition) {
        selectPosition(selectedPosition);
        console.log("✓ Deseleccionado (ESC)");
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    // Cleanup
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedPosition, selectPosition]);

  // ────────────────────────────────────────────────────────────

  const handleSquareClick = (position: string) => {
    if (!isGameOver) {
      selectPosition(position);
    }
  };

  // Encontrar posição do rei em xeque
  const getCheckPosition = () => {
    if (!isCheck) return null;
    for (let row = 0; row < 8; row++) {
      for (let col = 0; col < 8; col++) {
        const piece = board[row][col];
        if (piece && piece.type === "K" && piece.color === currentPlayer) {
          const files = "abcdefgh";
          const ranks = "87654321";
          return `${files[col]}${ranks[row]}`;
        }
      }
    }
    return null;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-dark to-primary p-4">
      {/* Indicador de Xeque */}
      <CheckIndicator isCheck={isCheck} currentPlayer={currentPlayer} />

      {/* Notificação de Movimento */}
      <MoveNotification lastMove={lastMove} currentPlayer={currentPlayer} />

      {/* Modal de Fim de Jogo */}
      <GameOverModal
        status={status}
        currentPlayer={currentPlayer}
        lastMove={lastMove}
        onNewGame={() => window.location.reload()}
      />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">♟️ ChessMZ</h1>
          <p className="text-light">Plataforma de Xadrez de Moçambique</p>
        </div>

        {/* Conteúdo Principal */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Tabuleiro */}
          <div className="lg:col-span-3 flex justify-center">
            <ChessBoard
              board={board}
              selectedPosition={selectedPosition}
              validMoves={validMoves}
              isCheck={isCheck}
              checkPosition={getCheckPosition()}
              onSquareClick={handleSquareClick}
            />
          </div>

          {/* Painel Lateral */}
          <div className="bg-light rounded-lg p-6 shadow-xl h-fit">
            <h2 className="text-2xl font-bold text-dark mb-6 border-b-2 border-primary pb-2">
              ℹ️ Jogo
            </h2>

            <div className="space-y-6">
              {/* Turno Atual */}
              <div className="bg-accent bg-opacity-20 rounded p-4">
                <p className="text-xs text-gray-600 font-semibold uppercase">
                  Turno Atual
                </p>
                <p className="text-lg font-bold text-accent">
                  {currentPlayer === "white" ? "⚪ Brancas" : "⚫ Pretas"}
                </p>
                {isCheck && (
                  <p className="text-sm text-red-600 mt-2 font-bold">
                    ⚠️ EM XEQUE!
                  </p>
                )}
              </div>

              {/* Peça Selecionada */}
              {selectedPosition && !isGameOver && (
                <div className="bg-blue-100 rounded p-4 border-l-4 border-blue-500">
                  <p className="text-xs text-gray-600 font-semibold uppercase">
                    Peça Selecionada
                  </p>
                  <p className="text-2xl font-bold text-blue-700">
                    {selectedPosition.toUpperCase()}
                  </p>
                  <p className="text-sm text-gray-700 mt-2">
                    Movimentos: {validMoves.length}
                  </p>
                </div>
              )}

              {/* Último Movimento */}
              {lastMove && (
                <div className="bg-green-100 rounded p-4 border-l-4 border-green-500">
                  <p className="text-xs text-gray-600 font-semibold uppercase">
                    Último Movimento
                  </p>
                  <p className="text-lg font-bold text-green-700">
                    {lastMove.from.toUpperCase()} → {lastMove.to.toUpperCase()}
                  </p>
                </div>
              )}

              {/* Status do Jogo */}
              <div
                className={`rounded p-4 border-l-4 ${
                  status === "ongoing"
                    ? "bg-blue-100 border-blue-500"
                    : status === "checkmate"
                      ? "bg-red-100 border-red-500"
                      : "bg-orange-100 border-orange-500"
                }`}
              >
                <p className="text-xs text-gray-600 font-semibold uppercase">
                  Status
                </p>
                <p
                  className={`text-lg font-bold ${
                    status === "ongoing"
                      ? "text-blue-700"
                      : status === "checkmate"
                        ? "text-red-700"
                        : "text-orange-700"
                  }`}
                >
                  {status === "ongoing"
                    ? "Em Jogo ⚔️"
                    : status === "checkmate"
                      ? "Xeque-mate! 👑"
                      : status === "stalemate"
                        ? "Empate (Afogamento) 🤝"
                        : "Empate 🤝"}
                </p>
              </div>

              {/* Info Jogador */}
              <div className="bg-white rounded p-4 border-l-4 border-primary">
                <p className="text-xs text-gray-600 font-semibold uppercase">
                  Seu Rating
                </p>
                <p className="text-3xl font-bold text-primary">1200</p>
                <p className="text-xs text-gray-600 mt-1">Iniciante</p>
              </div>

              {/* Botões */}
              {!isGameOver && (
                <div className="flex gap-2 pt-4">
                  <button className="flex-1 bg-primary text-white py-2 rounded font-bold hover:bg-opacity-90 transition">
                    Resign
                  </button>
                  <button className="flex-1 bg-accent text-white py-2 rounded font-bold hover:bg-opacity-90 transition">
                    Draw
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Instruções Melhoradas */}
        {!isGameOver && (
          <div className="mt-8 bg-white bg-opacity-10 rounded-lg p-4 text-white text-center">
            <p className="text-sm font-semibold">
              ♔ Clique numa peça para seleccionar → Clique num ponto para mover
            </p>
            <p className="text-xs text-gray-300 mt-2 flex items-center justify-center gap-2">
              <kbd className="bg-dark bg-opacity-50 px-2 py-1 rounded">ESC</kbd>
              para deseleccionar peça
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
