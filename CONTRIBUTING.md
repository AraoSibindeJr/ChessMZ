# Guia de Contribuição

Obrigado pelo interesse em contribuir para o ChessMZ.

Este documento apresenta as orientações para configurar o projecto, desenvolver alterações, executar verificações e submeter Pull Requests.

## Pré-requisitos

Antes de começar, certifique-se de que possui:

- Git
- Node.js 18 ou superior
- npm

## Configuração do Projecto

Clone o repositório:

```bash
git clone https://github.com/AraoSibindeJr/ChessMZ.git
cd ChessMZ
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

O frontend estará disponível em:

```text
http://localhost:5173
```

### Backend

Abra outro terminal:

```bash
cd backend
npm install
cp .env.example .env
npm run dev
```

O backend estará disponível em:

```text
http://localhost:3000
```

## Estrutura do Projecto

```text
ChessMZ/
├── frontend/       # Aplicação React
├── backend/        # API Express
├── docs/           # Documentação
├── ARCHITECTURE.md
├── CONTRIBUTING.md
└── README.md
```

Consulte o [ARCHITECTURE.md](./ARCHITECTURE.md) para obter informações sobre a arquitectura e as principais decisões técnicas do projecto.

## Fluxo de Desenvolvimento

### 1. Criar uma Branch

Crie uma branch específica para a alteração que pretende realizar:

```bash
git checkout -b feature/nome-da-feature
```

Para correcções:

```bash
git checkout -b fix/descricao-do-bug
```

Para alterações de documentação:

```bash
git checkout -b docs/descricao-da-alteracao
```

Evite desenvolver directamente na branch `main`.

### 2. Desenvolver a Alteração

Implemente a alteração mantendo a estrutura e os padrões existentes no projecto.

Antes de submeter a alteração, verifique:

- O código compila correctamente;
- Não existem erros de TypeScript;
- O comportamento existente não foi quebrado;
- A interface continua funcional;
- A documentação foi actualizada quando necessário.

## Padrões de Código

### TypeScript

O projecto utiliza TypeScript com tipagem explícita.

Evite utilizar `any` sem uma justificação técnica clara.

```typescript
interface ChessBoardProps {
  board: BoardState;
  onMove: (position: string) => void;
}

function ChessBoard({ board, onMove }: ChessBoardProps) {
  // ...
}
```

Prefira interfaces e tipos específicos em vez de tipos genéricos.

### React

Os componentes devem ter responsabilidades claras e ser mantidos o mais simples possível.

A lógica reutilizável deve ser extraída para hooks ou serviços apropriados.

### Comentários

Comentários devem explicar decisões ou comportamentos que não sejam evidentes a partir do código.

Evite comentários que simplesmente descrevam o que uma linha de código já torna evidente.

Exemplo:

```typescript
// Recalcula os movimentos apenas quando a posição da partida é alterada.
const validMoves = useMemo(() => {
  // ...
}, [gameVersion]);
```

## Formatação e Linting

Sempre que disponíveis no projecto, execute as ferramentas de formatação e análise estática antes de criar um Pull Request:

```bash
npm run format
npm run lint
```

Siga a configuração existente do projecto em vez de introduzir novas regras de formatação ou linting sem necessidade.

## Testes

Quando existirem testes automatizados, execute-os antes de submeter alterações:

```bash
npm run test
```

Alterações que introduzam ou modifiquem lógica importante devem incluir testes quando apropriado.

Áreas particularmente importantes para testes incluem:

- Movimentos de peças;
- Validação das regras do xadrez;
- Xeque e xeque-mate;
- Situações de empate;
- Componentes do tabuleiro;
- Hooks relacionados com a partida;
- Comunicação com a API.

## Commits

O projecto segue o padrão **Conventional Commits**.

Formato:

```text
tipo: descrição
```

Tipos comuns:

```text
feat: nova funcionalidade
fix: correcção de um erro
docs: alteração de documentação
refactor: alteração estrutural sem mudança de comportamento
test: adição ou alteração de testes
perf: melhoria de desempenho
chore: tarefas de manutenção
```

Exemplos:

```bash
git commit -m "feat: adicionar indicador de xeque"

git commit -m "fix: corrigir validação de movimento"

git commit -m "docs: actualizar documentação da arquitectura"

git commit -m "refactor: reorganizar hooks do jogo"

git commit -m "test: adicionar testes ao useChessGame"
```

As mensagens devem ser curtas, claras e descrever a alteração realizada.

## Pull Requests

Depois de concluir o desenvolvimento:

```bash
git push origin feature/nome-da-feature
```

No GitHub:

1. Abra um novo Pull Request;
2. Seleccione a branch de origem;
3. Utilize um título claro e descritivo;
4. Explique o que foi alterado;
5. Descreva eventuais alterações relevantes;
6. Indique como a alteração foi testada;
7. Aguarde a revisão antes do merge.

Pull Requests devem ser focados numa alteração específica. Evite combinar funcionalidades não relacionadas na mesma PR.

## Checklist

Antes de submeter um Pull Request:

- [ ] A alteração foi testada localmente.
- [ ] O TypeScript não apresenta erros.
- [ ] O linting não apresenta problemas.
- [ ] Os testes existentes continuam a passar.
- [ ] Foram adicionados ou actualizados testes quando necessário.
- [ ] A documentação foi actualizada quando necessário.
- [ ] Não foram incluídos `console.log`, `debugger` ou código temporário.
- [ ] A mensagem dos commits segue Conventional Commits.
- [ ] A branch está actualizada relativamente à `main`.
- [ ] O Pull Request possui uma descrição clara.

## Alterações na Documentação

Quando uma alteração modificar o comportamento ou a arquitectura do projecto, actualize a documentação correspondente.

Dependendo da alteração, poderá ser necessário actualizar:

- `README.md` — visão geral, funcionalidades e utilização;
- `ARCHITECTURE.md` — arquitectura e decisões técnicas;
- `docs/` — documentação específica do projecto.

A documentação deve reflectir o estado actual do sistema e não funcionalidades que ainda não foram implementadas.

## Build de Produção

Antes de submeter alterações significativas, recomenda-se verificar se o projecto continua a produzir uma build válida.

### Frontend

```bash
cd frontend
npm run build
```

### Backend

```bash
cd backend
npm run build
```

Os comandos disponíveis podem variar conforme a configuração de cada aplicação. Consulte o respectivo `package.json` caso algum script não esteja definido.

## Reportar Bugs

Utilize o sistema de Issues do GitHub para reportar problemas.

Uma descrição de bug deve incluir, sempre que possível:

- Descrição do problema;
- Passos para reproduzir;
- Comportamento esperado;
- Comportamento observado;
- Sistema operativo;
- Browser;
- Versão do Node.js;
- Screenshots ou outros elementos relevantes.

Exemplo:

```markdown
## Descrição

Descrição clara do problema.

## Passos para Reproduzir

1. Iniciar uma partida.
2. Seleccionar uma peça.
3. Executar determinada acção.
4. Observar o comportamento.

## Comportamento Esperado

Descrição do comportamento esperado.

## Comportamento Actual

Descrição do comportamento observado.

## Ambiente

- Sistema operativo:
- Browser:
- Node.js:
```

## Propostas de Funcionalidades

Antes de implementar uma funcionalidade de maior dimensão, recomenda-se abrir uma Issue para discutir:

- Objectivo da funcionalidade;
- Problema que pretende resolver;
- Abordagem proposta;
- Impacto na arquitectura;
- Possíveis alternativas.

Isto ajuda a evitar alterações significativas que não estejam alinhadas com a direcção do projecto.

## Princípios de Contribuição

As contribuições devem procurar manter:

- Código simples e legível;
- Separação adequada de responsabilidades;
- Tipagem consistente;
- Componentes reutilizáveis;
- Documentação actualizada;
- Alterações pequenas e focadas;
- Compatibilidade com a arquitectura existente.

A qualidade e a manutenibilidade do código são prioritárias relativamente à quantidade de funcionalidades adicionadas.

## Documentação Relacionada

- [README](./README.md)
- [Arquitectura](./ARCHITECTURE.md)
- [Product Discovery and Planning](./docs/ChessMZ_Product_Discovery_and_Planning.md)
