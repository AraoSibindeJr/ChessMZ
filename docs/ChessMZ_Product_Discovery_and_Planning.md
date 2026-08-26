ChessMZ — Produto Discovery &

## Especificação Técnica

Status: Documento de Planeamento

## Versão: 1.0

## Data: Agosto 2026

Autor: Análise de Engenharia de Software

## Índice

## 1. Fase 1 — Product Discovery

## 2. Fase 2 — Benchmark Competitivo

- Fase 3 — Requisitos do Sistema
- Fase 4 — MVP Definition

## 5. Fase 5 — Arquitectura Técnica

- Fase 6 — UI/UX Strategy

## 7. Fase 7 — Stack Tecnológica

## 8. Fase 8 — Roadmap Realista

## 9. Fase 9 — Sprint 1 Executável

## FASE 1 — PRODUCT DISCOVERY

1.1 Contexto de Negócio

## A Oportunidade

Problema observado: A falta de uma plataforma de xadrez desenvolvida, otimizada e
pensada para o contexto moçambicano.
Realidade atual:
Plataformas internacionais (Chess.com, Lichess, Chess24) dominam o mercado
Estas plataformas:

Foram desenvolvidas em contextos de internet e dispositivos robustos
Não consideram limitações de banda, latência ou capacidade de processamento
Funcionam bem em contextos de alta conectividade, mas inadequadas para muitos
utilizadores moçambicanos
Não falam línguas moçambicanas
Não têm integração com a comunidade xadrezística local
O ChessMZ resolve isto: Uma plataforma pensada para utilizadores moçambicanos, com
foco em acessibilidade, inclusão linguística, e optimização para realidades de conectividade
limitada.

## Diferença Crítica

O ChessMZ não é apenas "Uma cópia de Chess.com para Moçambique".
O ChessMZ é concebido fundamentalmente diferente:
Design-first para realidades locais
Inclusão linguística como feature central
Otimização para internet limitada como prioridade
Comunidade moçambicana como centro do produto

## 1.2 Visão

Visão: ChessMZ é a maior e melhor plataforma de xadrez desenvolvida em Moçambique,
gratuita, acessível, educativa, e pensada para utilizadores com diferentes níveis de
conectividade e literacia digital.

## 1.3 Missão

Missão: Democratizar o acesso ao xadrez em Moçambique, criando uma plataforma que
permite que qualquer pessoa, independentemente de:
Localização geográfica
Nível económico
Qualidade de conexão
Capacidade do dispositivo

Língua falada
...possa jogar, aprender, competir e crescer como jogador de xadrez.

## 1.4 Problema Central

## O Que Queremos Resolver

## Problema 1 — Acessibilidade

Pessoas em Moçambique com internet limitada ficam excluídas de plataformas de xadrez
de qualidade
Alternativa: Esperar por conexão melhor (barreira ao acesso)

## Problema 2 — Inclusão Linguística

Falantes de línguas moçambicanas enfrentam interfaces apenas em português/inglês
Barreira: Compreensão e confiança em plataformas

## Problema 3 — Comunidade

Falta de integração com contexto local (clubes, professores, escolas)
Falta de rankings e competições nacionais

## Problema 4 — Educação

Xadrez é ferramenta educativa poderosa (lógica, pensamento estratégico, disciplina)
Falta de plataforma educativa pensada para escolas e professores moçambicanos

## Problema 5 — Desenho Inadequado

Plataformas internacionais assumem:
Smartphones modernos
Internet 4G/5G
Interfaces complexas com muitas features
Realidade moçambicana: Smartphones básicos, internet 2G/3G intermitente
A Solução ChessMZ

- Otimização radical para internet limitada
- Suporte linguístico desde o início (português + línguas moçambicanas)

- Interface simples mas poderosa
- Educação integrada (tutoriais, puzzles, avaliação)
- Comunidade (amigos, clubes, torneios locais)
- Performance como feature, não como afterthought
  1.5 Público-Alvo

## Mercado Primário

Definição: Qualquer pessoa em Moçambique que queira jogar xadrez online ou aprender.

## Segmentação:

SegmentoDescriçãoTamanhoPrioridade
IniciantesNunca jogaram xadrez, querem aprenderGrandeP0
Casual PlayersJogam ocasionalmente, diversãoMédioP0
Serious PlayersJogam regularmente, melhoram-seMédioP1
CompetitiveParticipam em torneios, rating importantePequenoP1
EducatorsProfessores, instrutoresPequenoP1
ClubsClubes de xadrez, grupos organizadosPequenoP2
Características Comuns do Público-Alvo
Localização: Moçambique (Maputo, Beira, Nampula, Xai-Xai, Gaza, etc.)
Conectividade: Internet intermitente, móvel, limitada
Dispositivos: Principalmente smartphones (básicos a médios)
Idioma: Português ou línguas moçambicanas
Motivação: Diversão, aprendizagem, competição

## 1.6 Personas Detalhadas

Persona 1: Malia — A Criança que Quer Aprender

## Perfil:

Idade: 10 anos

## Localização: Maputo

Dispositivo: Smartphone básico do pai (2G/3G)
Conexão: Intermitente, móvel

## Idioma: Português

Experiência com xadrez: Nenhuma, mas curiosa

## Goals:

Aprender as regras do xadrez
Jogar contra o computador

## Divertir-se

## Pain Points:

Não consegue usar Chess.com (interface complexa, demora a carregar)
Quer aprender, mas não há recurso estruturado em português
Devices básicos não conseguem com apps pesados
Como ChessMZ a ajuda:
Interface simples e intuitiva
Lições estruturadas em português
Jogo vs Stockfish (com dificuldades adaptadas)
Funciona em dispositivos básicos
Carrega rápido mesmo com 2G

## Persona 2: João — O Estudante Casual

## Perfil:

Idade: 18 anos

## Localização: Beira

Dispositivo: Smartphone Android médio
Conexão: WiFi em casa, móvel na escola

## Idioma: Português

Experiência: Joga ocasionalmente com amigos

## Goals:

Jogar com amigos online
Melhorar o seu nível
Participar em rankings

## Pain Points:

Quer jogar contra amigos, mas é complicado marcar
Gostava de saber o seu rating
Às vezes perde conexão durante o jogo
Como ChessMZ a ajuda:
Convida amigos facilmente
Rating e ranking pessoal
Reconexão automática se perde conexão
Interface amigável para jogar rápido

## Persona 3: Susana — A Professora

## Perfil:

Idade: 45 anos

## Localização: Nampula

Dispositivo: Tablet, smartphone

## Conexão: Moderada

## Idioma: Português

Experiência: Joga desde jovem, agora quer ensinar

## Goals:

Usar xadrez como ferramenta educativa nas aulas
Acompanhar progresso dos alunos
Criar aulas estruturadas

## Pain Points:

Plataformas internacionais são caras ou complexas
Difícil acompanhar múltiplos alunos
Não há conteúdo educativo pensado para escolas moçambicanas
Como ChessMZ a ajuda:
Painel de professor gratuito
Ver progresso de alunos
Atribuir exercícios e puzzles
Conteúdo educativo estruturado
Suporte para escolas

## Persona 4: Ricardo — O Jogador Competitivo

## Perfil:

Idade: 35 anos

## Localização: Maputo

Dispositivo: Smartphone topo de gama
Conexão: Excelente (4G/WiFi)

## Idioma: Português

Experiência: Joga competitivamente, tem rating ~1800 no ELO

## Goals:

Competir em torneios online
Manter/melhorar rating
Jogar contra jogadores do seu nível
Analisar as suas partidas

## Pain Points:

Quer competir localmente, não apenas internacionalmente
Quer torneios pensados para contexto moçambicano
Análise de partidas com engine é importante
Como ChessMZ a ajuda:
Matchmaking robusto com rating ELO

Torneios locais e nacionais
Análise de partidas com Stockfish
Comunidade competitiva moçambicana
Persona 5: Manuel — O Organizador de Clube

## Perfil:

Idade: 52 anos

## Localização: Gaza

Dispositivo: Computador, smartphone
Conexão: Básica mas estável

## Idioma: Português

Experiência: 25 anos de xadrez, organizador de clube local

## Goals:

Organizar torneios online para o seu clube
Manter o clube integrado na comunidade
Facilitar competições entre clubes moçambicanos

## Pain Points:

Difícil coordenar torneios remotos
Falta de plataforma para registar resultados
Quer conectar com outros clubes
Como ChessMZ a ajuda:
Sistema de clubes integrado
Ferramentas para organizar torneios
Estatísticas de clube
Conexão entre clubes em Moçambique
1.7 Proposta de Valor

## Para Cada Segmento

## Para Iniciantes:

✅ Aprender xadrez de forma gratuita e estruturada
✅ Interface acessível mesmo com dispositivos básicos
✅ Conteúdo em português (ou língua local)
✅ Comunidade de apoio

## Para Jogadores Casuais:

✅ Jogar quando quiserem, com quem quiserem
✅ Sem pressão de rating ou competição
✅ Social: amigos, chat, comunidade
✅ Funciona com conexão limitada

## Para Jogadores Sérios:

✅ Rating e ranking justo
✅ Torneios online estruturados
✅ Análise de partidas com engine
✅ Comunidade de jogadores bons

## Para Professores:

✅ Ferramenta educativa gratuita
✅ Acompanhamento de alunos
✅ Conteúdo pedagogicamente estruturado
✅ Integração com escolas

## Para Clubes:

✅ Plataforma para organizar torneios
✅ Visibilidade na comunidade
✅ Estatísticas e rankings
✅ Conectividade com outros clubes

## 1.8 Diferenciais Competitivos

Por Que ChessMZ Será Diferente

DiferencialExplicaçãoImpacto
Otimizado para
internet limitada
Funciona com 2G/3G, página carrega em

## <2s

Acesso inclusivo

## Português + Línguas

locais
Interface não apenas em português, mas
em Changana, Xichangana, etc.
Inclusão linguística
Design localPensado para realidade moçambicana, não
apenas tradução de estrangeiro
Relevância cultural
Gratuito, sem
paywalls
Todas funcionalidades importantes são
gratuitas

## Acessibilidade

económica
Educação integradaAcademia estruturada, não apenas jogoAprendizagem real

## Comunidade

moçambicana
Rankings, torneios, clubes locaisPertencimento
LightweightApp/web muito rápida, suporta
dispositivos básicos

## Performance

Offline-first principlesFunciona offline quando possívelResiliência
1.9 Riscos e Mitigation

## Riscos Críticos

RiscoProbabilidadeImpactoMitigation

## Escalabilidade (muitos

utilizadores)
MédiaAltoArquitetura escalável desde o
início; use serviços cloud
Qualidade do StockfishBaixaMédioIntegração com Stockfish bem
testada
Conectividade de
utilizadores
AltaMédioDesign offline-first; sincronização
robusta
Suporte a múltiplas
línguas
BaixaMédioArquitetura i18n modular;
crowdsourcing de traduções

## Segurança (hacking,

cheating)
MédiaAltoAutenticação robusta; detecção
de cheating; auditorias
Manutenção a longo
prazo
MédiaAltoDocumentação excelente;
comunidade de desenvolvedores
Falta de network effectsMédiaAltoCrescimento orgânico; integração
com clubes locais
Concorrência de
Chess.com/Lichess
MédiaMédioDiferencial local; melhor UX; não
tenta competir globalmente
Estratégia de Mitigation

- Arquitectura robusta desde o início (escala horizontal, cache, CDN)
- Testes extensivos (unit, integration, E2E, carga)
- Comunidade (open-source quando apropriado, contribuidores locais)
- Partnership (clubes, escolas, federações moçambicanas)
- Monitorização (logs, alertas, métricas)

## 1.10 Oportunidades

Curto Prazo (0-6 meses)
Validação de produto com primeiros 1000 utilizadores
Feedback loops rápidos para melhorias
Crescimento orgânico através de redes sociais moçambicanas
Partnerships com escolas para testar conteúdo educativo
Médio Prazo (6-18 meses)
Ranking nacional reconhecido
Torneios estruturados com prémios
Integração com clube de xadrez moçambicanos
Conteúdo educativo completo
Suporte a múltiplas línguas moçambicanas
Longo Prazo (18+ meses)

Aplicação mobile nativa (iOS/Android)
Transmissão de partidas (streaming, comentários)
API pública para integração com federações
Sistema de torneios nacionais com ranking oficial
Reconhecimento internacional como plataforma moçambicana
1.11 Indicadores de Sucesso
Métricas de Curto Prazo (MVP)
Utilizadores ativos: 1.000+ em 3 meses
Retenção: 40%+ utilizadores voltam após 1 semana
Performance: Página carrega em <2s (3G)
Disponibilidade: 99%+ uptime
Satisfação: Net Promoter Score (NPS) > 30
Métricas de Médio Prazo
Utilizadores ativos: 10.000+
Partidas por dia: 5.000+
Retenção mensal: 60%+
Ranking nacional: Reconhecido por clubes moçambicanos
Escolas: 50+ usando ChessMZ educativamente
Métricas de Longo Prazo
Utilizadores ativos: 100.000+
Jogadores com rating: 50.000+
Torneios nacionais: Reconhecidos federativamente
Idiomas suportados: 5+ (português + 4 línguas moçambicanas)
Receita: Modelo sustentável (sem comprometer acesso gratuito)

## FASE 2 — BENCHMARK COMPETITIVO

2.1 Análise de Chess.com

## O Que Está Bem

✅ Plataforma madura — 20+ anos de refinação
✅ Funcionalidades completas — Tudo o que um jogador pode querer
✅ UX profissional — Interface clara, bem pensada
✅ Comunidade grande — Milhões de utilizadores
✅ Rating robusto — Sistema ELO bem calibrado
✅ Análise de partidas — Engine integrado para análise
✅ Conteúdo educativo — Vídeos, artigos, puzzles
✅ Mobile app — Funciona bem em telefone
O Que Está Mal (Do Ponto de Vista de Utilizador Moçambicano)
❌ Muito pesado — Muitas features, interface complexa
❌ Requer boa conexão — Funciona mal com 3G
❌ Não otimizado para dispositivos básicos — App grande, consome muita memória
❌ Apenas inglês — Sem suporte a línguas moçambicanas
❌ Premium-focused — Muitas features atrás de paywall
❌ Não pensada para contexto local — Sem rankings moçambicanos, sem integração local
❌ Caro — Premium custa $5-10/mês (relevante para Moçambique)

## O Que Aprender

Sistema de rating robusto
UI/UX patterns para xadrez
Funcionalidades essenciais
Community features que funcionam

## O Que Evitar

Paywalls excessivos
Complexidade desnecessária
Falta de otimização para conexões fracas
2.2 Análise de Lichess

## O Que Está Bem

✅ 100% Gratuito — Sem paywalls, sem publicidade
✅ Open-source — Código disponível, transparência
✅ Leve — Funciona bem até com conexão mais fraca
✅ API pública — Permite integração de terceiros
✅ Análise integrada — Engine Stockfish integrado
✅ Comunidade vibrante — Programadores, contribuidores
✅ Multiplayer robusto — Real-time chess bem implementado
O Que Está Mal (Do Ponto de Vista de Utilizador Moçambicano)
❌ Interface para utilizadores avançados — Pode ser confusa para iniciantes
❌ Sem conteúdo educativo estruturado — Mais para jogadores, menos para aprendizes
❌ Idioma limitado — Algumas partes do site não são bem traduzidas
❌ Sem comunidade local — Rankings, torneios são globais
❌ Comunidade muito grande — Matchmaking pode ser injusto para iniciantes

## O Que Aprender

Como fazer produto totalmente gratuito
Como manter código limpo e sustentável
Importância de API pública
Comunidade open-source

## O Que Evitar

Não comprometer UX em nome de features avançadas
Não assumir que utilizadores são técnicos
2.3 Análise de Chess24/Chessable

## O Que Está Bem

✅ Educação de qualidade — Conteúdo de instrutores top
✅ Cursos estruturados — Aprendizagem progressiva
✅ Comunidade profissional — Jogadores sérios

## O Que Está Mal

❌ Caro — Cursos custam dinheiro
❌ Focado em profissionais — Não para iniciantes

❌ Sem comunidade local — Global apenas

## O Que Aprender

Como estruturar conteúdo educativo
Sistema de cursos e progressão

## 2.4 Síntese Comparativa

AspectoChess.comLichessChessMZ (Target)
PreçoFreemium ($5-10/mês)GratuitoGratuito
IdiomasInglês + traduçãoVáriosPortuguês + moçambicanos
PesoPesadoLeveMuito leve
ConexãoBoa/ExcelenteModeradaQualquer (2G+)
EducaçãoBoaBásicaExcelente (estruturada)
Comunidade LocalNãoNãoSim
MobileExcelenteBoaExcelente (lightweight)
Open-sourceNãoSimSim (considerar)
Público-alvoTodos (Premium-focused)AvançadosIniciantes + Avançados
2.5 Posicionamento do ChessMZ

## O Quadrante Competitivo

## Caro

## ▲

## │

## Chess.com │

## ● │

## Premium-focused │

## │

## Complexo ────────────┼─────────── Simples

## │

ChessMZ │

## ● │

Educativo/Local │

## │

## │

## Lichess │

## ● │

Open/Avançado │

## │

## ▼

## Gratuito

ChessMZ posição: Simples + Gratuito + Educativo + Local

## FASE 3 — REQUISITOS DO SISTEMA

3.1 Requisitos Funcionais (RF)
RF-1: Autenticação e Contas
IDRequisitoDescrição
RF-1.1Registo de utilizadorUtilizador cria conta com email/username
RF-1.2LoginAcesso com credenciais
RF-1.3LogoutSair da sessão

RF-1.4Recuperação de passwordResetar password via email
RF-1.5Verificação de emailConfirmar email após registo
RF-1.6Perfil de utilizadorVer/editar perfil pessoal
RF-1.7AvatarEscolher/upload de avatar
RF-2: Jogo de Xadrez
IDRequisitoDescrição
RF-2.1Tabuleiro 8x8Representação visual do tabuleiro
RF-2.2Movimentos
válidos
Validar movimentos segundo regras
RF-2.3CapturasRemover peças capturadas
RF-2.4RoqueSuportar roque (ambos os lados)
RF-2.5En PassantCaptura especial de peão
RF-2.6PromoçãoPromover peão ao chegar 8ª linha
RF-2.7XequeIndicar quando rei está em xeque
RF-2.8Xeque-mateDetectar fim de jogo por xeque-mate
RF-2.9EmpateDetectar empate (afogamento, 50 movimentos, repetição,
insuficiente material)

## RF-

## 2.10

## Notação

algébrica
Registar movimentos em notação padrão
RF-3: Jogo vs Computador
IDRequisitoDescrição
RF-3.1Integração StockfishUsar Stockfish como engine
RF-3.2Níveis de dificuldade10+ níveis (1-2000 rating)
RF-3.3Tempo de respostaEngine responde em tempo razoável

RF-3.4Modo treinoEngine dá dicas/análise
RF-4: Multiplayer Online
IDRequisitoDescrição
RF-4.1MatchmakingEncontrar oponente automaticamente
RF-4.2Jogador vs JogadorJogar contra utilizador real
RF-4.3RelógioControlar tempo de cada jogador
RF-4.4ReconexãoRecuperar ligação se desconectado
RF-4.5AbandonoRegistar abandono como derrota
RF-4.6Chat durante jogoComunicação entre jogadores
RF-4.7TimeoutTerminar jogo se alguém ficar AFK
RF-5: Rating e Ranking
IDRequisitoDescrição
RF-5.1Rating ELOCalcular rating automático
RF-5.2Histórico de ratingMostrar evolução ao longo do tempo
RF-5.3Ranking globalLista ordenada por rating
RF-5.4Ranking por categoriaRanking por tipos de tempo (bullet, blitz, rapid)
RF-5.5Troféus/BadgesDistintivos por conquistas
RF-6: Educação
IDRequisitoDescrição
RF-6.1Lições estruturadasCurso progressivo (iniciante a avançado)
RF-6.2ExercíciosProblemas com um melhor movimento
RF-6.3PuzzlesDesafios tácticos

RF-6.4Avaliação inicialTeste para determinar nível
RF-6.5RecomendaçõesSugerir conteúdo baseado em nível
RF-6.6ProgressoAcompanhamento de aprendizagem
RF-7: Comunidade
IDRequisitoDescrição
RF-7.1Lista de amigosAdicionar/remover amigos
RF-7.2Desafio de amigoConvidar amigo para jogo
RF-7.3Partidas privadasJogar com código/link privado
RF-7.4ClubesCriar/aderir a clubes
RF-7.5Chat de clubeComunicação do grupo
RF-7.6EspectadorObservar partidas ao vivo
RF-8: Análise de Partidas
IDRequisitoDescrição
RF-8.1ReplayVer partida novamente
RF-8.2Análise com engineAvaliar cada movimento
RF-8.3Melhor movimentoSugerir movimento ótimo
RF-8.4BlundersIdentificar erros graves
RF-8.5PGN exportExportar partida em formato padrão
RF-9: Internacionalização
IDRequisitoDescrição
RF-9.1PortuguêsInterface completa em português
RF-9.2ChanganaSuporte para Changana

RF-9.3XichanganaSuporte para Xichangana
RF-9.4Outras línguasPreparação para outras línguas
3.2 Requisitos Não-Funcionais (RNF)
RNF-1: Performance
IDRequisitoEspecificação
RNF-1.1Tempo de carregamento<2s (3G), <500ms (WiFi)
RNF-1.2Responsividade UI<100ms para interações
RNF-1.3Tamanho da app<5MB (Progressive Web App)
RNF-1.4Tamanho de request<50KB por request
RNF-1.5Número de requests<10 requests no carregamento inicial
RNF-2: Escalabilidade
IDRequisitoEspecificação
RNF-2.1Utilizadores simultâneosSuportar 10.000+ online
RNF-2.2Partidas simultâneas5.000+ partidas simultâneas
RNF-2.3Throughput100+ movimentos por segundo
RNF-2.4Latência real-time<100ms para movimentos
RNF-3: Disponibilidade
IDRequisitoEspecificação
RNF-3.1Uptime99.5%+ (máx 3.6h outage/mês)
RNF-3.2RecoveryRecuperação automática em <5min
RNF-3.3BackupDaily backups, retenção 30 dias

RNF-3.4Disaster recoveryRTO <1h, RPO <1h
RNF-4: Segurança
IDRequisitoEspecificação
RNF-4.1AutenticaçãoUsar JWT com refresh tokens
RNF-4.2EncriptaçãoHTTPS/TLS para todas conexões
RNF-4.3PasswordBcrypt com salt (10+ rounds)
RNF-4.4Rate limitingMax 5 logins falhados/minuto
RNF-4.5CORSRestrições adequadas
RNF-4.6Validação inputValidação rigorosa de dados
RNF-4.7Detecção de cheatingAlgoritmo para detectar ajuda externa
RNF-4.8Audit logRegistar ações sensíveis
RNF-5: Compatibilidade
IDRequisitoEspecificação
RNF-5.1BrowsersChrome, Firefox, Safari (últimas 2 versões)
RNF-5.2MobileiOS 12+, Android 6+
RNF-5.3Resoluções320px width (mobile) até 4K
RNF-5.4JavaScriptFunciona sem JS (fallback)
RNF-6: Acessibilidade
IDRequisitoEspecificação
RNF-6.1WCAG 2.1Conformidade AA mínimo
RNF-6.2TecladoNavegável apenas com teclado
RNF-6.3Screen readerCompatível com screen readers

RNF-6.4CoresNão depender só de cores
RNF-6.5Font sizeAjustável dinamicamente
RNF-7: Offline-first
IDRequisitoEspecificação
RNF-7.1Service WorkerFunciona offline com cache
RNF-7.2SincronizaçãoSincroniza quando retorna online
RNF-7.3Dados locaisIndexedDB para cache local
3.3 Casos de Uso Principais
UC-1: Utilizador Novo Aprende Xadrez
Ator: Iniciante (e.g., Malia, 10 anos)

## Fluxo:

- Visita ChessMZ, clica "Comece a aprender"
- Regista conta com email/username
- Completa avaliação inicial (simples)
- Sistema recomenda lições para o seu nível
- Completa Lição 1: "Como as peças se movem"
- Pratica com exercícios
- Joga contra Stockfish no nível fácil
- Ver progresso no dashboard
  UC-2: Amigos Jogam Juntos

## Ator: Estudante (e.g., João)

## Fluxo:

- Abre ChessMZ

- Vê lista de amigos
- Clica "Convidar para jogar" em amigo
- Amigo recebe notificação
- Aceita, partida começa
- Ambos veem tabuleiro em tempo real
- Movimentos sincronizam instantaneamente
- Partida termina, rating atualiza
- Podem replay e analisar com engine
  UC-3: Professor Cria Aula

## Ator: Educador (e.g., Susana)

## Fluxo:

- Regista como professor
- Cria turma "Xadrez 7.ºano"
- Adiciona alunos (por email)
- Atribui "Exercício 5: Tácticas Básicas"
- Alunos recebem aviso
- Alunos completam exercício
- Professor vê % de conclusão
- Revê desempenho individual
- Pode dar feedback
  UC-4: Jogador Analisa Partida

## Ator: Jogador Competitivo (e.g., Ricardo)

## Fluxo:

- Termina partida online
- Clica "Analisar"
- Sistema carrega partida
- Engine Stockfish analisa cada movimento
- Vê avaliação (+1.5 = branco melhor 1.5 peões)

- Identifica blunders automáticamente
- Vê sugestões de melhor movimento
- Pode comentar movimentos
- Exporta em PGN para arquivo pessoal
  3.4 Critérios de Aceitação (por feature MVP)
  Feature: Jogo vs Computador
  Critério 1: Stockfish responde em <3s (nível fácil)
  Critério 2: Todos 8 níveis funcionam corretamente
  Critério 3: Funciona com 2G (carrega <5MB)
  Critério 4: Pode salvar/retomar jogo
  Critério 5: Reconhecer xeque-mate corretamente

## FASE 4 — MVP DEFINITION

4.1 O Que Entra no MVP

## Funcionalidades Core

## ✅ Autenticação

Registo (email + password)
Login/Logout
Reset password simples
✅ Tabuleiro de Xadrez

## Representação 8x8

Movimentos válidos (incluindo roque, en passant, promoção)
Detecção de xeque/xeque-mate/empate
✅ Jogo vs Computador
Integração com Stockfish
5 níveis (fácil, médio, difícil, muito difícil, expert)

Temporizador opcional

## ✅ Matchmaking Simples

Encontrar oponente por rating aproximado
Jogar contra utilizador real
Real-time sync com WebSocket

## ✅ Rating Básico

Sistema ELO simples
Ranking global
Histórico de últimas 10 partidas

## ✅ Análise Básica

Replay de partida

## Movimento-a-movimento

Indicação de xeque e xeque-mate

## ✅ Amigos

Adicionar amigos por username
Convidar para jogar
Ver amigos online

## ✅ Dashboard Simples

Últimas partidas
Rating atual
Estatísticas básicas (vitórias, derrotas, empates)

## ✅ Interface Responsiva

## Desktop (1024px+)

## Tablet (768px-1024px)

## Mobile (320px-768px)

✅ Otimização para conexão limitada
PWA com offline fallback
<5MB total

<500ms para movimento
4.2 O Que NÃO Entra no MVP
❌ Educação estruturada (v0.7)

## ❌ Chat (v0.8)

## ❌ Clubes (v0.8)

## ❌ Torneios (v0.9)

❌ Múltiplos idiomas (post-v1.0)
❌ Sistema de professores (v0.7)
❌ Análise avançada com engine (post-v1.0)
❌ Transmissão de partidas (post-v1.0)
❌ Notificações push (v0.2)
❌ Avatar upload (v0.4)
4.3 Escopo Reduzido do MVP

## Versão Mínima Viável

ChessMZ MVP (v0.5)

## │

├── 1. Auth (Registo/Login)
├── 2. Tabuleiro (Xadrez completo)
├── 3. Jogo vs Computer (Stockfish)
├── 4. Matchmaking (Jogador vs Jogador)
├── 5. Rating (ELO simples)
├── 6. Amigos (Básico)
├── 7. Dashboard (Estatísticas)
├── 8. PWA (Funciona offline)

## │

└── Performance: <2s (3G), <5MB
4.4 Definição de "Done" para MVP

O MVP está completo quando:
✅ Utilizador consegue registar-se
✅ Utilizador consegue jogar vs Stockfish até xeque-mate
✅ Utilizador consegue jogar vs outro utilizador em tempo real
✅ Movimentos sincronizam instantaneamente
✅ Rating atualiza após cada partida
✅ Funciona em smartphone com 3G
✅ Página carrega em <2s
✅ App/web pesa <5MB
✅ 99.5% uptime durante teste beta
✅ Sem bugs críticos (xeque-mate incorreto, crash, perda de dados)

## FASE 5 — ARQUITECTURA TÉCNICA

5.1 Diagrama de Arquitetura Geral

## ┌─────────────────────────────────────────────────────────────┐

## │ CLIENTE │

## │ │

## │ ┌──────────────────────────────────────────────────────┐ │

│ │ Browser / Mobile App (React + TypeScript) │ │
│ │ - UI Components │ │

## │ │ - Chess Board │ │

│ │ - Game Logic (validação local) │ │
│ │ - State Management (Zustand/Redux) │ │
│ │ - Service Workers (offline support) │ │

## │ └──────────────────────────────────────────────────────┘ │

## │ │ │

│ HTTP + WebSocket │

## │ │ │

## └──────────────────────────┼──────────────────────────────────┘

## │

## ▼

## ┌─────────────────────────────────────────────────────────────┐

## │ API GATEWAY │

│ (Load Balancer, Rate Limiting, CORS) │

## └──────────────────────────┬──────────────────────────────────┘

## │

## ┌───────────────┼───────────────┐

## │ │ │

## ▼ ▼ ▼

## ┌────────────┐ ┌────────────┐ ┌──────────────┐

│ REST API │ │ WebSocket │ │ Auth API │
│ (Express) │ │ Server │ │ │
│ │ │ (Socket.io)│ │ JWT/OAuth │

## └────────────┘ └────────────┘ └──────────────┘

## │ │ │

## └───────────────┼───────────────┘

## │

## ┌────────────────────┼────────────────────┐

## │ │ │

## ▼ ▼ ▼

## ┌────────────────┐ ┌──────────────┐ ┌──────────────┐

## │ Database │ │ Chess Engine │ │ Cache │

## │ │ │ │ │ │

│ PostgreSQL │ │ Stockfish │ │ Redis │

## │ │ │ │ │ │

## │ - Users │ │ - Analysis │ │ - Sessions │

## │ - Games │ │ - Ratings │ │ - Ratings │

## │ - Ratings │ │ │ │ - Game State │

## │ - Friendships │ │ │ │ │

## └────────────────┘ └──────────────┘ └──────────────┘

## │ │ │

## └────────────────────┼────────────────────┘

## │

## ┌──────▼──────┐

## │ Storage │

## │ │

## │ S3 / CDN │

## │ │

## │ - Assets │

## │ - Backups │

## └─────────────┘

## 5.2 Componentes Detalhados

5.2.1 Frontend (Cliente)
Stack: React 18 + TypeScript + Vite
Componentes principais:
<ChessBoard /> — Tabuleiro interativo
<GameInfo /> — Rating, tempo, jogadores
<MoveList /> — Lista de movimentos
<GameHistory /> — Histórico de partidas
<RankingTable /> — Rankings
<UserProfile /> — Perfil do utilizador

## Estado Global:

AuthState (utilizador autenticado, token)
GameState (partida atual, movimentos)
RatingState (rating, ranking)
UIState (tema, idioma)

## Service Workers:

Cache de assets (HTML, CSS, JS)
Sync de dados quando volta online
Background sync para movimentos
5.2.2 Backend (API)
Stack: Node.js + Express + TypeScript
Serviços principais:
AuthService
Registo/Login
JWT token generation
Password reset
Email verification
GameService
Criar partida
Validar movimentos
Detectar fim (xeque-mate, empate)
Guardar em BD
MatchmakingService
Encontrar oponente apropriado
Queue de espera
Pairing algorithm (rating-based)
RatingService
Calcular ELO
Atualizar rankings

Histórico de rating
ChessEngine
Comunicação com Stockfish
Análise de posições
Geração de movimentos
NotificationService
Alerts (convite, partida terminada)
Email (reset password)
5.2.3 WebSocket Server (Real-time)
Stack: Socket.io (ou ws)

## Eventos:

## // Cliente → Servidor

socket.emit('joinGame', { gameId })
socket.emit('makeMove', { from, to })
socket.emit('resignGame', { gameId })
socket.emit('drawOffer', { gameId })

## // Servidor → Cliente

socket.on('gameStarted', { opponent, color })
socket.on('moveMade', { move, evaluation })
socket.on('gameEnded', { result, reason })
socket.on('opponentOffline', { })
socket.on('reconnected', { moves })
5.2.4 Database (PostgreSQL)
Schemas principais:

## -- Utilizadores

Table users {
id UUID PRIMARY
username VARCHAR UNIQUE
email VARCHAR UNIQUE
passwordHash VARCHAR
rating INT DEFAULT 1200
wins INT DEFAULT 0
losses INT DEFAULT 0
draws INT DEFAULT 0
createdAt TIMESTAMP

## }

## -- Partidas

Table games {
id UUID PRIMARY
whiteUserId UUID FK
blackUserId UUID FK
moves TEXT (PGN notation)
result VARCHAR (1-0, 0-1, 1/2-1/2)
endReason VARCHAR
startedAt TIMESTAMP
endedAt TIMESTAMP

## }

-- Rating history
Table ratingHistory {
id UUID PRIMARY
userId UUID FK
rating INT
recordedAt TIMESTAMP
gameId UUID FK

## }

## -- Friendships

Table friendships {
id UUID PRIMARY

userId1 UUID FK
userId2 UUID FK
status VARCHAR (pending, accepted)
createdAt TIMESTAMP

## }

5.2.5 Chess Engine (Stockfish)

## Integração:

Fork processo Stockfish
UCI protocol (padrão de engines)
Enviar posição FEN
Receber melhor movimento
Pode pedir análise completa

## Alternativas:

Usar como serviço externo (chess-web-api)
Compilar para WebAssembly (chess.js)
Usar motor mais leve para dispositivos limitados
5.3 Fluxo de Dados: Uma Partida Online

- Utilizador A clica "Play Online"

## ↓

- Frontend A emite WebSocket: joinGame()

## ↓

- Backend recebe, chama MatchmakingService

## ↓

- MatchmakingService encontra Utilizador B

## ↓

- Backend emite: gameStarted a ambos clientes

## ↓

- Frontend renderiza tabuleiro em ambos

## ↓

- Utilizador A faz movimento

## ↓

- Frontend A valida (xeque legais, etc.)

## ↓

- Frontend A emite: makeMove(from, to)

## ↓

- Backend recebe, valida novamente

## ↓

- Backend guarda em BD games.moves

## ↓

- Backend emite: moveMade a ambos clientes

## ↓

- Frontend B atualiza tabuleiro

## ↓

- Utilizador B faz movimento

## ↓

- (repetir 7-13 até fim)

## ↓

- Utilizador A faz xeque-mate

## ↓

- Backend detecta fim de jogo

## ↓

- Backend atualiza ratings (ELO)

## ↓

- Backend emite: gameEnded a ambos

## ↓

- Ambos veem resultado e opção de replay

## 5.4 Segurança

## Autenticação

JWT tokens com expiração 1 hora
Refresh tokens com expiração 7 dias (HttpOnly cookie)
Bcrypt para passwords (10 rounds)

## Validação

Rate limiting: 5 logins/minuto, 100 requests/minuto
Input validation: Whitelist, não blacklist
SQL injection: Prepared statements (ORM/parameterized queries)

## Comunicação

HTTPS/TLS: Forçado em produção
CORS: Domínios permitidos listados
WebSocket: Autenticação por token
Detecção de Cheating
Engine analysis: Comparar movimentos com Stockfish (%)
Timing: Detetar respostas humanamente impossíveis
Padrões: Machine learning para detectar atividades suspeitas

## FASE 6 — UI/UX STRATEGY

6.1 Princípios de Design

- Simplicidade — Não mais de 3 níveis de navegação
- Clareza — Cada elemento tem propósito óbvio
- Velocidade — Carrega rápido, respostas instantâneas

- Acessibilidade — Funciona para todos (WCAG 2.1 AA)
- Consistência — Padrões visuais e comportamentais
- Moçambicano — Cores, tipografia, ícones relevantes
  6.2 Paleta de Cores (Proposta)
  CorUsoCódigo
  Verde MoçambiquePrimary/Brand#007956
  OuroAccent/Success#D4A54B
  Cinzento EscuroText/Background#2C3E50
  Cinzento ClaroSecondary bg#ECF0F1
  VermelhoError/Alert#E74C3C
  AzulInfo#3498DB

## 6.3 Tipografia

Headings: Inter ou Roboto (sans-serif moderno)
Body: System fonts (SF Pro, Roboto, Segoe)

## Sizes: 12px, 14px, 16px, 18px, 20px, 24px, 32px

6.4 Fluxo de Telas Principais
Estrutura de Navegação

ChessMZ
├── Landing Page (não autenticado)

## ├── Auth

## │ ├── Login

## │ ├── Registo

## │ └── Reset Password

## └── App (autenticado)

## ├── Dashboard

│ ├── Últimas partidas

## │ ├── Rating

│ └── Quick stats

## ├── Play

## │ ├── Play Online (matchmaking)

│ ├── Play Computer (Stockfish)

## │ ├── Play Friend (convite)

## │ └── Custom (configuração)

├── Game View (durante partida)

## │ ├── Chessboard

│ ├── Opponent info

## │ ├── Timer

│ ├── Move list
│ └── Resign/Draw

## ├── Rankings

│ ├── Global ranking
│ └── Friend rankings

## ├── Friends

│ ├── Friends list
│ ├── Add friend
│ └── Pending requests

## ├── Profile

│ ├── User info

## │ ├── Statistics

│ ├── Game history

## │ ├── Settings

## │ └── Logout

## └── Game Analysis (post-game)

├── Move replay

├── Engine evaluation
└── PGN export
6.5 Wireframes (Descrição de Telas MVP)

## Tela 1: Landing Page

Objetivo: Convencer utilizador novo a registar-se

## Elementos:

Logo ChessMZ (grande)
Tagline: "Xadrez Online para Moçambique"
CTA principal: "Comece a Jogar" (botão verde)
Features (3-4 bullet points):
Gratuito e sem publicidade
Jogue vs máquina ou amigos
Melhor o seu rating
Funciona com internet limitada
Footer: Linguagem, contactos

## Tela 2: Registo

Objetivo: Criar conta

## Elementos:

## Input: Email

Input: Username (3-20 caracteres)
Input: Password (com força indicator)

## Checkbox: Termos & Privacidade

## Botão: Registar

Link: "Já tem conta? Login"

## Validação:

Email formato válido

Username único
Password forte (8+ chars, maiúscula, número)
Tela 3: Dashboard (Home)
Objetivo: Centro de atividade

## Secções:

A. Top bar
Logo ChessMZ

## Username

## Notificações (ícone)

Menu (hambúrguer mobile)
B. Stats card
Rating (grande, destacado)

## Vitórias | Derrotas | Empates

Últimas 7 dias (gráfico pequeno)
C. Quick actions
[Jogar Online] (verde)
[Jogar vs Computer] (azul)
[Convite Amigo] (cinzento)
D. Últimas partidas

## Tabela: Oponente | Resultado | Tempo | Data

Link: "Ver todas"
E. Amigos online

## Avatar + Nome

Botão "Jogar"
F. Bottom navigation (mobile)

## Jogar

## Rankings

## Amigos

## Perfil

Tela 4: Tabuleiro (Durante Jogo)
Objetivo: Jogar xadrez

## Layout:

## ┌─────────────────────────────────────┐

## │ Oponente: João Rating: 1500 │

│ ⏱ 5:30 ● 1 minuto │

## ├─────────────────────────────────────┤

## │ │

## │ [ Tabuleiro 8x8 ] │

│ [ Com indicadores ] │
│ [ de movimentos ] │

## │ │

## ├─────────────────────────────────────┤

## │ Você: Silva Rating: 1450 │

│ ⏱ 9:45 ● Seu turno │

## ├─────────────────────────────────────┤

│ Movimentos: 1.e4 e5 2.Nf3 Nc6... │

## │ │

## │ [ Resign ] [ Offer Draw ] │

## └─────────────────────────────────────┘

## Elementos:

Info oponente (top)
Tabuleiro central
Sua info (bottom)
Move list (scrollable)
Botões (resign, draw)
Tela 5: Resultado/Análise

Objetivo: Ver resultado e replay

## Elementos:

Grande resultado: "Vitória! +45 Rating"

## Estatísticas:

Seu melhor movimento
Maior erro

## Acurácia (%)

## Opções:

[Replay]
[Analisar com Engine]
[Partilhar PGN]
[Nova Partida]
6.6 Mobile-First Design
ChessMZ é desenhado para mobile primeiro porque:

- 70%+ do público usa smartphone
- Se funciona em mobile limitado, funciona em desktop
- Força simplicidade (não há espaço para complexidade)

## Breakpoints:

## Mobile: 320px - 768px

## Tablet: 768px - 1024px

## Desktop: 1024px+

## Adaptações:

ElementoMobileTabletDesktop
Tabuleiro100% width80%60%
MoveistEscondidoLateralLateral
NavigationBottom tabLateralTopo

StatsStackedRowRow

## FASE 7 — STACK TECNOLÓGICA

7.1 Decisões de Stack

## Frontend

Opção 1: React + Vite + TypeScript ✅ RECOMENDADO

## Vantagens:

Component-based, reutilizável
TypeScript para type safety
Vite é muito rápido
Grande comunidade
PWA suporte nativo

## Desvantagens:

Inicial learning curve
Dependências externas

## Alternativas:

Vue (mais simples que React, mas comunidade menor)
Svelte (muito leve, mas comunidade menor)
Vanilla JS (muito pesado para este projeto)
Decisão: React + Vite + TypeScript
Dependências principais:
react-router-dom — Routing
zustand — State management (simples)
axios — HTTP client
socket.io-client — WebSocket

chess.js — Lógica de xadrez
react-chessboard — Componente tabuleiro
tailwindcss — Styling

## Backend

Opção 1: Node.js + Express + TypeScript ✅ RECOMENDADO

## Vantagens:

JavaScript no frontend e backend
Rápido de desenvolver
Comunidade grande
Fácil de escalar
NPM ecosystem

## Desvantagens:

Single-threaded (CPU-bound) — mas ok para este uso
Menos seguro por default

## Alternativas:

Python + Django (mais seguro, mais lento)
Go (muito rápido, aprendizagem maior)
Java (enterprise, overkill)
Decisão: Node.js + Express + TypeScript
Dependências principais:
express — Web framework
socket.io — WebSocket server
postgresql (driver pg) — Database
bcryptjs — Password hashing
jsonwebtoken — JWT
dotenv — Environment variables

cors — CORS handling
helmet — Security headers
compression — Gzip compression

## Database

Opção 1: PostgreSQL ✅ RECOMENDADO

## Vantagens:

## Open-source

ACID compliant (dados seguros)
JSON support (flexível)
Triggers para automação
Gratuito e escalável

## Desvantagens:

Mais complexo que SQLite
Requer setup

## Alternativas:

SQLite (simples para MVP, depois migra)
MongoDB (NoSQL, menos estruturado)
Decisão: PostgreSQL (ou SQLite para MVP local, depois migra)

## Chess Engine

Opção 1: Stockfish (UCI binary) ✅ RECOMENDADO

## Integração:

// Usar biblioteca: chess-engine-web-worker
import { Stockfish } from 'stockfish.js'
const stockfish = new Stockfish()
stockfish.onmessage = (msg) => console.log(msg.data)
stockfish.postMessage(`position fen ${fen}`)
stockfish.postMessage(`go depth 20`)

## Alternativas:

Lichess API (externo, depende de internet)
Chess.com API (externo)
Compilar WebAssembly (mais complexo)
Decisão: Stockfish via chess-engine-web-worker

## Real-time Communication

Opção 1: Socket.io (com fallback WebSocket) ✅ RECOMENDADO

## Vantagens:

Auto-fallback (HTTP long-polling se WebSocket não funciona)
Rooms/namespaces (fácil de gerenciar)
Reconnection automática
Bem documentado

## Desvantagens:

Overhead ligeiro vs WebSocket puro
Dependência extra

## Alternativas:

WebSocket puro (mais ligeiro, mais manual)
Server-Sent Events (SSE - só servidor → cliente)

## Decisão: Socket.io

PWA / Offline

## Tecnologias:

workbox — Service Workers
idb — IndexedDB para cache local
Manifest JSON (app instalável)
Estilo/CSS
Opção 1: Tailwind CSS ✅ RECOMENDADO

## Vantagens:

Utility-first (rápido escrever)
Arquivo CSS pequeno (elimina unused)
Responsivo por default
Comunidade grande

## Desvantagens:

Markup mais denso
Learning curve

## Alternativas:

CSS Modules (modular)
Styled-components (CSS-in-JS)
BEM (clássico)
Decisão: Tailwind CSS
7.2 Arquitetura de Diretórios

## Frontend

frontend/
├── public/
│ ├── index.html
│ ├── manifest.json (PWA)
│ └── service-worker.js
├── src/
│ ├── components/
│ │ ├── ChessBoard.tsx
│ │ ├── GameInfo.tsx
│ │ ├── MoveList.tsx

## │ │ ├── Button.tsx

## │ │ └── ...

│ ├── pages/
│ │ ├── LandingPage.tsx
│ │ ├── LoginPage.tsx
│ │ ├── DashboardPage.tsx
│ │ ├── GamePage.tsx
│ │ ├── RankingPage.tsx
│ │ └── ProfilePage.tsx
│ ├── layouts/
│ │ ├── MainLayout.tsx
│ │ └── AuthLayout.tsx
│ ├── services/
│ │ ├── api.ts (axios instance)
│ │ ├── socketService.ts
│ │ ├── authService.ts
│ │ ├── gameService.ts
│ │ └── storageService.ts
│ ├── store/
│ │ ├── authStore.ts (Zustand)
│ │ ├── gameStore.ts
│ │ └── uiStore.ts
│ ├── types/

## │ │ ├── User.ts

## │ │ ├── Game.ts

## │ │ ├── Rating.ts

│ │ └── api.ts

│ ├── utils/
│ │ ├── validators.ts
│ │ ├── formatters.ts
│ │ └── constants.ts
│ ├── hooks/
│ │ ├── useAuth.ts
│ │ ├── useGame.ts
│ │ └── useSocket.ts
│ ├── styles/
│ │ ├── globals.css
│ │ └── tailwind.config.js

## │ ├── App.tsx

│ └── main.tsx
├── package.json
├── tsconfig.json
├── vite.config.ts

## └── .env.example

## Backend

backend/
├── src/
│ ├── routes/
│ │ ├── auth.routes.ts
│ │ ├── games.routes.ts
│ │ ├── users.routes.ts
│ │ ├── ratings.routes.ts
│ │ └── friendships.routes.ts
│ ├── controllers/
│ │ ├── auth.controller.ts
│ │ ├── games.controller.ts
│ │ ├── users.controller.ts
│ │ └── ratings.controller.ts
│ ├── services/
│ │ ├── auth.service.ts
│ │ ├── game.service.ts
│ │ ├── matchmaking.service.ts
│ │ ├── rating.service.ts
│ │ ├── chess.service.ts (Stockfish)
│ │ └── email.service.ts
│ ├── models/
│ │ ├── user.model.ts
│ │ ├── game.model.ts
│ │ └── rating.model.ts
│ ├── middleware/
│ │ ├── auth.middleware.ts
│ │ ├── errorHandler.middleware.ts
│ │ ├── validation.middleware.ts
│ │ └── rateLimiter.middleware.ts
│ ├── types/

## │ │ ├── User.ts

## │ │ ├── Game.ts

│ │ └── api.ts
│ ├── utils/
│ │ ├── logger.ts
│ │ ├── validators.ts
│ │ └── helpers.ts

│ ├── websocket/
│ │ ├── gameSocket.ts
│ │ └── notificationSocket.ts
│ ├── database/
│ │ ├── connection.ts
│ │ ├── migrations/

## │ │ │ ├── 001_create_users.sql

## │ │ │ ├── 002_create_games.sql

## │ │ │ └── ...

│ │ └── seeds/
│ ├── config/
│ │ ├── database.ts
│ │ ├── env.ts
│ │ └── constants.ts
│ ├── app.ts (Express app)
│ └── server.ts (Entry point)
├── tests/
│ ├── unit/
│ ├── integration/
│ └── fixtures/
├── package.json
├── tsconfig.json

## ├── .env.example

└── docker-compose.yml
7.3 Dependências de Terceiros (Resumo)

## Frontend

## {

## "react": "^18.0.0",

## "react-dom": "^18.0.0",

## "react-router-dom": "^6.0.0",

## "zustand": "^4.0.0",

## "axios": "^1.0.0",

## "socket.io-client": "^4.0.0",

## "chess.js": "^1.0.0",

## "react-chessboard": "^3.0.0",

## "tailwindcss": "^3.0.0",

## "typescript": "^5.0.0"

## }

## Backend

## {

## "express": "^4.18.0",

## "typescript": "^5.0.0",

## "pg": "^8.0.0",

## "socket.io": "^4.0.0",

## "bcryptjs": "^2.4.0",

## "jsonwebtoken": "^9.0.0",

## "dotenv": "^16.0.0",

## "cors": "^2.8.0",

## "helmet": "^7.0.0",

## "compression": "^1.7.0",

## "stockfish": "^16.0.0"

## }

## FASE 8 — ROADMAP REALISTA

## 8.1 Estimativas

## Considerando:

Você é estudante com outras disciplinas
Trabalha ~10 horas/semana no projeto
Aprende enquanto desenvolve
Incrementa features progressivamente

## 8.2 Timeline Proposta

## Semana 1-2: Setup & Learning (10h)

Objetivo: Ambiente pronto, conceitos entendidos

## Tarefas:

Criar repositório GitHub
Setup ambiente (Node, PostgreSQL, Vite)
Estudar React fundamentals (2h)
Estudar WebSocket basics (1h)
Estudar xadrez + FEN notation (1h)
Criar template React inicial
Criar servidor Express básico
Conectar DB PostgreSQL
Deliverable: Projeto rodando localmente, pode fazer request HTTP

## Semana 3-4: Frontend — Tabuleiro (12h)

Objetivo: Tabuleiro de xadrez funcional

## Tarefas:

Desenhar tabuleiro (CSS)
Renderizar peças
Implementar seleção de peças
Validação de movimentos (front-end)
Mostrar movimentos válidos
Integrar chess.js library
Testes do tabuleiro

Deliverable: Pode selecionar peças e fazer movimentos

## Semana 5-6: Backend — Autenticação (10h)

Objetivo: Sistema de login/registo funcional

## Tarefas:

Design schema User (BD)
Hash password com Bcrypt
Endpoint POST /auth/register
Endpoint POST /auth/login
Gerar JWT tokens
Middleware de autenticação
Testes de auth
Deliverable: Pode registar-se e fazer login
Semana 7-8: Backend — Lógica de Xadrez (14h)
Objetivo: Engine de xadrez no backend

## Tarefas:

Design schema Game (BD)
Copiar lógica de xadrez para backend

## Integrar Stockfish

Endpoint para jogar vs computador
Salvar partidas em BD
Detectar xeque-mate/empate
Testes extensivos
Deliverable: Pode jogar vs computador até fim

## Semana 9-10: Real-time Multiplayer (16h)

Objetivo: Jogar vs outro jogador em tempo real

## Tarefas:

Setup Socket.io no backend
Implementar eventos de jogo
Queue/matchmaking simples
Sincronização em tempo real
Reconexão se desconecta
Testes de sincronização
Deliverable: Pode jogar 1v1 online

## Semana 11-12: Rating System (10h)

Objetivo: Ranking e rating funcional

## Tarefas:

Design schema Rating History (BD)
Implementar cálculo ELO
Endpoint GET /rankings
Mostrar rating pessoal
Histórico de rating (gráfico simples)
Testes do rating
Deliverable: Rating atualiza após cada partida

## Semana 13-14: Amigos & Dashboard (10h)

Objetivo: Social features básico

## Tarefas:

Design schema Friendship (BD)
Add friend endpoint
Friends list page
Dashboard com stats
Histórico de partidas

## Testes

Deliverable: Dashboard com informações pessoais
Semana 15-16: PWA & Performance (12h)
Objetivo: Offline support e otimização

## Tarefas:

## Implementar Service Worker

Cache strategies (Workbox)
IndexedDB para dados locais
Minificação e compressão
Image optimization
Performance testing
Otimizar para 3G
Deliverable: <2s load time, <5MB app
Semana 17-18: Testes & QA (12h)
Objetivo: Qualidade do MVP

## Tarefas:

Unit tests (30%+ coverage)
Integration tests (API)
E2E tests (fluxos principais)
Load testing
Security audit
Browser compatibility
Deliverable: Testes passando, sem bugs críticos

## Semana 19-20: Deploy & Beta (10h)

Objetivo: Em produção, testes com utilizadores reais

## Tarefas:

Setup servidor (Heroku/DigitalOcean)
Configure DNS
HTTPS setup
Database backups
Logging & monitoring
Convidar 50 beta testers
Deliverable: ChessMZ v0.5 em produção

## Semana 21-22: Bug Fixes & Feedback (8h)

Objetivo: Iterar baseado em feedback

## Tarefas:

Recolher feedback
Priorizar bugs
Fixes iterativos
Performance tweaks
Deliverable: MVP estável

## 8.3 Milestone Principais

SemanaMilestoneStatus
2Ambiente pronto⏳
4Tabuleiro funcional⏳
6Login funcional⏳
8Vs Computer funcional⏳
10Multiplayer funcional⏳
12Rating funcional⏳
14Dashboard funcional⏳

16PWA funcional⏳
18Testes OK⏳
20Beta em produção⏳
22MVP v0.5 estável⏳

## 8.4 Ajustes Realistas

Se tiver mais tempo:
Implementar puzzles educativos
Adicionar chat básico
Mais análise de partidas
Dark mode
Se tiver menos tempo:
Remover reconexão automática (simplifica WebSocket)
Rating simples (não ELO cheio)
Dashboard mais simples
Apenas português (sem i18n)

## FASE 9 — SPRINT 1 EXECUTÁVEL

## 9.1 Sprint 1: Setup & Tabuleiro Básico

Duração: 2 semanas
Objetivo: Ter tabuleiro interativo funcional localmente

## 9.1.1 Tarefas Detalhadas

Task 1: Repositório GitHub & Setup
Tempo estimado: 2h

## Descrição:

Criar repo ChessMZ em GitHub
Clona locally
Criar branches (main, dev)
Adicionar .gitignore (Node, IDE)
Criar README básico
Critério de aceitação:
Repo público no GitHub
README com instruções setup
.gitignore configurado
Estrutura de pastas (frontend/, backend/, docs/)

## Task 2: Frontend Setup

Tempo estimado: 2h

## Descrição:

npm create vite@latest frontend -- --template react-ts
Instalar dependências (React Router, TailwindCSS, chess.js)

## Configurar Tailwind

Criar estrutura de pastas (/src/components, /src/pages, etc.)
Critério de aceitação:
Frontend roda em localhost:5173
Tailwind funciona (cor background personalizada)
Estrutura de pastas criada

## Task 3: Backend Setup

Tempo estimado: 2h

## Descrição:

mkdir backend && npm init -y && npm install express typescript
Configurar tsconfig.json
Criar servidor Express básico

Criar estrutura de pastas (/src/routes, /src/controllers, etc.)
Adicionar script de dev (ts-node)
Critério de aceitação:
Backend roda em localhost:3000
GET /api/health retorna { status: "ok" }
TypeScript compilando sem erros
Task 4: Conectar Frontend-Backend
Tempo estimado: 1h

## Descrição:

Frontend faz fetch para GET /api/health
Mostrar resposta na página
Testar com network inspector
Critério de aceitação:
Frontend consegue comunicar com backend
Ver resposta no console
Task 5: Desenhar Tabuleiro (UI)
Tempo estimado: 3h

## Descrição:

Criar componente <ChessBoard />
CSS: Grid 8x8 com cores alternadas
Posicionar 32 peças (brancas + pretas)
Usar Unicode chess symbols (♔, ♕, ♖, etc.)
Responsivo (funciona em mobile)
Critério de aceitação:
Tabuleiro visual correto
Todas 32 peças posicionadas
Funciona em 320px-4K

Sem erros no console

## Task 6: Selecionar Peças & Mostrar Movimentos

Tempo estimado: 2h

## Descrição:

Ao clicar numa peça, highlight-la
Calcular movimentos válidos (usando chess.js)
Mostrar quadrados com cores diferentes para:
Quadrado selecionado (destaque verde)
Movimentos válidos (destaque azul)
Clicar no chão para deselecionar
Critério de aceitação:
Clique seleciona peça
Mostram movimentos válidos (não mostra para peças inimigas)
Deseleccionar funciona

## Task 7: Fazer Movimentos

Tempo estimado: 2h

## Descrição:

Ao clicar num movimento válido, mover peça
Atualizar estado do jogo (tabuleiro)
Mudar turno (branco ↔ preto)
Mostrar notificação de turno
Critério de aceitação:
Movimento valida regras básicas (rainha não pode saltar, etc.)
Turno alterna
Tabuleiro atualiza visualmente
Task 8: Detectar Xeque/Xeque-mate/Empate

Tempo estimado: 2h

## Descrição:

Usar chess.js para detectar estado
Mostrar notificação se xeque
Mostrar modal se xeque-mate
Detectar empates (afogamento, repetição)
Critério de aceitação:
Quando rei em xeque, mostrar aviso
Quando xeque-mate, mostrar modal "Jogo terminado"
Detectar empate por afogamento

## Task 9: Testes Unitários Básicos

Tempo estimado: 2h

## Descrição:

## Setup Jest + React Testing Library

Testes básicos:
Tabuleiro renderiza 64 quadrados
Clique seleciona peça
Movimento atualiza tabuleiro
Critério de aceitação:
Testes criados
Testes passando
Pelo menos 10 testes
9.1.2 Tarefas de Aprendizagem
Enquanto faz Sprint 1, aprenda:

## 1. React Fundamentals

## Components (funcional)

State (useState)

## Props

Re-render e performance
Hooks (useEffect, useCallback)

- TypeScript Basics
  Types e Interfaces
  Union types

## Generics (básico)

- Xadrez & FEN
  Como as peças se movem
  Notação algébrica (e2-e4)
  FEN notation (posição como string)
  chess.js API

## 4. Express Basics

## Routing

Request/Response
Status codes

## Middleware

9.1.3 Recursos de Aprendizagem

## React:

https://react.dev (tutorial oficial)
4h video course

## Chess.js:

https://github.com/jhlywa/chess.js (README)
1h exploração

## Express:

https://expressjs.com/en/starter/basic-routing.html
2h leitura

TypeScript:
https://www.typescriptlang.org/docs/handbook/
3h leitura
9.1.4 Definition of Done (Sprint 1)
Sprint 1 está DONE quando:
✅ Código commitado no GitHub
✅ Tabuleiro renderiza corretamente
✅ Pode selecionar peças e fazer movimentos
✅ Detecta xeque-mate
✅ Testes básicos passam
✅ Frontend + Backend comunicam
✅ README atualizado com instruções
✅ Sem bugs críticos (crashes, perda de dados)

## 9.2 O Que Fazer Após Sprint 1

Após 2 semanas:

- Celebre — Tem um tabuleiro funcional!
- Recolha feedback — Mostre a amigos, peça feedback
- Refatore se necessário — O código é limpo?
- Comece Sprint 2 — Jogo vs Computador (Stockfish)
  APÊNDICE A: Checklist de Verificação
  A.1 Antes de Começar Sprint 1
  Computador com Node.js v18+
  Git configurado (global config)
  GitHub account criada
  Editor de código (VS Code recomendado)

Compreendeu objetivos do ChessMZ
Tem GitHub repo criado
A.2 Documentação por Fase
FaseDocumentoStatus
1Product Discovery✅ Este doc
2Benchmark✅ Este doc
3Requisitos✅ Este doc
4MVP Definition✅ Este doc
5Arquitectura✅ Este doc
6UI/UX✅ Este doc
7Stack Tech✅ Este doc
8Roadmap✅ Este doc
9Sprint 1✅ Este doc

## PRÓXIMOS PASSOS

## Agora Que Tem Este Documento

- Leia tudo — Compreenda visão completa
- Faça perguntas — Se algo não está claro

## 3. Comece Sprint 1 — Setup + Tabuleiro

- Comunique progresso — Sempre mostre o que fez

## 5. Itere — Feedback → Melhorias

## Próximas Conversas Comigo

Após esta análise, as próximas conversas deverão:

- Fase 1 (Setup): "Ajuda-me com setup do frontend"
- Fase 2 (Tabuleiro): "Como desenho o tabuleiro em React?"
- Fase 3 (Xadrez): "Como valido movimentos?"
- Fase 4 (Backend): "Como conecto frontend com backend?"
- ...e assim por diante
  Em cada conversa, eu:
  Explico o conceito
  Mostro exemplo
  Dou tarefa pequena
  Aguardo resultado
  Dou feedback

## Avançamos

Fim da Especificação ChessMZ v1.0
Status: Pronto para Sprint 1
Próximo: Setup do Repositório
Quando: Quando estiver pronto
Como: Diga "Comecemos Sprint 1"
