# Mercado Eletrônico — Frontend

Projeto com finalidade de atender requisitos do teste técnico https://github.com/mercadoeletronico/frontend-challenge.
Layout inspirado no figma disponibilizado, apenas acrescentado uma tela de boas vindas.

Tecnologias principais: Vue 3 + Vite. Fornece uma estrutura simples de views, componentes reutilizáveis e serviços para comunicação com APIs.

## Sumário

- Visão geral
- Pré-requisitos
- Instalação
- Scripts úteis
- Estrutura do projeto
- Componentes principais
- Services
- Estilos e variáveis
- Testes

## Visão geral

Este projeto é uma aplicação SPA (Single Page Application) construída com Vue 3 e Vite. Inclui roteamento (vue-router) e um conjunto básico de componentes e estilos para acelerar o desenvolvimento.

## Pré-requisitos

- Node.js (recomenda-se v16+)
- npm ou yarn

## Instalação

1. Instale dependências:

```bash
npm install
```

2. Rode em modo desenvolvimento:

```bash
npm run dev
```

3. Build para produção:

```bash
npm run build
```

4. Preview do build:

```bash
npm run preview
```

## Scripts (em `package.json`)

- `dev` — inicia o servidor de desenvolvimento (Vite).
- `build` — gera a build de produção.
- `preview` — serve a build gerada para preview local.

## Estrutura do projeto

`src/`

- `main.js` — ponto de entrada da aplicação; monta o app e registra o router.
- `App.vue` — componente raiz (renderiza `<router-view/>`).
- `router.js` — configuração de rotas da aplicação (Vue Router).
- `style.css` — estilos globais básicos carregados no `main.js`.
- `assets/` — imagens e scss (variáveis e `main.scss`).
  - `assets/styles/variables.scss` — variáveis SCSS (cores, espaçamentos, etc.).
  - `assets/styles/main.scss` — arquivo global injetado via Vite (`additionalData`). Contém reset global (html, body, box-sizing) e estilos compartilhados.
- `components/` — componentes reutilizáveis
  - `BaseButton.vue` — botão genérico com temas e variantes.
  - `Card.vue` — cartão para exibir informações de um pedido/cliente.
- `views/` — páginas/rotas da aplicação
  - `Home.vue` — página inicial com botão para acessar pedidos.
  - `Pedidos.vue` — página de listagem/visão de pedidos.
- `services/` — serviços para lidar com chamadas HTTP e lógica de comunicação
  - `networkServices.js` — utilitário simples para executar `GET` em `/api`.

## Componentes principais

- `BaseButton.vue` — componente de botão com props:

  - `texto` (String) — texto a exibir.
  - `tema` (String) — tema (ex: `primary`, `light`).
  - `preenchimento` (String) — variante (ex: `filled`, `ghost`).
  - `full` (Boolean) — largura 100%.
  - `disabled` (Boolean).

- `Card.vue` — componente para exibir dados de uma entidade (label, nome, contato, etc.). Recebe `dados` como prop.

## Services

- `src/services/networkServices.js` — função `get(endpoint)` que chama `fetch('/api' + endpoint)` e retorna JSON ou lança erro em caso de falha.

Exemplo de uso:

```js
import { get } from "@/services/networkServices";

await get("/orders");
```

> Observação: o serviço já adiciona `/api` como prefixo. Ajuste conforme sua API.

## Estilos

- Variáveis SCSS em `src/assets/styles/variables.scss` injetado automaticamente via `vite.config.js` .
- Recomendação: use `box-sizing: border-box` globalmente (já aplicado) para que `padding` não aumente o tamanho das caixas.

## Testes

Instruções para rodar a suíte de testes unitários com Jest (Vue 3):

1. Instale as dependências de teste (dev):

```bash
npm install -D jest@29 jest-environment-jsdom@29 @vue/test-utils @vue/vue3-jest babel-jest @babel/preset-env
```

2. Rodar todos os testes:

```bash
npm test
```

3. Rodar em modo verboso / isolado (útil para debug):

```bash
npm test -- --runInBand --verbose
```

```

Dicas rápidas

- O projeto usa `@vue/vue3-jest` para transformar arquivos `.vue` e `@vue/test-utils` para montar componentes.
- Se o seu teste importa imagens ou arquivos CSS, há mapeamentos no `jest.config.cjs` para mocks (ex.: `tests/__mocks__/fileMock.js` e `identity-obj-proxy`) para evitar erros de importação.
- Para esperar promises pendentes em testes assíncronos prefira `flush-promises` (pacote `flush-promises`) ou use um util `delay()` e `await nextTick()` para garantir que o DOM foi atualizado antes das asserções.

```
