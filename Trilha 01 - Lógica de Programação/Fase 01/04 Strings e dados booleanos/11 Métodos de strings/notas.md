# Métodos de strings

Seja bem-vindo! Nesta aula, vamos tratar do seguinte assunto: Métodos de strings.

## Relembrando `length` e `strings`

```js
let nome = "Enzo";
console.log(nome.length); // A palavra tem 4
```

O **length** é uma `propriedade` da **string**, agora, vamos conhecer alguns `metodos` de strings.

A diferença entre as propriedades e os metodos, que que os metodos realizam operações na string.

## Metodo `toUpperCase()`

> Esse metodo nos permite fazer uma copia da string, convertendo cada carateres dessa string para maiusculos.

Exemplo:

```js
let nome = "enzo";
let nomeMaiusculo = nome.toUpperCase();
console.log(nomeMaiusculo); // "ENZO"
console.log(nome); // "enzo" (não foi alterado)
```

## Metodo `toLowerCase()`

```js
let nome "mARIA";
let nomeMinusculo = nome.toLowerCase();

console.log(nomeMinusculo)  // "maria"
console.log(nome)  // "mARIA" ("não foi alterado")
```

## Os metodos usam a regra `CamelCase`, essa regra funciona assim:

A primeira palavra é escrita toda em minúscula e as seguintes palavras ficam com apenas a primeira letra em maiúscula.

```js
nome.toUpperCase(); // certo
nome.touppercase(); // errado

nome.toLowerCase(); // certo
nome.tolowercase(); // errado
```

## Notas

- O método `.toUpperCase` cria uma cópia de uma string, convertendo cada caractere dessa string para maiúscula.
- O método `.toLowerCase` cria uma cópia de uma string, convertendo cada caractere dessa string para minúscula.
- Preste atenção em como esses métodos são chamados: `.toUpperCase()`, com **"U"** e **"C"** maiúsculos, e `.toLowerCase()`, com **"L"** e **"C"** maiúsculos.
- Os parâmetros abrindo e fechando **"()"** no final do método são obrigatórios.

### Está preparado para avançar para o próximo conteúdo?

[x] Sim, estou aprendendo bastante. Vamos em frente!

[ ] Ainda não. Preciso revisar o conteúdo atual.

[ ] Vou avançar, mas não agora. Farei uma pausa pro café :)
