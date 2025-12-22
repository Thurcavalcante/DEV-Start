# Matriz como parâmetro de função II

```js
function obterPrimeiroItem(itens) {
  return itens[0];
}

obterPrimeiroItem(true); //Está ERRADO
```

Forma errada de acessar um array

```js
let notas = [10, 5, 7];
notas[3]; // underfined
```

Concatenação de `Strings`

```js
function obterNomeCompleto(nomes) {
  return nomes[0] + " " + nomes[1];
}

// Exemplo de uso
obterNomeCompleto(["Ana", "Costa"]); // Ana Costa
obterNomeCompleto(["Enzo", "Moura"]); // Enzo Moura
```

Interpolação de `Strings`

```js
function obterNomeCompleto(nomes) {
  return `${nomes[0]} ${nomes[1]}`;
}

// Exemplo de uso
obterNomeCompleto(["Ana", "Costa"]); // Ana Costa
obterNomeCompleto(["Enzo", "Moura"]); // Enzo Moura
```

## Notas

- Se você tentar acessar um item que não existe dentro da matriz, você obterá um dado do tipo `underfined`.
- Para calcular índice do último item de uma matriz, basta subtrair 1 da quantidade total de itens. Por exemplo, se a matriz possui 10 itens, o índice do último item será 9.

# Obter nome completo

Complete a função `obterNomeCompleto` de forma que ela retorne o nome completo da pessoa.

Esse nome completo deverá ser composto pelos seguintes elementos, nesta ordem:

1. O primeiro nome, que é o primeiro item da matriz recebida como parâmetro.
2. Um caractere de espaço.
3. O sobrenome, que é o segundo item da matriz recebida como parâmetro.

Sinta-se livre para resolver o exercício usando a técnica que preferir.

Siga a dica a seguir.

## Caso de uso

```js
function obterNomeCompleto(nomes) {
  // ...
}

// Não modifique as linhas abaixo
console.log(obterNomeCompleto(["Samira", "Diniz"]));
console.log(obterNomeCompleto(["Alexandre", "Bessa"]));
```

### Testes

- Implemente a função `obterNomeCompleto` conforme especificado.

#### Código

- [obterNomeCompleto.js](./obterNomeCompleto.js)

# Onde está a loja?

Complete a função `localizacaoDaLoja()` de forma que ela retorne a seguinte string:

`"A loja está localizada em LAT, LON"`.

Detalhes:

- O parâmetro coordenadas é uma matriz (array) contendo dois valores:

- O primeiro item corresponde à latitude (LAT).

- O segundo item corresponde à longitude (LON).

Requisitos:

- Substitua LAT pelo valor presente no primeiro item da matriz coordenadas.

- Substitua LON pelo valor presente no segundo item da matriz coordenadas.

## Caso de uso

```js
function localizacaoDaLoja(coordenadas) {
  // ...
}

// Não modifique as linhas abaixo
console.log(localizacaoDaLoja([5.123, 2.374]));
console.log(localizacaoDaLoja([-2.207, 9.319]));
```

### Testes

- Implemente a função `localizacaoDaLoja()`.

#### Código

- [ondeEstaLojaI.js](./ondeEstaLojaI.js)

# Onde está a loja? II

Complete a função `localizacaoDaLoja()` de forma que ela retorne a string:

`"NOME localiza-se na LAT, LON"`

Nessa string, devem acontecer as seguintes substituições:

- `NOME` deve receber o nome da loja com o respectivo artigo (é o primeiro parâmetro da função).
- `LAT` deve receber o primeiro item da matriz de coordenadas (essa matriz é o segundo parâmetro da função).
- `LON` deve receber o segundo item da matriz de coordenadas.

Siga a dica a seguir.

## Caso de uso

```js
function localizacaoDaLoja(loja, coordenadas) {
  // ...
}

// Não modifique as linhas abaixo
console.log(localizacaoDaLoja("O supermercado", [5.123, 2.374]));
console.log(localizacaoDaLoja("A academia", [-2.207, 9.319]));
```

### Testes

- Implemente a função `localizacaoDaLoja()`.

#### Código

- [ondeEstaLojaII.js](./ondeEstaLojaII.js)
