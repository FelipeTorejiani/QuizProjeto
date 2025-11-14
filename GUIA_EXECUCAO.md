# Guia de Execução - Desafie o Analista

## Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- **Node.js** (versão 16 ou superior) - [Download](https://nodejs.org/)
- **Visual Studio Code** - [Download](https://code.visualstudio.com/)
- **Git** (opcional, mas recomendado)

## Passo 1: Abrir o Projeto no Visual Studio Code

1. Abra o **Visual Studio Code**
2. Clique em **File** → **Open Folder** (Ctrl+K Ctrl+O no Windows/Linux, Cmd+K Cmd+O no Mac)
3. Navegue até a pasta do projeto `Desafie-o-Analista`
4. Clique em **Select Folder**

## Passo 2: Abrir o Terminal Integrado

No Visual Studio Code:

1. Pressione **Ctrl + `** (backtick) para abrir o terminal integrado
   - Ou vá em **View** → **Terminal**
2. Certifique-se de que o terminal está apontando para a pasta do projeto

## Passo 3: Instalar Dependências

Execute o comando no terminal:

```bash
npm install
```

Isso vai baixar e instalar todas as dependências necessárias (React, Tailwind, Supabase, etc).

**Tempo estimado:** 2-3 minutos (depende da sua conexão)

## Passo 4: Configurar Variáveis de Ambiente

O arquivo `.env` já está configurado com as credenciais do Supabase. Você verá:

```
VITE_SUPABASE_URL=https://dcqeaivsftwonjaudiuk.supabase.co
VITE_SUPABASE_ANON_KEY=...
```

Estas variáveis já estão prontas para uso!

## Passo 5: Executar o Projeto

Execute o comando no terminal:

```bash
npm run dev
```

Você verá uma mensagem similar a:

```
  VITE v5.4.8  ready in 234 ms

  ➜  Local:   http://localhost:5173/
  ➜  press h to show help
```

## Passo 6: Abrir no Navegador

1. Na mensagem do terminal, clique em **http://localhost:5173/**
   - Ou copie e cole a URL no seu navegador
2. O aplicativo "Desafie o Analista" abrirá automaticamente

## Como Usar o Quiz

### Tela Inicial
- Clique em **"Começar Quiz"** para iniciar o jogo

### Durante o Quiz
- Leia a pergunta e as opções de resposta
- Clique em uma das 4 opções
- Veja o feedback imediato com a explicação
- Clique em **"Próxima Pergunta"** para continuar

### Tela de Resultados
- Veja sua pontuação final e nível alcançado
- Digite seu nome para salvar no ranking global
- Clique em **"Salvar"** para registrar sua pontuação
- Veja o TOP 10 dos melhores jogadores
- Clique em **"Jogar Novamente"** para reiniciar

## Dicas Úteis no Visual Studio Code

### Navegar Entre Arquivos
- Use **Ctrl+P** (Windows/Linux) ou **Cmd+P** (Mac) para abrir o quick file picker
- Digite o nome do arquivo para encontrá-lo rapidamente

### Estrutura do Projeto
Na barra lateral esquerda você verá:
```
src/
├── components/          (Componentes da interface)
│   ├── StartScreen.tsx
│   ├── QuestionCard.tsx
│   ├── ProgressBar.tsx
│   └── ResultScreen.tsx
├── data/               (Dados do quiz)
│   └── questions.ts
├── hooks/              (Lógica do quiz)
│   └── useQuiz.ts
├── lib/                (Integração Supabase)
│   └── supabase.ts
├── App.tsx             (Componente principal)
├── main.tsx
└── index.css           (Estilos)
```

### Editar Perguntas
Para adicionar novas perguntas:
1. Abra `src/data/questions.ts`
2. Localize o array `quizQuestions`
3. Adicione um novo objeto seguindo o padrão das outras perguntas
4. Salve (Ctrl+S)
5. O navegador atualizará automaticamente!

### Exemplo de Nova Pergunta
```javascript
{
  id: 21,
  category: 'Sua Categoria',
  question: 'Sua pergunta aqui?',
  options: ['Opção A', 'Opção B', 'Opção C', 'Opção D'],
  correctAnswer: 1, // Índice da resposta correta (0-3)
  explanation: 'Explicação da resposta correta',
  difficulty: 'easy' // ou 'medium' ou 'hard'
}
```

## Parar o Projeto

Para parar o servidor:
1. No terminal, pressione **Ctrl+C**
2. Digite **Y** e pressione **Enter**

## Compilar para Produção

Para criar uma versão otimizada para publicação:

```bash
npm run build
```

Os arquivos compilados estarão em `/dist`

## Troubleshooting

### Erro: "npm: command not found"
- Node.js não está instalado
- Reinstale Node.js do [site oficial](https://nodejs.org/)

### Erro: "VITE_SUPABASE_URL is not defined"
- O arquivo `.env` não foi encontrado
- Certifique-se de que você está na pasta correta do projeto

### Porta 5173 já está em uso
- Feche outro projeto Vite rodando
- Ou use: `npm run dev -- --port 3000`

### Mudanças não aparecem no navegador
- Pressione **Ctrl+F5** (ou Cmd+Shift+R no Mac) para fazer refresh forçado
- Verifique o console do VS Code para erros

## Extensões Recomendadas para VS Code

Para melhor experiência, instale estas extensões:

1. **ES7+ React/Redux/React-Native snippets** - dsznajder.es7-react-js-snippets
2. **Tailwind CSS IntelliSense** - bradlc.vscode-tailwindcss
3. **TypeScript Vue Plugin** - Vue.volar
4. **Prettier - Code formatter** - esbenp.prettier-vscode

Para instalar: Clique na aba **Extensions** (Ctrl+Shift+X) → Procure pelo nome → Clique em Install

## Próximas Etapas

Agora que o projeto está rodando:

1. **Explore o código** - Entenda como cada componente funciona
2. **Customize o design** - Altere cores e fontes em `tailwind.config.js`
3. **Adicione mais perguntas** - Edite `src/data/questions.ts`
4. **Publique** - Faça deploy em plataformas como Vercel ou Netlify

## Suporte

Se tiver dúvidas:
- Verifique o console do navegador (F12 → Console)
- Verifique o terminal do VS Code para mensagens de erro
- Consulte a documentação: [React](https://react.dev) | [Tailwind](https://tailwindcss.com) | [Supabase](https://supabase.com/docs)

---

**Divirta-se jogando e testando seus conhecimentos em TI!** 🎯
