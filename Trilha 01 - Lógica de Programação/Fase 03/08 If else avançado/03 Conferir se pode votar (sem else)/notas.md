# Conferir se pode votar (sem else)

Complete a função de forma que ela retorne `true` quando a idade do usuário for pelo menos 16 anos, e `false` caso contrário.

Tente resolver o desafio sem usar `else`, mas isso não é obrigatório.

Complete a função conforme solicitado.

## caso de uso

```js
function podeVotar(idade) {
  if (idade >= 16) {
    return true;
  }
}

// Não modifique as linhas abaixo
console.log(podeVotar(25));
console.log(podeVotar(13));
```

### Testes

- `podeVotar()` deve retornar `true` quando o usuário pode votar.

`podeVotar()` deve retornar `false` quando o usuário não pode votar.
