function obtenhaNumeroDeCaracteres(nome) {
  // retorna o número de caracteres em: nome
  console.log(nome.length);
  return nome.length;
}

function obtenhaNomeMinusculo(nome) {
  // retorna o nome todo em letras minúsculas (exemplo: "ABC" se torna "abc")
  console.log(nome.toLowerCase());
  return nome.toLowerCase();
}

function obtenhaNomeMaiusculo(nome) {
  // retorna o nome todo em letras maiúsculas (exemplo: "abc" se torna "ABC")
  console.log(nome.toUpperCase());
  return nome.toUpperCase();
}

let numeroDeCaracteres = obtenhaNumeroDeCaracteres("Arthur");
let nomeMaiusculo = obtenhaNomeMaiusculo("Arthur");
let nomeMinusculo = obtenhaNomeMinusculo("Arthur");
