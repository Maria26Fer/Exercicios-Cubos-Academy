const alunos = require("../dados/dados_alunos");

let novoIdentificador = 1;

const listarAlunos = (request, response) => {
  return response.status(200).json(alunos);
};

const obterAluno = (request, response) => {
  const novoIdentificador = Number(request.params.id);

  if (isNaN(novoIdentificador)) {
    return response
      .status(400)
      .json({ mensagem: "O ID deve ser um número válido!" });
  }

  //vai buscar um elemento de um array apartir de uma determinada condição
  const estudante = alunos.find((estudante) => {
    return estudante.id === novoIdentificador;
  });

  if (!estudante) {
    return response
      .status(404)
      .json({ mensagem: "O aluno não foi encontrado!" });
  }
  return response.status(200).json(estudante);
};

const cadastrarAluno = (request, response) => {
  const { nome, sobrenome, idade, curso } = request.body;

  if (!nome || !sobrenome || !idade || !curso) {
    return response
      .status(400)
      .json({
        mensagem: "Algum dos valores não não foi informado corretamente!",
      });
  }

  if (idade < 18) {
    return response
      .status(400)
      .json({
        mensagem:
          "Idade inavalida. O aluno adicionado deve ter 18 anos ou mais!",
      });
  }

  const novoAluno = {
    id: novoIdentificador++,
    nome,
    sobrenome,
    idade,
    curso,
  };

  //Para adicionar um novo aluno uso o push() e encremento novoIdentificadorDoAluno++
  alunos.push(novoAluno);

  return response.status(201).send(novoAluno);
};

const deletarAluno = (request, response) => {
  const novoIdentificador = Number(request.params.id);

  if (isNaN(novoIdentificador)) {
    return response
      .status(400)
      .json({ mensagem: "O ID deve ser um número válido!" });
  }

  //vai buscar um indice de um array apartir de uma determinada condição
  const indiceExcluidoDoestudante = alunos.findIndex(
    (estudante) => estudante.id === novoIdentificador
  );

  if (indiceExcluidoDoestudante < 0) {
    return response
      .status(404)
      .json({ mensagem: "O aluno não foi encontrado!" });
  }

  const alunoDeletado = alunos.slice(indiceExcluidoDoestudante, 1)[0];
  return response.json(alunoDeletado);
};

module.exports = {
  listarAlunos,
  obterAluno,
  cadastrarAluno,
  deletarAluno,
};
