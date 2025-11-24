# Escreva seu próprio else - Parte 1

Complete a função para que ela retorne `"Você tem permissão para votar"` quando o usuário tiver pelo menos 16 anos, e `"Você não tem permissão para votar"`, caso contrário.

Implemente a situação pedida.

## Caso de uso

```js
function obtenhaMensagemVotacao(idade) {
  if (idade >= 16) {
    return "Você tem permissão para votar";
  }
}

// Não modifique as linhas abaixo
console.log(obtenhaMensagemVotacao(20));
console.log(obtenhaMensagemVotacao(10));
```

### Testes

- Retorne a mensagem correta quando `não` é permitido votar.
