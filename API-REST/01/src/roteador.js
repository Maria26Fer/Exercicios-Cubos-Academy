const express = require("express");
const alunos = require("./controladores/controlador_alunos");

const rotas = express();

//passando como parametro a função que irá retornar os alunos
rotas.get("/alunos", alunos.listarAlunos);
rotas.get("/alunos/:id", alunos.obterAluno);
rotas.post("/alunos", alunos.cadastrarAluno);
rotas.delete("/alunos/:id", alunos.deletarAluno);

module.exports = rotas;
