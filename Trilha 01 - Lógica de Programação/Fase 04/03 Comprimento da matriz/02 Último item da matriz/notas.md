# Último item da matriz

tabela de conteúdos
exibe uma tabela 3x3

| matriz[...] (itens)            | matriz.length (comprimento) | matriz.length - 1 (índice do último item) |
| ------------------------------ | --------------------------- | ----------------------------------------- |
| [6, 3]                         | 2                           | 2 - 1 = 1                                 |
| [2, 8, 4, 3, 1]                | 5                           | 5 - 1 = 4                                 |
| [5, 1, 9, 0, 2, 3, 2, 8, 4, 7] | 10                          | 10 - 1 = 9                                |

Para acessar o último item de uma matriz, você pode usar a propriedade `length` da matriz para obter seu comprimento e subtrair 1 para obter o índice do último item.

```js
let matriz = [10, 20, 30];

matriz[matriz.length - 1]; // 30 (último item da matriz)
```

```js
let numeros = [10, 50, 20, 40, 30];

// Melhor solução
let ultimoItem = numeros[numeros.length - 1];

//  Hardicode 1 (não faça isso)
let ultimoItem = numeros[4];

// Hardicode 2 (não faça isso)
let ultimoItem = 30;
```

```js
let numeros = [10, 50, 20, 40, 30];

let ultimoItem = numeros[numeros.length - 1]; // 30

// Isso está errado
let ultimoItem = numeros[numeros.length]; // undefined
```

## Notas

- Para encontrar a posição (índice) do último item de uma matriz, use a seguinte espressão: `matriz.length - 1`.
- Para acessar o último item de uma matriz, você deve escrever: `matriz[matriz.length - 1]`.

# Última temperatura

Complete a função `obterMensagemDaUltimaTemperatura()` de forma que ela retorne a seguinte string: `"A última temperatura está na posição X"`, onde X é o número que representa a posição do último item da matriz de temperaturas.

Por exemplo, para uma matriz de 4 itens, a função deve retornar: `"A última temperatura está na posição 3"`.

Siga a dica a seguir.

## Caso de uso

```js
function obterMensagemDaUltimaTemperatura(temperaturas) {
  // ..
}

// Não modifique as linhas abaixo
console.log(obterMensagemDaUltimaTemperatura([-5, 12, 15])); // "A última temperatura está na posição 2"
console.log(obterMensagemDaUltimaTemperatura([13, 10])); // "A última temperatura está na posição 1"
```

### Testes

- Implemente a função `obterMensagemDaUltimaTemperatura()`.

#### Código

- [ultimaTemperatura.js](./ultimaTemperatura.js)

# Obter última nota

Complete a função `obterUltimaNota()` de forma que ela retorne a última nota da matriz de notas.

Siga a dica a seguir.

## Caso de uso

```js
function obterUltimaNota(notas) {
  // ..
  r;
}

// Não modifique as linhas abaixo
console.log(obterUltimaNota([12, 15, 18])); // 18
console.log(obterUltimaNota([10, 20])); // 20
console.log(obterUltimaNota([8, 13, 20, 3, 14, 5])); // 5
```

### Testes

- Implemente a função `obterUltimaNota()`.

#### Código

- [obterUltimaNota.js](./obterUltimaNota.js)
