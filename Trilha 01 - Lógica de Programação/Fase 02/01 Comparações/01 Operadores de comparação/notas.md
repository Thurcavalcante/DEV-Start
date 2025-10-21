# Operadores de comparação

Seja bem-vindo! Nesta aula, vamos tratar do seguinte assunto: Operadores de comparação.

- A idade do usuário é igual a 18?
- A idade é estritamente maior que 18?
- A idade é maior ou igual a 18?
- A idade é menor que 18?

A resposta para essas perguntas pode ser **sim** ou **não**, então o nosso dado será `booleano`, ou seja, tera `true` ou `false`. Para avaliar as respostas, precisamos usar `operadores de comparação`

## Operadores

### Estritamente maior ( `>` )

Esse operador retorna `true` quando o valor de **a** for `estritamente maior` que o valor de **b**, por exemplo: `a > b`.

```js
10 > 5; // true (porque 10 é maior que 5)
5 > 8; // false (porque 5 é menor que 8)
10 > 10; // false (porque 10 é igual a 10)
```

O operador também pode ser usado com variáveis

```js
let a = 20;
let b = 10;
let resultado = a > b;
console.log(resultado); // true (porque 'a' é estritamente maior que 'b')
```

Também pode ser usado com variáveis e números

```js
let limite = 20;
limite > 30; // false (porque 20 é menor que 30)
```

Agora que entendeu como funciona o `operador estritamente maior`, fica facil de entender como funciona o `operador estritamente meno`

### Estritamente menor ( `<` )

```js
5 < 10; // true (porque 5 é menor que 10)
10 < 10; // false (porque os números são iguais)
5 < 3; // false (porque 5 é maior que 3 )
```

### Maior ou igual ( `>=` )

```js
20 >= 10; // true (porque 20 é maior ou igual a 10)
10 >= 10; // true (porque os dois números são iguais)
5 >= 15; // false (porque 5 é menor que 15)
```

### Menor ou igual ( `<=` )

```js
10 <= 20; // true (porque 10 é menor ou igual a 20)
10 <= 10; // true (porque os dois números são iguais)
15 <= 5; // false (porque 15 é maior que 5)
```

## Notas

- O operador `>` verifica se o número à esquerda é `estritamente maior` que o número a direita.
- O operador `>=` verifica se o número à esqueda é `maior ou igual` que o número à direita.
- O perador `<` verifica se o número à esquerda é `estritamente menor` que o número a direita.
- O operador `<=` verifica se o número à esquerda é `menor ou igual` que o número à direita.
- `a > b` retorna true quando `a` é estritamente `maior` que `b`
- `a < b` retorna true quando `a` é estritamente `menor` que `b`
- O resultado das comparações sempre será um `dado booleano`, com valor igual a `true` ou `false`.
