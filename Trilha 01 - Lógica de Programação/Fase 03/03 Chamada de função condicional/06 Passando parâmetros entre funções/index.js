function dobro(x) {
  return x * 2;
}

function executar(operacao, x) {
  if (operacao === "dobro") {
    return dobro(x);
  }
}

// Exemplos de uso - não modifique
console.log(executar("dobro", 4)); // deve retornar 8
console.log(executar("dobro", 5)); // deve retornar 10
