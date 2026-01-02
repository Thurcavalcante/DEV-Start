function obterMensagem(itens) {
  return `Você tem ${itens.length} itens`;
}

// Não modifique as linhas abaixo
console.log(obterMensagem([-5, 12, 15])); // "Você tem 3 itens"
console.log(obterMensagem([13, 10])); // "Você tem 2 itens"
console.log(obterMensagem([])); // "Você tem 0 itens"
