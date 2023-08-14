const express = require('express')

//Depos de exportar as funções no arquivo calculadora
//irei chamar cada uma das funções no meu arquivo roteador
//usando a desestruturação pois exportei em forma de objeto
const { somar, subtrair, multiplicar, dividir } = require('./controladores/calculadora')

const rotas = express()

rotas.get('/somar', somar)
rotas.get('/subtrair', subtrair)
rotas.get('/multiplicar', multiplicar)
rotas.get('/dividir', dividir)


//Permitirá o uso de funcionalidades nesse arquivo
module.exports = rotas