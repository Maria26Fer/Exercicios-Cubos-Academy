const express = require('express');
const { jogadaDaVez, removerJogadores, adicionarJogadores } = require('./controladores/controladores_rodadas')

const rotas = express();

rotas.get('/jogadas', jogadaDaVez);
rotas.get('/remover/', removerJogadores);
rotas.get('/adicionar', adicionarJogadores);

module.exports = rotas