# Agenda Telefônica - NestJS + MongoDB Atlas

Esta é uma aplicação de agenda telefônica desenvolvida com **NestJS**, **MongoDB Atlas** e **Handlebars**. A aplicação segue os princípios de **SOLID**, com modularização para facilitar a manutenção e a escalabilidade do projeto. A aplicação permite criar, listar, atualizar e excluir contatos.

## Estrutura do Projeto

```bash
/src
  /app
    app.module.ts
  /contacts
    contacts.controller.ts   # Controlador da API de contatos
    contacts.service.ts      # Serviço para manipulação de contatos
    contacts.module.ts       # Módulo de contatos
    dto
      create-contato.dto.ts   # DTO para criação de contatos
      update-contato.dto.ts   # DTO para atualização de contatos
    contact.schema.ts        # Schema do MongoDB para contatos
  /views
    index.hbs                # View da página inicial
    contacts
      create.hbs             # Formulário para criação de contato
      list.hbs               # Listagem de contatos com botões de ação
  /public
    styles.css               # Estilos da aplicação
  /db
    db.module.ts             # Módulo para configurar conexão com o banco de dados
  /views
    views.controller.ts      # Controlador das views
    views.module.ts          # Módulo das views

```

## Funcionalidades

- **Listar Contatos**: Exibe a lista de contatos salvos no MongoDB.
- **Criar Contato**: Formulário para adicionar novos contatos.
- **Atualizar Contato**: Edita as informações de um contato existente.
- **Excluir Contato**: Remove um contato da lista.
- **Modularização**: Módulos separados para API e views (MVC).
- **Handlebars (HBS)**: Utilizado como motor de templates para renderizar as views.

## Instalação

### Pré-requisitos

- **Node.js** (versão 16+)
- **MongoDB Atlas**: Cadastre-se no [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) e crie um cluster.
- **Docker** (opcional, se usar o Docker para execução)

### Passos

1. Clone o repositório:

```bash
git clone https://github.com/bodescorp/API_agenda
cd API_agenda
```

2. Instale as dependências:

```bash
yarn install
```

3. Configure as variáveis de ambiente criando um arquivo `.env`:

```bash
# .env
MONGODB_URI=your_mongodb_atlas_connection_string
```

4. Execute o projeto:

```bash
yarn start
```

O projeto estará disponível em `http://localhost:3000`.

## Utilizando a Aplicação

### Listar Contatos

- Acesse `http://localhost:3000/contatos` para visualizar a lista de contatos.

### Criar um Novo Contato

- Clique no botão **Create New Contact** na página de listagem ou acesse diretamente `http://localhost:3000/contatos/create` para preencher o formulário de novo contato.

### Atualizar ou Excluir Contatos

- Na listagem de contatos, clique nos botões **Update** ou **Delete** para editar ou remover um contato.

## Docker (Opcional)

Se preferir, você pode utilizar o **Docker** para rodar a aplicação:

1. Construa a imagem:

```bash
docker build -t agenda-telefonica .
```

2. Execute o container:

```bash
docker run -p 3000:3000 --env-file .env agenda-telefonica
```

## Tecnologias Utilizadas

- **NestJS**: Framework para criação de APIs com Node.js.
- **MongoDB Atlas**: Banco de dados NoSQL em nuvem.
- **Handlebars (HBS)**: Motor de templates para renderizar as views.
- **SOLID**: Princípios de design para uma arquitetura modular e escalável.

## Estrutura Modular

A aplicação foi organizada em módulos distintos para manter a separação de responsabilidades:

- **Contacts Module**: Gerencia a lógica da API de contatos, incluindo operações CRUD.
- **Views Module**: Gerencia a renderização das views com HBS.
- **DB Module**: Configura a conexão com o MongoDB, facilitando a manutenção.

## Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou enviar pull requests.
