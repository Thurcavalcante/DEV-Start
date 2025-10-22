function obterMensagemDeVoto(idade) {
  if (idade >= 16) {
    return "Você pode votar";
  }

  if (idade < 16) {
    return "Você não pode votar";
  }
}

console.log(obterMensagemDeVoto(20));
console.log(obterMensagemDeVoto(10));
