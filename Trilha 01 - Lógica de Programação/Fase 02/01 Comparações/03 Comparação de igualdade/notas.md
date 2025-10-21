# Comparação de igualdade

Seja bem-vindo! Nesta aula, vamos tratar do seguinte assunto: Comparação de igualdade.

Enquanto o sinal de igual (=) é usado para atribuir um valor, o sinal de igualdade usadao para comparar se um valor é igual a outro se usa `===`.

```js
let idade = 10;
idade = 20; // Isso não é uma comparação. Isso é uma atribuição.
console.log(idade); // 20 (o novo valor da variável 'idade')
```

## Comparação com número

```js
15 === 20; //false, porque 15 e 20 não são iguais.
20 === 20; // true, porque 20 é igual a 20.
5 === 5; // true, porque 5 é igual a 5.
```

## Comparação com variável

```js
let numero = 20;
numero === 20; // true (porque a variável 'numero' contém 20, que é igual a 20)
numero === 10; // false (porque a variável 'numero' contém 20, que não é igual a 10)
```

Comparação com dois sinais de igual pode ser usado mais não é recomendado. Então prefira usa o com três sinais de igualdade.

```js
15 == 20; // comparação com dois sinais de igual (NÃO faça isso!)
15 === 20; // comparação com três sinais de igual (recomendável!)
```

## Comparação com diferença

```js
15 !== 10; // true, porque os dois números NÃO são iguais
5 !== 5; // false, porque os dois números são iguai
```

## Notas

- Usamos um sinal de igual `(=)` para fazer `atribuição de valores`.
- Para fazer `comparação de igualdade`, usamos três sinais de igual `(===)`.
- Confundir a atribuição `(=)` e a comparação de igualdade `(===)` é um erro comum.
- O operador composto por exclamação e dois sinais de igual `(!==)` retorna verdadeiro quando os 2 números fornecidos **NÃO são iguais**.
