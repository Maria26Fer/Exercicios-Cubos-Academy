const express = require('express');
const rotas = require('./rotas');

const app = express();

app.use(rotas)

app.listen(8000, () => {
  console.log('Servidor rodando na porta http://localhost:8000/jogadas 🚀')
});
