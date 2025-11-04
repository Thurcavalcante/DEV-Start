// Escreva as funções aqui
function obtenhaNumeroDeCaracteres(nome) {
  return nome.length;
}

function obtenhaNomeMinusculo(nome) {
  return nome.toLowerCase();
}

function obtenhaNomeMaiusculo(nome) {
  return nome.toUpperCase();
}

console.log(obtenhaNumeroDeCaracteres("Dev Start")); // 9
console.log(obtenhaNomeMinusculo("Dev Start")); // dev start
console.log(obtenhaNomeMaiusculo("Dev Start")); // DEV START
