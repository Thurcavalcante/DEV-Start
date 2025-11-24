# Escreva seu próprio else - Parte 2

Complete a função de forma que ela retorne `true` quando a idade do usuário for pelo menos 16, e `false` caso contrário.

Chamar esta função retornará um booleano (verdadeiro ou falso) dependendo de o usuário ter permissão para votar ou não.

Implemente a funcionalidade que foi solicitada.

## Caso de uso

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

- `podeVotar()` retorna `false` quando o usuário puder votar.
