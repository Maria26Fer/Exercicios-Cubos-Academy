const verificarSenha = (request, response, next) => {
  const { senha } = request.query;

  if (senha !== 'cubos123') {
    return response.status(401).json({mensagem: 'Senha invalida!'});
  }
  next()
};

module.exports = verificarSenha;