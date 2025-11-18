# Projeto 6 - Dobro, triplo e calculadora

Seja bem-vindo! Neste vídeo, vamos tratar do seguinte assunto: Projeto 6: Dobro, triplo e calculadora.

## Exemplo de uso

```js
function executar(operacao, x, y) {
  // exemplo de como passar x e y para a função soma

  return soma(x, y);
}
```

## Parte 1: Calculadora do dobro ou triplo

Complete a função `executar()` de forma que seja capaz de dobrar e triplicar o parâmetro `x` que ela recebe, e retornar esse valor.

Dica: tente fazer funcionar para o dobro primeiro. Certifique-se de que ele funciona, antes de passar para o triplo.

Implemente as duas situações acima.

## Caso de uso

```js
function dobro(x) {
  return x * 2;
}

function triplo(x) {
  return x * 3;
}

function executar(operacao, x) {
  console.log(operacao);
  console.log(x);
  // Escreva seu código abaixo
}

// Exemplos de uso
executar("dobro", 5);
executar("triplo", 8);
```

### Testes

- Implemente a operação dobro dentro da função executar().
- Implemente a operação triplo dentro da função executar().

## Parte 2: Operações básicas da calculadora

Complete este projeto de calculadora escrevendo o código dentro da função `executa()`.

Implemente as quatro operações (somar, multiplicar, subtrair e dividir) dentro da função `executa()`.

## Caso de uso

```js
function soma(a, b) {
  return a + b;
}

function multiplica(a, b) {
  return a * b;
}

function subtrai(a, b) {
  return a - b;
}

function divide(a, b) {
  return a / b;
}

function executa(operacao, x, y) {
  console.log(operacao);
  console.log(x, y);
  // Escreva seu código abaixo
}

// Não modifique a linha abaixo
console.log(executa("soma", 10, 20));
```

### Testes

- Implemente a operação soma.

- Implemente a operação multiplica.

- Implemente a operação subtrai.

- Implemente a operação divide.
