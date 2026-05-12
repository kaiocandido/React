# Gerenciador de Tarefas com React

Aplicação web desenvolvida em React para gerenciamento simples de tarefas. O projeto permite adicionar tarefas, remover tarefas existentes e visualizar os detalhes de cada tarefa.

## Funcionalidades

- Adicionar novas tarefas
- Remover tarefas cadastradas
- Visualizar detalhes da tarefa
- Listar todas as tarefas
- Navegação entre páginas
- Interface simples e responsiva

## Tecnologias utilizadas

- React
- JavaScript
- React Router DOM
- Tailwind CSS
- Lucide React

## Estrutura do projeto


src/
├── components/
│   ├── AddTask.jsx
│   ├── Tasks.jsx
│   └── TaskDetails.jsx
├── App.jsx
├── main.jsx
└── index.css

##Como executar o projeto
1. Clone o repositório
git clone https://github.com/kaiocandido/React
2. Acesse a pasta do projeto
cd seu-repositorio
3. Instale as dependências
npm install
4. Execute a aplicação
npm run dev

Após executar o comando, acesse no navegador:

http://localhost:5173

##Como funciona a aplicação

A aplicação possui uma tela principal onde são exibidas todas as tarefas cadastradas.

Cada tarefa possui um título e uma descrição. O usuário pode adicionar novas tarefas, remover tarefas existentes e acessar uma página com os detalhes completos de cada tarefa.

## Exemplo de objeto de tarefa
{
  id: 1,
  title: "Estudar React",
  description: "Praticar componentes, props, estados e rotas",
  isCompleted: false
}
