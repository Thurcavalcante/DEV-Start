# Múltiplos parâmetros

Nesta aula, exploraremos como trabalhar com **funções que aceitam mais de um parâmetro.** Os múltiplos parâmetros são uma característica poderosa da programação que nos permite criar funções flexíveis e versáteis, capazes de lidar com uma variedade de situações e tipos de dados.

## Funções com mais de um parâmetro

```js
// Dois parâmetros, 'a' e 'b'
function soma(a, b) {
  return a + b;
}

// Três parâmetros, 'x', 'y' e 'z'
function soma(x, y, z) {
  return x + y + z;
}
```

## Argumentos de função

```js
function triplo(numero) {
  return numero * 3;
}

triplo(5); // chama a função com argumento 5
triplo(10); // chama a função com argumento 10
```

## Notas

- As funções podem ter vários parâmetros.
- Os parâmetros devem ser separados por vírgula.
- É recomendável inserir um espaço antes da vírgula, para melhorar a **legibilidade**.
- O argumento é o valor passado para a função.
- Dentro da função, o argumento se torna o parâmetro.

### Qual a forma correta de chamar uma função e passar 2 parâmetros?

[ ] soma(a + b)

[x] soma(a, b)
