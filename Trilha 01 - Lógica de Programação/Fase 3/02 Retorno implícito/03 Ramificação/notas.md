# Ramificação

Seja bem-vindo! Nesta aula, vamos tratar do seguinte assunto: Ramificação.

```js
function podeVotar(idade) {
  if (idade >= 16) {
    return true;
  }
}

console.log(podeVotar(30)); // true
console.log(podeVotar(10)); // undefined
```

## Notas

- O conceito de `retorno implícito` também se aplica em funções com ramificação, ou seja, com condicional `if`.
- Se uma das ramificações da função não tiver um **return**, ela retornará um **valor indefinido**.
