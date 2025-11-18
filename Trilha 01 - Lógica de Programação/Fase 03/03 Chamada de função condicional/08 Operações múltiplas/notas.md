# Operações múltiplas

Complete a função `executar()` de forma que ela seja capaz de dobrar e triplicar o parâmetro `x` que ela recebe. A condição `if` já está escrita para você. Aqui está o que você precisa fazer:

1. Quando a operação for "dobro", chame a função `dobro()` com o número que precisa ser duplicado.
2. Quando a operação for "triplo", chame a função `triplo()` com o número que precisa ser triplicado.

Certifique-se de que o resultado das funções `dobro()` e `triplo()` está sendo retornado.

Implemente as duas situações solicitadas.

## Caso de uso

```js
function dobro(x) {
  return x * 2;
}

function triplo(x) {
  return x * 3;
}

function executar(operacao, x) {
  if (operacao === "dobro") {
    //
  }

  if (operacao === "triplo") {
    //
  }
}

// Não modifique as linhas abaixo
console.log(executar("dobro", 5)); // deveria retornar 10
console.log(executar("triplo", 30)); // deveria retornar 90
```

### Testes

- Implemente a operação dobro.

- Implemente a operação triplo.
