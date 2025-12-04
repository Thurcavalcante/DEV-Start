# if else sem else

If else de maneira tradicional:

```js
function podeVotar(idade) {
  if (idade >= 16) {
    return true;
  } else {
    return false;
  }
}
```

Código reescrito removendo o else:

```js
function podeVotar(idade) {
  if (idade >= 16) {
    return true;
  }
  return false;
}
```

O return, sempre encerra a execução da função. Com isso, o restante do código, não é executado.

Qualquer código que estiver após o bloco do if, será ignorado. Por isso o return false, não será executado.

## Notas

- É possível encontrar uma condição `if/else` **sem a palavra-chave else.** Isso funciona por causa da palavra-chave **return**.
- O return só pode ser usado dentro de funções. Portanto, a técnica do if/else sem else só pode ser usada dentro de funções.
- O uso dessa técnica não é obrigatório. Recomenda-se que você use o else explícito, porque ele deixa o código mais fácil de entender.
