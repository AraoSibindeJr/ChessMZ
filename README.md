# ChessMZ

Plataforma de xadrez desenvolvida para proporcionar uma experiência de jogo de xadrez interactiva e acessível.

O projecto encontra-se actualmente na fase de **MVP funcional**, com a implementação da lógica principal de uma partida de xadrez e uma interface web responsiva.

## Estado do Projecto

**MVP funcional — Sprint 1 concluído**

O MVP permite executar partidas completas de xadrez localmente, incluindo validação de movimentos, controlo de turnos, detecção de xeque, xeque-mate e situações de empate.

## Funcionalidades

- Tabuleiro de xadrez interactivo 8×8
- Movimentação de peças com validação das regras do xadrez
- Controlo automático de turnos
- Detecção de xeque
- Detecção de xeque-mate
- Detecção de situações de empate
- Roque
- En passant
- Promoção de peões
- Indicação do último movimento
- Interface responsiva para desktop, tablet e dispositivos móveis
- Comunicação entre frontend e backend através de API HTTP
- TypeScript em modo strict

A validação das regras de xadrez é realizada através da biblioteca `chess.js`.

## Tecnologias

| Camada               | Tecnologia   |
| -------------------- | ------------ |
| Frontend             | React        |
| Build Tool           | Vite         |
| Linguagem            | TypeScript   |
| Styling              | Tailwind CSS |
| Backend              | Express.js   |
| Chess Logic          | chess.js     |
| Runtime              | Node.js      |
| TypeScript Execution | tsx          |

## Arquitectura

O projecto está organizado em duas aplicações principais:

```text
ChessMZ/
├── frontend/       # Aplicação React
├── backend/        # API Express
├── docs/           # Documentação do projecto
├── ARCHITECTURE.md # Decisões e estrutura arquitectural
├── CONTRIBUTING.md # Guia de contribuição
└── README.md
```

## Roadmap

### Sprint 1 — MVP

- [x] Tabuleiro interactivo
- [x] Movimentação das peças
- [x] Validação das regras do xadrez
- [x] Controlo de turnos
- [x] Xeque
- [x] Xeque-mate
- [x] Empates
- [x] Interface responsiva

### Próximas etapas

- [ ] Testes automatizados
- [ ] Integração com Stockfish
- [ ] Sistema de rating
- [ ] Multiplayer em tempo real
- [ ] Autenticação e contas de utilizador
- [ ] Perfil e histórico de jogos
- [ ] Clubes e torneios
- [ ] Puzzles e funcionalidades de aprendizagem
- [ ] Aplicação mobile

As funcionalidades do roadmap representam objectivos futuros e podem ser alteradas durante o desenvolvimento.

## Documentação

Documentação adicional disponível no repositório:

- [Arquitectura](./ARCHITECTURE.md)
- [Guia de Contribuição](./CONTRIBUTING.md)
- [Product Discovery and Planning](./docs/ChessMZ_Product_Discovery_and_Planning.md)

## Contribuição

Contribuições são bem-vindas.

Consulte o [CONTRIBUTING.md](./CONTRIBUTING.md) para obter informações sobre configuração do ambiente, padrões de código e processo de contribuição.

## Licença

Este projecto está disponível sob a licença MIT.

## Autor

**Arao Sibinde Jr.**

ChessMZ — Plataforma de Xadrez de Moçambique.
