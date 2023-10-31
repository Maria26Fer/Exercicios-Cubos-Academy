const express = require("express");
const knex = require("./conexao");

const app = express();

app.use(express.json());

app.get("/", async (req, res) => {
  /*
  1- Primeira questão
  const quantidadeMedicamentos = await knex('farmacia').count()
  return res.json(quantidadeMedicamentos)
  */
  /*
  2- Segunda questão
  const usuarioMaisNovo = await knex('usuarios').min('idade').debug()
  return res.json(usuarioMaisNovo)
  */
  /*
 3- Terceira questão
 const somaCategoria = await knex('farmacia')//Pegando os campos da tabela informada
.select('categoria')//seleciono os campos da coluna categoria
.sum('estoque')//somo o estoque de cada categoria que será encontrada
.whereNotNull('categoria')//Passando a condição que só somara os campos que não forem nulos
.groupBy('categoria')//e agrupando os campos da coluna categoria que atenderam essa condição
.debug()//Por fim passo um debug para saber o que foi retornado
  return res.json(somaCategoria)
 */
  /*
-4 Quarta questão
const categoriaNull = await knex('farmacia').whereNull('categoria').count();
  return res.json(categoriaNull)
*/
  /*
-5 Quinta questão
const quantidadeCategoria = await knex('farmacia')//Pegando os campos da tabela informada
.select('categoria')//seleciono os campos da coluna categoria
.count()//retornando a quantidade de registros de cada categoria que será encontrada
.whereNotNull('categoria')//Passando a condição que só somara os campos que não forem nulos
.groupBy('categoria')//e agrupando os campos da coluna categoria que atenderam essa condição
.debug()//Por fim passo um debug para saber o que foi retornado
  return res.json(quantidadeCategoria)
*/
  /*
-6 Sexta questão
const quantidadeDeUsuario = await knex('usuarios')//Informando a tabela que desejo consultar
.select('idade')//selecionando apenas o campo idade
.count()//pegando todas as quantidades que se encaixarem na condição abaixo
.where('idade', '>=', 18)//estabelecendo a condição: o campo idade tem que ser maior ou igual a 18
.groupBy('idade')//Agrupando apenas as idades que atenderem a essa condição
.debug()//retornando no console
  return res.json(quantidadeDeUsuario)
*/
});

app.listen(3000);
