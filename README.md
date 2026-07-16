# Task Manager System

## Descrição

O Task Manager System é um sistema web simples para gerenciamento de tarefas, desenvolvido como atividade da disciplina de Engenharia de Software.

O objetivo é permitir que usuários criem, editem, concluam e removam tarefas utilizando um CRUD básico.

## Objetivos

- Gerenciar tarefas.
- Organizar atividades.
- Demonstrar conceitos de Engenharia de Software.
- Aplicar versionamento com Git e GitHub.
- Utilizar metodologia ágil com Kanban.

## Tecnologias

- Node.js
- Express.js
- JavaScript
- Git
- GitHub
- GitHub Actions

## Funcionalidades

- Criar tarefas
- Listar tarefas
- Editar tarefas
- Concluir tarefas
- Excluir tarefas

## Estrutura

```
task-manager-system
│
├── src
├── tests
├── docs
├── public
├── .github
│   └── workflows
├── README.md
└── package.json
```

## Como executar

```bash
npm install
node src/server.js
```

O servidor será iniciado em:

```
http://localhost:3000
```

## Metodologia

Foi utilizada a metodologia Kanban para organização das atividades através do GitHub Projects.

## Mudança de escopo

Inicialmente o projeto previa apenas um CRUD básico.

Durante o desenvolvimento foi adicionada a funcionalidade de conclusão de tarefas utilizando o método PATCH para melhorar o controle do fluxo das atividades.

## Autor

Arthur Mittels

## Licença

Projeto desenvolvido para fins acadêmicos na disciplina de Engenharia de Software.

## Versão

Versão 1.0

## Integrantes

- Arthur Mittels