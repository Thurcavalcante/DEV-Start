# Complete o retorno do else 2

Preencha a função de forma que ela retorne `true` quando a idade do usuário for pelo menos 16, e `false` caso contrário.

Chamar esta função retornará um booleano (verdadeiro ou falso) dependendo de o usuário ter permissão para votar ou não.

Fique de olho no console para conferir o valor de retorno das funções nos exemplos de uso.

Complete o retorno do `else` corretamente.

## Caso de uso

```js
function podeVotar(idade) {
  if (idade >= 16) {
    return true;
  } else {
    // ...
  }
}

// Não modifique as linhas abaixo
console.log(podeVotar(25));
console.log(podeVotar(13));
```

### Testes

- `podeVotar()` retorna `false` quando o usuário não pode votar.
