function calcularDiferenca(primeiroRetangulo, segundoRetangulo) {
  console.log("Primeiro Retângulo", primeiroRetangulo);
  console.log("Segundo Retângulo", segundoRetangulo);

  let retanguloUm = primeiroRetangulo[0] * primeiroRetangulo[1];
  let retanguloDois = segundoRetangulo[0] * segundoRetangulo[1];

  let calcularDiferenca = retanguloUm - retanguloDois;

  return calcularDiferenca;
}

console.log(calcularDiferenca([10, 20], [5, 10]));
