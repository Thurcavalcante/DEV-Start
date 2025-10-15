# Parâmetros em funções

Nesta aula, vamos explorar o que são **parâmetros**, e como eles são utilizados em funções. Os parâmetros são essenciais para tornar nossas funções mais flexíveis e reutilizáveis, permitindo que elas recebam dados externos e executem ações específicas com base nesses dados. Ao compreender como trabalhar com parâmetros em funções, você estará capacitado a escrever código mais eficiente e modular, capaz de lidar com uma variedade de situações e entradas.

- Um **parâmetro** é uma variável que uma função recebe.
- A maioria das funções usará essa variável recebida e calculará o resultado com base nela.
- Para **chamar uma função**, você deve começar com o nome dela e então inserir, entre parênteses, o valor que deseja passar como parâmetro.

Uma vez com essa função definida, você poderá chamala com diferentes valores que são chamados de parâmetros.

Se o parâmetro for 4 ele retornará 8, se 3 ele retornará 6 e assim por diante. Isso mostra o benefíscio de criar funções.

```js
function dobro(numero) {
  return numero * 2;
}

dobro(4); // retornará 8
dobro(3); // retornará 6
```

### O que é um parâmetro em funções?

[x] É uma variável que uma função recebe.

[ ] É uma variável para iniciar uma função.
