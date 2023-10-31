const produtos = require('../bancodedados/produtos')
const { getStateFromZipcode } = require('utils-playground');

const buscarProdutos = async (request, response) => {
  return response.json(produtos);
}

const detalharProduto = async (request, response) => {
  const { idProduto } = request.params;

  //O find() vai encontrar o elemento e retornar ele
  const produto = produtos.find((produto) => { //vai verificar se o id do produto é passado na rota
      return produto.id === Number(idProduto);
  })

  //Caso o produto não seja encontrado, vai retornar o status 404
  if (!produto) {
      return response.status(404).json({ mensagem: 'Produto não encontrado' });
  }

  //Se encontrar vai retornar o produto
  return response.json(produto);
}

const calcularFrete = async (request, response) => {
  //vai pegar o produto e o cep lá na rota
  const { idProduto, cep } = request.params;

  const produto = produtos.find((produto) => {
      return produto.id === Number(idProduto);
  })

  if (!produto) {
      return response.status(404).json({ mensagem: 'Produto não encontrado' });
  }

  try {
    //retorna uma promise, por isso usa o await para aguardar
  const estado = await getStateFromZipcode(cep);

  let valorFrete = 0;

//Verifica o estado obtido pelo cep na rota
  if (estado === 'SP' || estado === 'RJ') {
      valorFrete = produto.valor * 0.15;

      return response.json({
          produto,
          estado,
          frete: valorFrete
      });
  }

  if (estado === 'BA' || estado === 'SE' || estado === 'AL' || estado === 'PE' || estado === 'PB') {
      valorFrete = produto.valor * 0.1;

      return response.json({
          produto,
          estado,
          frete: valorFrete
      });
  }

  //se não for nenhum dos estados a cima entra nessa condição
  valorFrete = produto.valor * 0.12;

  return response.json({
      produto,
      estado,
      frete: valorFrete
  });

  } catch (erro){
    return response.status(400).json({ mensagem: erro.message })
  }

}

module.exports = {
  buscarProdutos,
  detalharProduto,
  calcularFrete
};