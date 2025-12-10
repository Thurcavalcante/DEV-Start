# Por que precisamos de matrizes?

Cálculo de média

```js
let nota1 = 8;
let nota2 = 6;
let soma = nota1 + nota2; // 14
let media = soma / 2;
console.log(media); // 7
```

Cálculo de média em uma função

```js
function calculaNotaMdia(nota1, nota2) {
  let soma = nota1 + nota2;
  let media = soma / 2;
  return media;
}

// Exemplos de uso
calculaNotaMedia(8, 6); // 7
calculaNotaMedia(7, 5); // 6
```

Forma trabalhosa com muitas notas

```js
// NÃO faça isso
let nota1 = 8;
let nota2 = 6;
let nota3 = 9;
let nota4 = 5;
let nota5 = 7;

// Faça isso
let notas = [8, 6, 9, 5, 7];
```

## Notas

- As matrizes são uma estrutura de dados.
- Uma matriz é uma lista de valores.
- Em vez de definir cinco variáveis chamadas **nota1, nota2, etc...** Você pode definir uma variável chamada `notas`, que é uma matriz contendo esses números.
- O funcionamento da matriz é semelhante ao de uma planilha no excel ou no google documentos.
