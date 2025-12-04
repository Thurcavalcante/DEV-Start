# Atalho booleano para if/else

Com `if/else`:

```js
function podeVotar(idade) {
  if (idade >= 16) {
    return true;
  } else {
    return false;
  }
}
```

Com `atalho booleano`:

```js
function podeVotar(idade) {
  return idade >= 16;
}

podeVotar(20); // retorna true
podeVotar(5); // retorna false
```

## Notas

- Se o resultado da expressão for `booleano` (verdadeiro ou falso), você pode substituir o if/else por um atalho.
- Se o resultado da expressão for uma string ou um número, o atalho não funcionará. Nesse caso, use if/else.
