const somar = (request, response) => {
  const {num1, num2} = request.query

  if (!isNaN(Number(num1)) && !isNaN(Number(num2))) {
          //o send() não aceita expressoes 
    return response.send(`${Number(num1) + Number(num2)}`);
  }
  return response.send('Números inválidos!⚠️')
}

const subtrair = (request, response) => {
  const {num1, num2} = request.query

  if (!isNaN(Number(num1)) && !isNaN(Number(num2))) {
          //o send() não aceita expressoes 
    return response.send(`${Number(num1) - Number(num2)}`);
  }
  return response.send('Números inválidos!⚠️')
}

const multiplicar = (request, response) => {
  const {num1, num2} = request.query

  if (!isNaN(Number(num1)) && !isNaN(Number(num2))) {
          //o send() não aceita expressoes 
    return response.send(`${Number(num1) * Number(num2)}`);
  }
  return response.send('Números inválidos!⚠️')
}

const dividir = (request, response) => {
  const {num1, num2} = request.query

  if (!isNaN(Number(num1)) && !isNaN(Number(num2))) {
          //o send() não aceita expressoes 
    return response.send(`${Number(num1) / Number(num2)}`);
  }
  return response.send('Números inválidos!⚠️')
}

module.exports = {
  somar,
  subtrair,
  multiplicar,
  dividir
}