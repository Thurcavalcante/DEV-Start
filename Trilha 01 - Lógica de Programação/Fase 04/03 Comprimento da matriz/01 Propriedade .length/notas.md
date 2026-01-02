# Propriedade `.length`

A propriedade `.length` de um array em JavaScript retorna o número de elementos presentes nesse array. É uma maneira simples e eficiente de obter o tamanho do array.

```js
let pares = [2, 4, 6, 8, 10];
let impares = [1, 3, 5];

pares.length; // 5
impares.length; // 3
```

É importante notar que `.length` é uma propriedade e não um método, o que significa que você não deve usar parênteses ao acessá-la. Usar parênteses resultará em um erro.

```js
let numeros = [26, 44, 281];

numeros.length; // 3
numeros.length(); // Isso está errado!
```

Além disso, a propriedade `.length` pode ser usada para determinar o tamanho de um array vazio, que sempre retornará 0.

```js
let numeros = [];
numeros.length; // 0
```

## Notas

- O `.length` é uma propriedade que retorna o comprimento (número de itens) da matriz.
- O `.length` não é uma função. Então, o código `.length()` está errado.
- Em matrizes vazias, o `.length` retorna 0.

# Quantos itens? I

Complete a função `quantosItens()` de forma que ela retorne o número de itens do parâmetro `itens`.

Siga a dica a seguir.

## Caso de uso

```js
function quantosItens(itens) {
  //...
}

// Não modifique as linhas abaixo
console.log(quantosItens([-5, 12, 15]));
console.log(quantosItens([13, 10]));
console.log(quantosItens([]));
```

### Testes

- Implemente a função `quantosItens()`.

#### Código

- [quantosItensI.js](./quantosItensI.js)

# Quantos itens? II

Complete a função `obterMensagem()` de forma que ela retorne a seguinte string: `"Você tem X itens"`, onde X é o número de itens do parâmetro `itens`.

Siga a dica a seguir.

## Caso de uso

```js
function obterMensagem(itens) {
  // ...
}

// Não modifique as linhas abaixo
console.log(obterMensagem([-5, 12, 15])); // "Você tem 3 itens"
console.log(obterMensagem([13, 10])); // "Você tem 2 itens"
console.log(obterMensagem([])); // "Você tem 0 itens"
```

## Testes

- Implemente a função `obterMensagem()`.

#### Código

- [quantosItensII.js](./quantosItensII.js)
