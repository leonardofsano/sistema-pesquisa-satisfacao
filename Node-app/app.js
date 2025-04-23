const express = require('express');
const { Pool } = require('pg'); // Para PostgreSQL
const MongoClient = require('mongodb').MongoClient; // Para MongoDB
require('dotenv').config(); // Carregar variáveis de ambiente

const app = express();
const port = 3000;

// Conectar ao PostgreSQL
const pool = new Pool({
  user: process.env.PG_USER,
  host: process.env.PG_HOST,
  database: process.env.PG_DATABASE,
  password: process.env.PG_PASSWORD,
  port: process.env.PG_PORT,
});

// Conectar ao MongoDB
const mongoUrl = `mongodb://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@localhost:27017`;

MongoClient.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(client => {
    console.log('Conectado ao MongoDB');
    const db = client.db('pesquisa');
    // Você pode adicionar lógica para trabalhar com o MongoDB aqui
  })
  .catch(error => console.error('Erro ao conectar ao MongoDB:', error));

// Rota simples
app.get('/', (req, res) => {
  res.send('Bem-vindo ao Sistema de Pesquisa de Satisfação!');
});

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});