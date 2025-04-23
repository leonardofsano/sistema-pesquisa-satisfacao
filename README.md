# Sistema de Pesquisa de Satisfação - Ambiente Docker

Este projeto configura um ambiente de desenvolvimento completo utilizando Docker para a construção de uma aplicação web de pesquisa de satisfação de alunos.

## Componentes

- **PostgreSQL**: Banco de dados relacional para dados estruturados.
- **MongoDB**: Banco NoSQL para dados flexíveis.
- **Node.js (v22)**: Ambiente de execução da aplicação web.

## Como rodar

1. Clone o repositório:
   ```bash
   git clone https://github.com/leonardofsano/sistema-pesquisa-satisfacao.git
   cd sistema-pesquisa-satisfacao

   - Acessando os serviços:

Esse tópico explica como acessar os serviços que a aplicação oferece, ou seja, o **Node.js**, o **PostgreSQL** e o **MongoDB**.

## Execute os containers com Docker Compose:
   ```bash
   docker-compose up --build 

## Acesse os serviços: 

   - **Aplicação Node.js:**  
     Acesse a aplicação web de pesquisa de satisfação em [http://localhost:3000](http://localhost:3000).

   - **PostgreSQL:**  
     Você pode acessar o banco de dados PostgreSQL com as seguintes credenciais:
     - Host: `localhost`
     - Porta: `5432`
     - Usuário: `devuser`
     - Senha: `devpassword`
     - Banco: `pesquisa`

   - **MongoDB:**  
     Você pode acessar o banco de dados MongoDB com as seguintes credenciais:
     - Host: `localhost`
     - Porta: `27017`
     - Usuário: `devuser`
     - Senha: `devpassword`