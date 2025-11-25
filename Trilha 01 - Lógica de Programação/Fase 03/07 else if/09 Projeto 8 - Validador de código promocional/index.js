function eCodigoPromocionalValido(codigo) {
  let codigoSemEspacos = codigo.trim();
  console.log(codigoSemEspacos);

  if (codigoSemEspacos.length >= 5 && codigoSemEspacos.length <= 10) {
    return true;
  } else {
    return false;
  }
}

console.log(eCodigoPromocionalValido(" 5678910 "));
console.log(eCodigoPromocionalValido(" 12345"));
console.log(eCodigoPromocionalValido(" 678 "));
