const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Sistema de Pesquisa de Satisfação - em construção!');
});

app.listen(3000, () => {
  console.log('Servidor Node.js rodando na porta 3000');
});