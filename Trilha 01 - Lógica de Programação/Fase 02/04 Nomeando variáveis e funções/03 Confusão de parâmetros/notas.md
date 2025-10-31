# Confusão de parâmetros

Seja bem-vindo! Nesta aula, vamos tratar do seguinte assunto: Confusão de parâmetros.

## Parâmetros de funções

```js
function dobro(numero) {
  return numero * 2;
}

dobro(10); // retorna 20
dobro(30); // retorna 60
```

Escopo de variável

```js
function dobro(numero) {
  return numero * 2;
}

// Cria uma variável 'nota'
let nota = 10;

// Passa a variável para a função 'dobro()'
dobro(nota); // retorna 20 (porque a nota é 10)
```

Variável com o mesmo nome do parâmetro

```js
function dobro(numero) {
  return numero * 2;
}

let numero = 10;

dobro(numero); // retorna 20
```

```js
function dobro(numero) {
  return numero * 2;
}

let numero = 10;
double(numero); // retorna 20

numero = 50;
dobro(numero); // retorna 100
```

## Notas

- O `parâmetro` está disponível apenas dentro da função.
- Pode ser confuso quando o nome de uma variável é igual ao do parâmetro da função, mas lembre-se de que eles `não são a mesma coisa`.
- Por enquanto, é recomendável que você use `nomes diferentes` ao criar variáveis e parâmetros, para evitar confunsão.
