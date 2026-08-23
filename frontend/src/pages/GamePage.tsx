import ChessBoard from "../components/ChessBoard";

export default function GamePage() {
  const handleSquareClick = (position: string) => {
    console.log(`Clicou em: ${position}`);
  };

  return (
    <div className="min-h-screen bg-dark p-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-white text-3xl font-bold mb-8 text-center">
          ♟️ ChessMZ
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Tabuleiro */}
          <div className="lg:col-span-2">
            <ChessBoard onSquareClick={handleSquareClick} />
          </div>

          {/* Info lateral */}
          <div className="bg-light rounded-lg p-6 shadow-lg h-fit">
            <h2 className="text-xl font-bold text-dark mb-4">Informação</h2>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-600">Jogador Branco</p>
                <p className="font-bold text-dark">Você</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Rating</p>
                <p className="font-bold text-primary text-lg">1200</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Status</p>
                <p className="font-bold text-green-600">Em jogo</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
