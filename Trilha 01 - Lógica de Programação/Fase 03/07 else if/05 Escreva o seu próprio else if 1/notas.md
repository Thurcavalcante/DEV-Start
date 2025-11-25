# Escreva o seu próprio else if 1

Complete a função `obterLetraDaNota()` de forma que ela retorne a letra correta ("A", "B" ou "F") com base na nota recebida por parâmetro.

A regra para as notas é a seguinte:

1. Igual ou maior a 15: nota A.
2. Igual ou maior a 10, e menor que 15: nota B.
3. Menor que 10: nota F.

Note que:

Você já tem uma condição if e else.
Você precisa inserir uma condição else if para lidar com o caso em que a nota é "B".
NÃO copie e cole a resposta, escreva você mesmo.

Implemente a situação pedida.

## Caso de uso

```js
function obterLetraDaNota(nota) {
  if (nota >= 15) {
    return "A";
  } else {
    return "F";
  }
}

// Não modifique as linhas abaixo
console.log(obterLetraDaNota(18));
console.log(obterLetraDaNota(15));
console.log(obterLetraDaNota(13));
console.log(obterLetraDaNota(4));
```

### Testes

- Quando a nota é 15 ou superior, a classificação dada é "A".

- Quando a nota é 10 ou superior (mas abaixo de 15), a classificação dada é "B".

- Quando a nota é inferior a 10, a classificação dada é "F".
