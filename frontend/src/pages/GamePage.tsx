import { useChessGame } from "../hooks/useChessGame";
import { useEffect } from "react";
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

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && selectedPosition) {
        selectPosition(selectedPosition);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedPosition, selectPosition]);

  const handleSquareClick = (position: string) => {
    if (!isGameOver) {
      selectPosition(position);
    }
  };

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
      <CheckIndicator isCheck={isCheck} currentPlayer={currentPlayer} />
      <MoveNotification lastMove={lastMove} currentPlayer={currentPlayer} />
      <GameOverModal
        status={status}
        currentPlayer={currentPlayer}
        lastMove={lastMove}
        onNewGame={() => window.location.reload()}
      />

      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">♟️ ChessMZ</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          <div className="lg:col-span-4 flex justify-center">
            <ChessBoard
              board={board}
              selectedPosition={selectedPosition}
              validMoves={validMoves}
              isCheck={isCheck}
              checkPosition={getCheckPosition()}
              onSquareClick={handleSquareClick}
            />
          </div>

          <div className="bg-light rounded-lg p-6 shadow-xl h-fit">
            <div className="space-y-4">
              <div className="text-center">
                <p className="text-sm text-gray-600 font-semibold uppercase">
                  Turno
                </p>
                <p className="text-2xl font-bold text-accent">
                  {currentPlayer === "white" ? "⚪ Brancas" : "⚫ Pretas"}
                </p>
                {isCheck && (
                  <p className="text-sm text-red-600 mt-2 font-bold animate-pulse">
                    ⚠️ XEQUE!
                  </p>
                )}
              </div>

              {selectedPosition && !isGameOver && (
                <div className="bg-blue-50 rounded-lg p-3 text-center border border-blue-200">
                  <p className="text-xs text-gray-600 font-semibold uppercase">
                    Selecionada
                  </p>
                  <p className="text-xl font-bold text-blue-700">
                    {selectedPosition.toUpperCase()}
                  </p>
                  <p className="text-sm text-gray-600">
                    {validMoves.length} movimentos
                  </p>
                </div>
              )}

              <div className="flex gap-2 pt-4">
                <button className="flex-1 bg-primary text-white py-2 rounded font-bold hover:bg-opacity-90 transition text-sm">
                  Desistir
                </button>
                <button className="flex-1 bg-accent text-white py-2 rounded font-bold hover:bg-opacity-90 transition text-sm">
                  Empate
                </button>
              </div>
            </div>
          </div>
        </div>

        {!isGameOver && (
          <div className="mt-6 text-center text-white text-sm opacity-70">
            <p>Clique numa peça → Clique no destino para mover</p>
          </div>
        )}
      </div>
    </div>
  );
}
