# Obter mensagem de votação (sem else)

Complete a função `obterMesagemVotacao()` de forma que ela retorne `"Você está autorizado a votar"` quando a idade do usuário for, pelo menos, 16 anos.

Caso contrário, a função retornará a mensagem `"Você não está autorizado a votar"`.

Tente resolver o desafio sem usar nenhum `else`, mas isso não é obrigatório.

Complete a função conforme foi especificado.

## Caso de uso

```js
function obterMesagemVotacao(idade) {
  if (idade >= 16) {
    return "Você está autorizado a votar";
  }
}

// Não modifique as linhas abaixo
console.log(obterMesagemVotacao(20));
console.log(obterMesagemVotacao(10));
```

### Testes

- Retorne a mensagem correta quando o usuário estiver autorizado a votar.

- Retorne a mensagem correta quando o usuário `não` estiver autorizado a votar.
