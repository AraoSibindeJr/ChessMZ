# Arquitectura do ChessMZ

## Visão Geral

O ChessMZ é uma aplicação web full-stack composta por um frontend desenvolvido com React e TypeScript e um backend baseado em Express.js e TypeScript.

A arquitectura actual está orientada para o MVP, mantendo uma separação clara entre a interface do utilizador, a lógica de jogo e os serviços de backend.

### Componentes principais

```text
┌──────────────────────────────┐
│          Frontend            │
│      React + TypeScript      │
│                              │
│  UI / Components / Hooks     │
└──────────────┬───────────────┘
               │
               │ HTTP
               ▼
┌──────────────────────────────┐
│           Backend            │
│      Express + TypeScript    │
│                              │
│       REST API / Services    │
└──────────────────────────────┘
```

A lógica das regras de xadrez é actualmente gerida no frontend através da biblioteca `chess.js`.

---

## Stack Tecnológica

| Componente   | Tecnologia   | Responsabilidade                 |
| ------------ | ------------ | -------------------------------- |
| Interface    | React        | Construção da interface          |
| Linguagem    | TypeScript   | Tipagem e desenvolvimento        |
| Build        | Vite         | Desenvolvimento e build          |
| Styling      | Tailwind CSS | Estilos e responsividade         |
| Backend      | Express.js   | API HTTP                         |
| Chess Engine | chess.js     | Regras e validação de movimentos |
| Runtime      | Node.js      | Execução do backend              |

---

# Frontend

## Organização

O frontend segue uma organização baseada em componentes, páginas, hooks, serviços e tipos.

```text
frontend/
└── src/
    ├── components/
    │   ├── ChessBoard.tsx
    │   ├── Square.tsx
    │   ├── MoveNotification.tsx
    │   ├── GameOverModal.tsx
    │   ├── CheckIndicator.tsx
    │   └── LoadingSpinner.tsx
    │
    ├── pages/
    │   ├── HomePage.tsx
    │   └── GamePage.tsx
    │
    ├── hooks/
    │   ├── useChessGame.ts
    │   ├── useApi.ts
    │   └── useHealth.ts
    │
    ├── services/
    │   └── api.ts
    │
    ├── types/
    │   ├── index.ts
    │   └── chess.ts
    │
    ├── App.tsx
    └── index.css
```

### Responsabilidades

**Components**

Contêm elementos reutilizáveis da interface.

**Pages**

Representam as páginas principais da aplicação.

**Hooks**

Contêm lógica reutilizável e gestão do estado da aplicação.

**Services**

Centralizam a comunicação com o backend.

**Types**

Definem as estruturas e contratos utilizados pelo frontend.

---

# Backend

O backend é responsável pela disponibilização da API HTTP e pela comunicação com o frontend.

```text
backend/
└── src/
    ├── server.ts
    ├── app.ts
    └── types/
        └── index.ts
```

### Responsabilidades

- Inicialização do servidor;
- Configuração da aplicação Express;
- Disponibilização dos endpoints;
- Health check da aplicação;
- Definição dos tipos utilizados pela API.

A implementação actual do backend é deliberadamente simples, uma vez que o projecto se encontra na fase de MVP.

---

# Lógica de Xadrez

A validação das regras do jogo é realizada através do `chess.js`.

A biblioteca é responsável por operações como:

- Validação de movimentos;
- Controlo de turnos;
- Roque;
- En passant;
- Promoção de peões;
- Detecção de xeque;
- Detecção de xeque-mate;
- Detecção de situações de empate.

A utilização de uma biblioteca especializada evita a necessidade de implementar manualmente as regras do xadrez e reduz o risco de inconsistências na lógica do jogo.

---

# Gestão do Estado da Partida

A lógica principal da partida encontra-se encapsulada no hook `useChessGame`.

De forma simplificada, o fluxo é:

```text
Utilizador
    │
    ▼
ChessBoard
    │
    ▼
Square
    │
    ▼
GamePage
    │
    ▼
useChessGame
    │
    ▼
chess.js
    │
    ├── Movimento válido
    │
    └── Movimento inválido
```

Quando o utilizador selecciona uma peça, o sistema determina os movimentos disponíveis.

Quando uma casa de destino é seleccionada, o movimento é validado através do `chess.js`.

Após um movimento válido:

```text
Movimento
    │
    ▼
Validação
    │
    ▼
Actualização do estado
    │
    ▼
Alteração do turno
    │
    ▼
Reavaliação do estado da partida
    │
    ▼
Actualização da interface
```

O estado derivado da partida inclui informações como:

- Tabuleiro actual;
- Peça seleccionada;
- Movimentos válidos;
- Turno actual;
- Último movimento;
- Estado de xeque;
- Estado de xeque-mate;
- Estado de empate.

---

# Componentes da Interface

A página principal do jogo pode ser representada conceptualmente da seguinte forma:

```text
GamePage
│
├── ChessBoard
│   └── Square × 64
│
├── CheckIndicator
│
├── MoveNotification
│
├── GameOverModal
│
└── Game Information
    ├── Turn
    ├── Status
    └── Controls
```

A `GamePage` coordena a lógica da partida e fornece os dados necessários aos componentes de apresentação.

O `ChessBoard` é responsável pela representação visual do tabuleiro, enquanto cada `Square` representa uma casa individual.

---

# TypeScript

O projecto utiliza TypeScript para definir contratos explícitos entre os diferentes componentes.

Exemplo simplificado:

```typescript
type BoardState = (Piece | null)[][];

interface Piece {
  type: PieceType;
  color: PieceColor;
}

interface ChessBoardProps {
  board: BoardState;
  selectedPosition: string | null;
}
```

Os tipos permitem representar explicitamente conceitos como:

- Peças;
- Cores;
- Estado do tabuleiro;
- Posições;
- Movimentos;
- Estado da partida;
- Propriedades dos componentes.

O objectivo é reduzir erros relacionados com tipos e tornar o código mais previsível e fácil de manter.

---

# Fluxo de Comunicação

Actualmente, a comunicação entre frontend e backend é realizada através de HTTP.

```text
┌───────────────┐
│    React      │
│   Frontend    │
└───────┬───────┘
        │
        │ HTTP
        ▼
┌───────────────┐
│   Express     │
│    Backend    │
└───────────────┘
```

O backend disponibiliza actualmente um endpoint de health check:

```http
GET /api/health
```

Exemplo de resposta:

```json
{
  "success": true,
  "data": {
    "status": "ok",
    "timestamp": "2026-08-26T...",
    "uptime": 123.456
  }
}
```

Os endpoints relacionados com partidas online serão definidos à medida que a arquitectura evoluir para suportar funcionalidades persistentes e multiplayer.

---

# Decisões Arquitecturais

## React + TypeScript

React foi seleccionado para a construção da interface devido ao seu modelo baseado em componentes e ao ecossistema disponível.

TypeScript é utilizado para fornecer tipagem estática e melhorar a manutenção do código.

## Vite

O Vite é utilizado como ferramenta de desenvolvimento e build do frontend, proporcionando um ambiente de desenvolvimento rápido e uma configuração relativamente simples.

## Express.js

Express foi seleccionado para o backend devido à sua simplicidade, flexibilidade e integração com o ecossistema Node.js.

A arquitectura actual mantém o backend simples para evitar complexidade prematura durante a fase de MVP.

## chess.js

`chess.js` é utilizado como responsável pela validação das regras do xadrez.

A implementação manual das regras foi evitada devido à complexidade e ao risco de introduzir erros em situações como roque, en passant, promoção, xeque-mate e empates.

## Tailwind CSS

Tailwind CSS é utilizado para a construção da interface e implementação do design responsivo.

A abordagem utility-first permite desenvolver e ajustar rapidamente os componentes da interface.

---

# Princípios Arquitecturais

A arquitectura actual segue alguns princípios fundamentais:

### Separação de responsabilidades

A interface, lógica de jogo e comunicação com o backend são mantidas em áreas distintas.

### Componentização

A interface é dividida em componentes pequenos e reutilizáveis.

### Tipagem explícita

Os principais dados utilizados pela aplicação são representados através de tipos TypeScript.

### Simplicidade

A arquitectura é mantida simples enquanto o projecto se encontra na fase de MVP. Novas camadas e serviços serão introduzidos apenas quando forem necessários.

### Evolução incremental

A arquitectura deve permitir a introdução progressiva de funcionalidades como autenticação, persistência, multiplayer e sistemas de rating sem comprometer a estrutura existente.

---

# Segurança

A segurança será aprofundada à medida que funcionalidades que exigem autenticação e persistência forem implementadas.

Entre as medidas previstas encontram-se:

- Autenticação baseada em tokens;
- Validação de dados recebidos pela API;
- Configuração adequada de CORS;
- Rate limiting;
- Hashing seguro de palavras-passe;
- HTTPS em produção;
- Gestão adequada de variáveis de ambiente.

Estas funcionalidades fazem parte das próximas fases do projecto e não representam necessariamente funcionalidades actualmente implementadas.

---

# Evolução Arquitectural

A arquitectura prevista para fases posteriores poderá introduzir persistência, autenticação e comunicação em tempo real.

Uma possível evolução será:

```text
                    ┌───────────────┐
                    │    Frontend   │
                    │ React + TS    │
                    └───────┬───────┘
                            │
                    HTTP / WebSocket
                            │
                            ▼
                    ┌───────────────┐
                    │    Backend    │
                    │   Express     │
                    └───────┬───────┘
                            │
             ┌──────────────┼──────────────┐
             ▼              ▼              ▼
        Game Service   User Service   Rating Service
             │              │              │
             └──────────────┼──────────────┘
                            ▼
                    ┌───────────────┐
                    │   Database    │
                    │  PostgreSQL   │
                    └───────────────┘
```

Esta representação é uma direcção arquitectural prevista e poderá ser alterada conforme os requisitos do projecto.

---

# Testes

A estratégia de testes será expandida nas próximas fases do desenvolvimento.

As principais áreas a testar incluem:

- Lógica de movimentos;
- Selecção de peças;
- Validação de movimentos;
- Xeque e xeque-mate;
- Situações de empate;
- Componentes do tabuleiro;
- Fluxo completo de uma partida;
- Comunicação com a API.

A implementação dos testes deverá acompanhar a evolução das funcionalidades para evitar regressões.

---

# Performance

A optimização da aplicação deve ser realizada de acordo com necessidades reais identificadas durante o desenvolvimento.

Actualmente, a prioridade é manter a arquitectura simples e garantir um comportamento previsível da aplicação.

À medida que o projecto crescer, poderão ser consideradas técnicas como:

- `React.memo`;
- `useMemo`;
- `useCallback`;
- Code splitting;
- Lazy loading;
- Caching;
- Optimização das comunicações com o backend.

Estas técnicas devem ser introduzidas quando apresentarem um benefício concreto para a aplicação.

---

# Roadmap Arquitectural

A evolução prevista da arquitectura está dividida em etapas:

### Fase actual — MVP

- Frontend React + TypeScript
- Backend Express + TypeScript
- Lógica de xadrez com chess.js
- API HTTP básica
- Interface responsiva

### Próxima fase

- Testes automatizados
- Sistema de partidas
- Persistência de dados
- Autenticação
- Sistema de rating

### Fases posteriores

- Multiplayer em tempo real
- WebSockets
- Serviços especializados
- Monitorização
- Escalabilidade da infraestrutura

As decisões arquitecturais serão revistas à medida que novos requisitos forem introduzidos.

---

# Documentação Relacionada

- [README](./README.md)
- [Guia de Contribuição](./CONTRIBUTING.md)
- [Product Discovery and Planning](./docs/ChessMZ_Product_Discovery_and_Planning.md)

---

# Princípio de Evolução

A arquitectura do ChessMZ não é considerada definitiva.

As decisões devem ser revistas quando surgirem novos requisitos funcionais ou não funcionais. O objectivo é manter uma arquitectura suficientemente simples para o estágio actual do projecto, mas preparada para evoluir de forma controlada à medida que a plataforma cresce.
