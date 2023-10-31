const express = require("express");
const knex = require("./conexao");

const app = express();

app.use(express.json());

app.get("/", async (req, res) => {
  const sindy ={
    nome: 'Sindy',
    email: 'sindy@gmail',
    telefone: "(00) 0000-0000"
  }
  const fran={
    nome: 'Fran Dias',
    email: 'fran@gmail',
    telefone: "(00) 0000-0000"
  }
  //Retorna o ID e NOME
  //const agenda = await knex('agenda').insert(maria).returning('id', 'nome');

  //Ao inserir esses registros retorne TODOS os campos
  const agenda = await knex('agenda').insert([sindy, fran]).returning('*');
  return res.json(agenda)
})

app.listen(3000)