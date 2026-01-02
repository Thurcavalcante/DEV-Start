function obterNumeroTotalDeNotas(notas) {
  return notas.length;
}

function obterPrimeiraNota(notas) {
  return notas[0];
}

function obterUltimaNota(notas) {
  return notas[notas.length - 1];
}

console.log(obterNumeroTotalDeNotas([12, 15, 18])); // 3
console.log(obterPrimeiraNota([12, 15, 18])); // 12
console.log(obterUltimaNota([12, 15, 18])); // 18
