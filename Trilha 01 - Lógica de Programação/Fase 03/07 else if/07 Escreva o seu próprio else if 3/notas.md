# Escreva o seu próprio else if 3

Complete a função `obterLetraDaNota()` de forma que ela retorne a letra correta ("A", "B" ou "F") com base na nota recebida como parâmetro.

A regra para as notas é a seguinte:

1. Igual ou maior a 15: nota A.
2. Igual ou maior a 10, e menor que 15: nota B.
3. Menor que 10: nota F.

NÃO copie e cole a resposta, escreva você mesmo.

Implemente a situação pedida.

## Caso de uso

```js
function obterLetraDaNota(nota) {
  // ...
}

// Não modifique as linhas abaixo
console.log(obterLetraDaNota(18));
console.log(obterLetraDaNota(15));
console.log(obterLetraDaNota(13));
console.log(obterLetraDaNota(4));
```

### Testes

- Quando a nota é 15 ou superior, a letra dada é "A"

- Quando a nota é 10 ou superior (mas abaixo de 15), a letra dada é "B"

- Quando a nota é inferior a 10, a letra dada é "F"
