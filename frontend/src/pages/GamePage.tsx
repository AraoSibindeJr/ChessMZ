import { useChessGame } from "../hooks/useChessGame";
import ChessBoard from "../components/ChessBoard";

export default function GamePage() {
  const {
    board,
    selectedPosition,
    validMoves,
    lastMove,
    status,
    currentPlayer,
    selectPosition,
  } = useChessGame();

  const handleSquareClick = (position: string) => {
    console.log(`Clicou em: ${position}`);
    selectPosition(position);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-dark to-primary p-4">
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
              selectedPosition={selectedPosition}
              validMoves={validMoves}
              lastMove={lastMove}
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
              </div>

              {/* Peça Selecionada */}
              {selectedPosition && (
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

              {/* Status */}
              <div className="bg-green-100 rounded p-4 border-l-4 border-green-500">
                <p className="text-xs text-gray-600 font-semibold uppercase">
                  Status
                </p>
                <p className="text-lg font-bold text-green-700">
                  {status === "ongoing"
                    ? "Em Jogo"
                    : status === "checkmate"
                      ? "Xeque-mate!"
                      : status === "stalemate"
                        ? "Empate (Afogamento)"
                        : "Empate"}
                </p>
              </div>

              {/* Info Jogador */}
              <div className="bg-white rounded p-4 border-l-4 border-primary">
                <p className="text-xs text-gray-600 font-semibold uppercase">
                  Seu Rating
                </p>
                <p className="text-3xl font-bold text-primary">1200</p>
              </div>

              {/* Botões */}
              <div className="flex gap-2 pt-4">
                <button className="flex-1 bg-primary text-white py-2 rounded font-bold hover:bg-opacity-90 transition">
                  Resign
                </button>
                <button className="flex-1 bg-accent text-white py-2 rounded font-bold hover:bg-opacity-90 transition">
                  Draw
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
