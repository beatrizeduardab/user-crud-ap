# CRUD de Usuários - API Backend

## Visão Geral

Este projeto é um desafio que está servindo como um treinamento e prática das minhas habilidades com o backend. Consiste basicamente na criação de um CRUD onde serão listados usuários, estamos também utilizando como banco de dados o MongoDB (NoSQL), e através das rotas no Postman, nossa API permitirá:

- **POST**: Criação de cada usuário.
- **GET**: Leitura dos usuários.
- **PUT**: Atualização dos usuários.
- **DELETE**: Exclusão dos usuários.

## Funcionalidades

As funcionalidades do projeto incluem:

- Criação e identificação de cada usuário dentro de um determinado projeto.
- Atributos como descrição, data de criação, data de atualização e exclusão quando necessário.

## Tecnologias Adicionadas

- **JavaScript**: Linguagem escolhida.
- **Node.js**: Ambiente de execução JavaScript no servidor.
- **Express.js**: Framework para criação de APIs.
- **MongoDB**: Banco de dados NoSQL para armazenar os dados dos usuários.
- **Postman**: Ferramenta para testar a API.

## Começando

## Instalação do MongoDB

### Windows

1. Baixe o instalador do MongoDB no site oficial: [MongoDB Download Center](https://www.mongodb.com/try/download/community)
2. Execute o instalador e siga as instruções na tela.
3. Durante a instalação, marque a opção "Install MongoDB as a Service".
4. Após a instalação, adicione o diretório `bin` do MongoDB ao PATH do sistema:
   - Vá para `Painel de Controle > Sistema e Segurança > Sistema > Configurações avançadas do sistema`.
   - Clique em `Variáveis de Ambiente`.
   - Em `Variáveis do sistema`, encontre a variável `Path` e clique em `Editar`.
   - Adicione o caminho para o diretório `bin` do MongoDB (por exemplo, `C:\Program Files\MongoDB\Server\5.0\bin`).

### Requisitos

- Node.js versão 16.13.0 ou superior.
- npm (gerenciador de pacotes do Node.js).
- MongoDB versão 8.0.4.

### Instalação

1. Clone o repositório:
```bash
   git clone https://github.com/beatrizeduardab/user-crud-api
```

Entre no diretório do projeto:
```bash
cd user-crud-api
```

Instale as dependências:
```bash
npm i
```
Inicie o MongoDB:
```bash
mongod
```

Execute o projeto:
```bash
npm run dev
```