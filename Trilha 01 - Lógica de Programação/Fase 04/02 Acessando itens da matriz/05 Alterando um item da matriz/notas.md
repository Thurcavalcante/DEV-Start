# Alterando um item da matriz

```js
let notas = [5, 3, 8];
notas[0]; // retorna 5
notas[0] = 6;
console.log(notas); // [6,3,8]
```

```js
function corrigeNotas(notas) {
  notas[0] = 6;
  return notas;
}

// Exemplo de uso
corrigeNotas([5, 3, 8]); // [6,3,8]
```

```js
function corrigeNotas(notas) {
  return (notas[0] = 6);
}

// Exemplo de uso
corrigeNotas([5, 3, 8]); // 6
```

## Notas

- Para localizar e alterar um item da matriz, siga esses dois passos:

- 1. Acesse o item desejado, usando o nome da matriz e o índice do item ntre colchetes: `matriz[índice]`
- 2. Atribua o novo valor usando o sinal de igual: `matriz[índice] = valor`

- Lembre-se de retornar a matriz interna no final da função, em vez de retornar somente o item que foi alterado.

# Corrigir primeiro número

Complete a função `corrigirPrimeiroNumero()` de forma que ela mude o primeiro item da matriz recebida por parâmetro para `2`.

A função deve, além de modificar esse primeiro item, retornar a matriz já modificada.

Siga a dica a seguir.

## Caso de uso

```js
function corrigirPrimeiroNumero(numeros) {
  // ...
}

// Não modifique as linhas abaixo
console.log(corrigirPrimeiroNumero([1, 4, 6, 8]));
console.log(corrigirPrimeiroNumero([1, 10, 13, 19]));
```

### Testes

- Implemente a função `corrigirPrimeiroNumero()`.

#### Código

- [corrigirPrimeiroNumero.js](./corrigirPrimeiroNumero.js)

# Corrigir o segundo número

Complete a função `corrigirSegundoNumero()` de forma que ela mude o segundo item da matriz recebida por parâmetro para `5`. Além disso, sua função deve retornar a nova matriz já modificada.

Siga a dica a seguir.

## Caso de uso

```js
function corrigirSegundoNumero(numeros) {
  // ...
}

// Não modifique as linhas abaixo
console.log(corrigirSegundoNumero([1, 4, 6, 8]));
console.log(corrigirSegundoNumero([1, 10, 13, 19]));
```

### Testes

- Implemente `corrigirSegundoNumero()`.

#### Código

- [corrigirSegundoNumero.js](./corrigirSegundoNumero.js)

# Incrementar a primeira temperatura

Complete a função `incrementarPrimeiraTemperatura()` de forma a atender esses requisitos:

- A primeira temperatura da matriz `temperaturas` recebida como parâmetro deve ser incrementada.
- Isso significa que, se a primeira temperatura for 5, ela deve se tornar 6. Se for 8, deve se tornar 9, e assim por diante.
- Não importa qual seja o valor, você deve adicionar `+ 1` ao primeiro valor das temperaturas.
- Você não pode fazer `hardcode`.
- A função deve retornar a novo matriz de temperaturas.

Siga a dica a seguir.

## Caso de uso

```js
function incrementarPrimeiraTemperatura(temperaturas) {
  // ...
}

// Não modifique as linhas abaixo
console.log(incrementarPrimeiraTemperatura([3, 5, 4, 7]));
console.log(incrementarPrimeiraTemperatura([-5, 12, 15, 18, 13]));
```

### Testes

- Implemente a função `incrementarPrimeiraTemperatura()`.

- Não faça hardcode.

#### Código

- [incrementarPrimeiraTemperatura.js](./incrementarPrimeiraTemperatura.js)
