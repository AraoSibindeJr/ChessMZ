export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary to-dark flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md">
        <h1 className="text-3xl font-bold text-dark mb-4">♟️ ChessMZ</h1>
        <p className="text-gray-600 mb-6">
          A Maior Plataforma de Xadrez de Moçambique
        </p>
        <button className="w-full bg-primary text-white font-bold py-2 px-4 rounded-lg hover:bg-opacity-90 transition">
          Comece a Jogar
        </button>
      </div>
    </div>
  );
}
