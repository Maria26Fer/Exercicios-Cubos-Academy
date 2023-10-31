const express = require('express');
const rotas = require('./rotas');

const app = express();

//informa que vai receber os dados em formato json()
app.use(express.json());
app.use(rotas);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Servidor iniciado em http://localhost:${PORT} 🚀`);
})