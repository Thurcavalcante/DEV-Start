function limpaEmail(email) {
  let limpo = email;
  console.log(limpo); // será igual ao email

  limpo = limpo.toLowerCase();
  console.log(limpo); // estará em minúsculas

  limpo = limpo.trim();
  console.log(limpo); //estará sem os espaços iniciais e finais

  return limpo;
}

console.log(limpaEmail(" ArthurCavalcante@email.com "));
