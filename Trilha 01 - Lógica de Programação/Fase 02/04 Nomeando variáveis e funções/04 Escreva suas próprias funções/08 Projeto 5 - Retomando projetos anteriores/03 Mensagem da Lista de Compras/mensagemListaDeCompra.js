// Insira a função aqui
function obtenhaMensagem(valorDeCompra) {
  if (valorDeCompra < 0) {
    return "Número inválido";
  }

  if (valorDeCompra === 0) {
    return "Você não tem nenhum item em sua lista de compras";
  }

  if (valorDeCompra === 1) {
    return "Você tem 1 item em sua lista de compras";
  }

  if (valorDeCompra > 1) {
    return "Você tem mais de 1 item em sua lista de compras";
  }
}

console.log(obtenhaMensagem(0)); // "Você não tem nenhum item em sua lista de compras"
console.log(obtenhaMensagem(1)); // "Você tem 1 item em sua lista de compras"
console.log(obtenhaMensagem(5)); // "Você tem mais de 1 item em sua lista de compras"
console.log(obtenhaMensagem(-3)); // "Número inválido"
