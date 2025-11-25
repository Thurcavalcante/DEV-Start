function senhaEValida(senha) {
  let senhaSemEspacos = senha.trim();
  console.log(senha.trim());

  if (senhaSemEspacos.length >= 10) {
    return true;
  } else {
    return false;
  }
}

console.log(senhaEValida(" Senh4@DoJo4o ")); // retorna true, pois essa senha é válida.
console.log(senhaEValida(" Senh4@DoJ ")); // retorna false, pois essa senha não é válida.
