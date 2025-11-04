function mostrarMensagemDeVoto(idade) {
  if (idade >= 16) {
    return "Você pode votar";
  }
}

console.log(mostrarMensagemDeVoto(18)); // Output: Você pode votar
console.log(mostrarMensagemDeVoto(15)); // Output: undefined
