# Lumina Oceanfront - Projeto de Landing Page de Luxo

## 1. Propósito do Projeto

O objetivo deste projeto é desenvolver uma landing page de alto padrão para a venda de imóveis de luxo, com o nome fictício "Lumina Oceanfront". A aplicação web foi criada para demonstrar uma experiência de usuário e apelo visual muito superiores aos tradicionais PDFs de apresentação de imóveis, transmitindo uma sensação de exclusividade e sofisticação.

A página serve como um portfólio de desenvolvimento front-end, focando em design moderno, animações fluidas e uma estrutura de componentes bem organizada.

## 2. Tecnologias Utilizadas

A stack tecnológica foi cuidadosamente selecionada para atender aos requisitos de um projeto moderno, performático e visualmente impressionante:

-   **Framework Principal:** **React** com **Vite** para um desenvolvimento rápido e otimizado.
-   **Linguagem:** **TypeScript** para garantir um código mais robusto e escalável.
-   **Estilização:** **Tailwind CSS**, seguindo uma abordagem *utility-first* para criar um design system customizado e responsivo.
-   **Componentes UI:** **shadcn/ui**, utilizado como base para componentes de UI acessíveis e estilizados, como abas, acordeões e carrosséis.
-   **Animações:** **Framer Motion** para criar transições e animações sutis e elegantes, que elevam a percepção de luxo da interface.
-   **Ícones:** **Lucide React** para ícones de traço fino e design minimalista.
-   **Linting:** **ESLint** para manter a qualidade e a consistência do código.

## 3. Estrutura do Projeto

O projeto segue a estrutura de diretórios padrão para aplicações React, organizada para facilitar a manutenção e a escalabilidade:

```
/
├── public/               # Arquivos estáticos (favicon, imagens públicas)
├── src/
│   ├── assets/           # Imagens e outros assets da aplicação
│   ├── components/       # Componentes React reutilizáveis (UI e de Seção)
│   ├── hooks/            # Hooks customizados
│   ├── lib/              # Funções utilitárias (ex: cn para classes)
│   ├── pages/            # Páginas principais da aplicação
│   ├── App.tsx           # Componente raiz da aplicação
│   └── main.tsx          # Ponto de entrada da aplicação React
├── package.json          # Dependências e scripts do projeto
├── tailwind.config.ts    # Configuração do Tailwind CSS
└── vite.config.ts        # Configuração do Vite
```

## 4. Como Executar o Projeto Localmente

Para clonar e executar este projeto em sua máquina local, siga os passos abaixo.

**Pré-requisitos:**
*   Node.js (versão 18 ou superior)
*   npm ou yarn

**Passos:**

1.  **Clone o repositório:**
    ```bash
    git clone https://github.com/SEU_USUARIO/SEU_REPOSITORIO.git
    ```

2.  **Navegue até o diretório do projeto:**
    ```bash
    cd nome-do-repositorio
    ```

3.  **Instale as dependências:**
    ```bash
    npm install
    ```

4.  **Inicie o servidor de desenvolvimento:**
    ```bash
    npm run dev
    ```

    A aplicação estará disponível em `http://localhost:8080` (ou outra porta, se a 8080 estiver em uso).

## 5. Scripts Disponíveis

-   `npm run dev`: Inicia o servidor de desenvolvimento com hot-reload.
-   `npm run build`: Compila a aplicação para produção no diretório `dist/`.
-   `npm run lint`: Executa o ESLint para analisar o código em busca de erros e inconsistências.
-   `npm run preview`: Inicia um servidor local para visualizar a build de produção.

```