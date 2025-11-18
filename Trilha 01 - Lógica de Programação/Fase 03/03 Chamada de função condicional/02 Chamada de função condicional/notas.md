# Chamada de função condicional

Conclua a função `executar()` de forma que ela chame a função `dobro()` quando o parametro `operacao` recebido tiver o valor "dobro".

Crie uma condição em que, se a operação for igual a "dobro", a função a ser executada será `dobro()`.

## Caso de uso

```js
function dobro() {
  console.log("O número será dobrado");
}

function executar(operacao) {
  //
}

// Exemplos de uso - não mexa aqui
executar("dobro"); // deveria chamar dobro
executar("triplo"); // não deveria chamar triplo
```

### Testes

- Chamar a função `dobro()` após a função `executar()` receber o parâmetro "dobro".

- Qualquer outra função não será chamada.
