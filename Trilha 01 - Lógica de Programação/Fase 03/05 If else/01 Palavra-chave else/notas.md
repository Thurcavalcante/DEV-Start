# Palavra-chave else

Exemplo com `if`:

```js
function podeVotar(idade) {
  if (idade >= 16) {
    return "Você tem permissão para votar";
  }
}

// Exemplos de uso
podeVotar(20); // retorna "Você tem permissão para votar"
podeVotar(10); // retorna undefined
```

Exemplo com `if e else`:

```js
function podeVotar(idade) {
  if (idade >= 16) {
    return "Você tem permissão para votar";
  } else {
    return "Você não tem permissão para votar";
  }
}

// Exemplos de uso
podeVotar(20); // retorna "Você tem permissão para votar"
podeVotar(10); // retorna "Você não tem permissão para votar"
```

```js
if (idade >= 16) {
  // condição
} else {
  // condição oposta, ou seja, idade < 16
}
```

## Notas

- O código introduzido pela palavra-chave `else` trata os outros casos que não são atendidos pela condicional `if`.
- Se a condição avaliada pelo **if** for `idade >= 16`, o **else** vai verificar todos os outros casos, ou seja, `idade < 16`.
- O `else` só pode ser usado após uma condicional **if**. Ele não pode ser usado sozinho.
