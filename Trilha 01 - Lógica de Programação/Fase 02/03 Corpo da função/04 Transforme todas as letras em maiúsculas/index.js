function pegueNome(nome) {
  let pegarNome = nome;
  pegarNome = pegarNome.toUpperCase();
  pegarNome = pegarNome.trim();
  return pegarNome;
}

// Exemplo de uso - não modifique
console.log(pegueNome(" bruno"));
console.log(pegueNome(" alex "));
