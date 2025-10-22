# Sintaxe da condicional if

Seja bem-vindo! Nesta aula, vamos tratar do seguinte assunto: Sintaxe da condicional if.

```js
function podeVotar(idade) {
  if (idade >= 16) {
    return true;
  }
}
```

## Exemplos de erros

```js
// ERRO: Unexpected end of input
if (idade >= 16) {
  // Solução: Chave de fechamento na ultima linha

// Certo
if (idade >= 16) {
  //
}
```

```js
// ERRO: Unexpected identifier
if idade >= 16 {
    // Solução: Parentese na condição
}

// Certo
if (idade >= 16) {
  //
}
```
