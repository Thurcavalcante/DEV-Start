# Complete o retorno do else

Complete o código para que a função `obtenhaMensagemVotacao()` retorne `"Você tem permissão para votar"` quando o usuário tiver pelo menos 16 anos, e `"Você não tem permissão para votar", caso contrário.`

Fique de olho no console para conferir o valor de retorno das funções nos exemplos de uso.

Complete o retorno do `else` corretamente.

## Caso de uso

```js
function obtenhaMensagemVotacao(idade) {
  if (idade >= 16) {
    return "Você tem permissão para votar";
  } else {
    // ...
  }
}

// Não modifique as linhas abaixo
console.log(obtenhaMensagemVotacao(20));
console.log(obtenhaMensagemVotacao(10));
```

### Testes

- Retorne a mensagem correta quando NÃO é permitido votar.
