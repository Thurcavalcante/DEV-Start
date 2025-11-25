# Classificação de notas A-F 1

Complete a função `obterLetraDaNota()` de forma que ela retorne a letra correta ("A", "B" ou "F") com base no número da nota.

A regra para as notas é a seguinte:

1. Igual ou maior a 15: nota A.
2. Igual ou maior a 10, e menor que 15: nota B.
3. Menor que 10: nota F.

Nós fornecemos a estrutura da função. Você só precisa preencher as palavras-chave de retorno.

Implemente a funcionalidade solicitada.

## Caso de uso

```js
function obterLetraDaNota(nota) {
  if (nota >= 15) {
    // ...
  } else if (nota >= 10) {
    // ...
  } else {
    // ...
  }
}

// Não modifique as linhas abaixo
console.log(obterLetraDaNota(18));
console.log(obterLetraDaNota(15));
console.log(obterLetraDaNota(13));
console.log(obterLetraDaNota(4));
```

### Testes

- Funciona para a letra A.

- Funciona para a letra B.

- Funciona para a letra F.
