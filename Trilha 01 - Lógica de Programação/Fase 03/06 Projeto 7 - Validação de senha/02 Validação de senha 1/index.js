function senhaEValida(senha) {
  console.log(senha);
  if (senha.length >= 10) {
    return true;
  } else {
    return false;
  }
}

console.log(senhaEValida("Senh4@DoJo4o"));
console.log(senhaEValida("Senh4@DoJ"));
