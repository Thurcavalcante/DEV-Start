function reaisParaCentavos(reais) {
  return reais * 100;
}

// Exemplos de uso
console.log(reaisParaCentavos(1)); // 100
console.log(reaisParaCentavos(5)); // 500

function reaisParaCentavosImposto(reais) {
  return reais * 100 + 200;
}

// Exemplos de uso
console.log(reaisParaCentavosImposto(1)); // 300
console.log(reaisParaCentavosImposto(5)); // 700

function precoEmReais(reais) {
  let preco = reais * 100;
  preco = preco + 200;
  return preco;
}

console.log(precoEmReais(1)); // 300
