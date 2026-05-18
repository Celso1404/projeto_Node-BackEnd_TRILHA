# 🚀 API REST - Gestão de Utilizadores (Node.js)

Este é um projeto de backend (API REST) desenvolvido em Node.js, criado como parte da trilha de desenvolvimento FullStack. A aplicação permite realizar operações completas de CRUD (Criar, Ler, Atualizar e Apagar) para gerir um sistema de utilizadores, persistindo os dados de forma local através do NeDB.

## ✨ Funcionalidades

* **CRUD de Utilizadores:** Rotas completas para listar, criar, procurar, atualizar e eliminar utilizadores.
* **Base de Dados Embutida:** Utilização do `NeDB` (semelhante ao MongoDB) para armazenamento local e rápido dos dados, os quais são guardados automaticamente num ficheiro `.db`.
* **Validação de Dados:** Integração com o `express-validator` para garantir que campos obrigatórios, como o Nome e o E-mail (formato válido), são preenchidos corretamente antes de inserir ou atualizar dados na base de dados.
* **Gestão de Erros:** Módulo utilitário centralizado para o tratamento e envio de mensagens de erro consistentes.
* **Organização Modular:** Estrutura limpa e organizada através do `consign`, facilitando a injeção de dependências e a separação entre rotas e utilitários.

## 🛠️ Tecnologias e Pacotes Utilizados

* **Node.js:** Ambiente de execução.
* **Express:** Framework web minimalista para criação das rotas e servidor.
* **NeDB:** Base de dados NoSQL orientada a documentos (embutida localmente).
* **Consign:** Ferramenta para autoload de módulos (rotas, utilitários, etc.) para a aplicação Express.
* **Express Validator:** Middleware para validação das requisições HTTP.
* **Body Parser:** Middleware para interpretar o corpo das requisições (ex: JSON).
* **Nodemon:** Utilitário para reiniciar o servidor automaticamente durante o ambiente de desenvolvimento.

## 📁 Estrutura do Projeto

```text
/
├── index.js                  # Ponto de entrada (Servidor e rota principal)
├── package.json              # Dependências e metadados do projeto
├── users.db                  # Base de dados local gerada pelo NeDB
├── routes/
│   ├── index.js              # Rota principal (Retorna HTML simples)
│   └── users.js              # Lógica das rotas de CRUD (/users)
└── utils/
    ├── error.js              # Utilitário centralizado para retorno de erros
    └── validator.js          # Regras de validação para os dados do utilizador