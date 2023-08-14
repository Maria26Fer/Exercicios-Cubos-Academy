const jogadores = ["José", "Maria", "João", "Marcos", "Fernanda"];
let proximaPosicao = 0;

const jogadaDaVez = (request, response) => {
  if (proximaPosicao >= jogadores.length) {
    proximaPosicao = 0;
  };
  let proximoJogador = jogadores[proximaPosicao]
  proximaPosicao++;

  const mensagem = `É a vez de ${proximoJogador} jogar!`

  response.send(mensagem)
};

const removerJogadores = (request, response) => {
 const posicaoDoJogador = Number(request.query.indice);
 const mensagem = `Não foi encontrado um jogador na ${posicaoDoJogador} posição.`
  //Verificando se a posição foi informada na url
 if (posicaoDoJogador >= jogadores.length) {
  return response.send(mensagem)
 };
 //a partir da posição informada remova um jogador
 jogadores.splice(posicaoDoJogador, 1)

 response.send(jogadores)
};

const adicionarJogadores = (request, response) => {
  //Vou pegar o nome do jogador
  let nomeJogador = request.query.nome;
  //Vou pegar o indice caso seja passado
  const posicaoDoJogador = Number(request.query.indice);
  //Vai deixar apenas a primeira letra do nome em letra MAIUSCULA
  //usando o slice(1), vai deixar as demais letras em minusculo, pois está 
  //contando a partir do segundo caractere
  nomeJogador = nomeJogador[0].toUpperCase() + nomeJogador.substr(1).toLowerCase()

  //Verificar se a posicaoDoJogador é um Number
  //isNaN = não é um número
  if (isNaN(posicaoDoJogador)) {
    jogadores.push(nomeJogador)
    return response.send(jogadores)
  }
  if (posicaoDoJogador >= jogadores.length) {
    return response.send(`O índice informado ${posicaoDoJogador} não existe no array. Novo jogador não adicionado.`)
  }

  jogadores.splice(posicaoDoJogador, 0, nomeJogador);
  return response.send(jogadores)
}

 module.exports = {
  jogadaDaVez,
  removerJogadores,
  adicionarJogadores
 }