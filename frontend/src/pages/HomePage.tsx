import { useEffect } from "react";
import { useHealth } from "../hooks/useHealth";

export default function HomePage() {
  const { data, loading, error, fetch } = useHealth();

  useEffect(() => {
    fetch();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary to-dark flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
        <h1 className="text-3xl font-bold text-dark mb-4 text-center">
          ♟️ ChessMZ
        </h1>
        <p className="text-gray-600 mb-6 text-center">
          A Maior Plataforma de Xadrez de Moçambique
        </p>

        {/* Status do Backend */}
        <div className="mb-6 p-4 bg-gray-100 rounded">
          <p className="text-sm font-semibold text-dark mb-2">
            Status Backend:
          </p>
          {loading && (
            <p className="text-blue-600"> Conectando ao servidor...</p>
          )}
          {error && <p className="text-red-600"> Erro: {error.message}</p>}
          {data && (
            <div>
              <p className="text-green-600 font-bold">Conectado ao backend!</p>
              <p className="text-xs text-gray-600 mt-2">
                Status: {data.data.status}
              </p>
              <p className="text-xs text-gray-600">
                Uptime: {Math.round(data.data.uptime)}s
              </p>
            </div>
          )}
        </div>

        <button className="w-full bg-primary text-white font-bold py-2 px-4 rounded-lg hover:bg-opacity-90 transition">
          Comece a Jogar
        </button>
      </div>
    </div>
  );
}
