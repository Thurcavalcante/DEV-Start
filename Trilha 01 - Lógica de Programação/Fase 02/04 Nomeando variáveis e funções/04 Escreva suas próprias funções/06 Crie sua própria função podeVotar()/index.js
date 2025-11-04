function podeVotar(idade) {
  if (idade >= 18) {
    return true;
  }
}

console.log(podeVotar(48)); // retorna true
console.log(podeVotar(17)); // retorna undefined
console.log(podeVotar(18)); // retorna true
