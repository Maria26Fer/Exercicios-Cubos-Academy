const express = require("express");
const verificarSenha = require("./intermediarios");
const rotas = require("./roteador");

const app = express();

app.use(express.json()); //só irá aceitar dados no formato json
app.use(verificarSenha);
app.use(rotas); //Chama todas as rotas

const porta = 3000;

app.listen(porta, () => {
  console.log(`Servidor iniciado em http://localhost:${porta} 🚀`);
});
