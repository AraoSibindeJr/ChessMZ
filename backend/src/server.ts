import app from "./app";

const PORT = process.env.PORT || 3000;
const NODE_ENV = process.env.NODE_ENV || "development";

const server = app.listen(PORT, () => {
  console.log(`
   ChessMZ Backend iniciado

  Server: http://localhost:${PORT}
  Environment: ${NODE_ENV}
  Health: http://localhost:${PORT}/api/health

  Pronto para desenvolvimento!
  `);
});

// Graceful shutdown
process.on("SIGTERM", () => {
  console.log("SIGTERM recebido. Encerrando servidor...");
  server.close(() => {
    console.log("Servidor encerrado");
    process.exit(0);
  });
});
