# Reatribuindo valor à variável

Seja bem-vindo! Nesta aula, vamos tratar do seguinte assunto: Reatribuindo valor à variável.

```js
function limpaEmail(email) {
  let limpo = email;
  limpo = limpo.toLowerCase();
  limpo = limpo.trim();
  return limpo;
}
```

Isso está ERRADO

```js
function limpaEmail(email) {
  let limpo = email;
  limpo.toLowerCase();
  limpo.trim();
  return limpo;
}
```

Exemplo com **console.log();** para ver o resultado

```js
function limpaEmail(email) {
  let limpo = email;
  console.log(limpo); // será igual ao email

  limpo = limpo.toLowerCase();
  console.log(limpo); // estará em minúsculas

  limpo = limpo.trim();
  console.log(limpo); //estará sem os espaços iniciais e finais

  return limpo;
}
```

## Notas

- Os métodos `trim()`, `toLowerCase` e `toUpperCase` criam novas cópias da variável. Eles não alteram a variável original.
- Para alterar a variável, você deve reatribuir essa variável a ela mesma com uma chamada de função. Por exemplo, `limpo = limpo.trim();` vai alterar o valor da variável, removendo os espaços iniciais e finais que houver dentro dela.
