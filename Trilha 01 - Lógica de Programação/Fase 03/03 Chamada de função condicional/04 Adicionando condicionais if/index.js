function dobro() {
  console.log("O número será dobrado");
}

function triplo() {
  console.log("O número será triplicado");
}

function executar(operacao) {
  if (operacao === "dobro") {
    return dobro();
  }

  if (operacao === "triplo") {
    return triplo();
  }
}

// Exemplos de uso - não mexa aqui
executar("dobro"); // deve chamar a função dobro() e exibir "O número será dobrado"
executar("triplo"); // deve chamar a função triplo() e exibir "O número será triplicado"
