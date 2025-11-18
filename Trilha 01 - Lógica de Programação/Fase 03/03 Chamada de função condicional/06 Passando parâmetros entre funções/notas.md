# Passando parâmetros entre funções

Conclua o código fornecido, para que os exemplos de uso funcionem conforme o esperado.

Comece examinando os exemplos de uso. A função `executar()` deve ter dois parâmetros.

1. Comece atualizando a definição da função `executar()` e dê a ela um segundo parâmetro (você pode chamá-lo como quiser).
2. Passe o segundo parâmetro que você definiu na função `executar()` para a função `dobro()`.
   Implemente o acréscimo do segundo parâmetro conforme foi solicitado.

## Caso de uso

```js
function dobro(x) {
  return x * 2;
}

function executar(operacao) {
  if (operacao === "dobro") {
    return dobro();
  }
}

// Exemplos de uso - não modifique
console.log(executar("dobro", 4)); // deve retornar 8
console.log(executar("dobro", 5)); // deve retornar 10
```

### Testes

- Adicione o segundo parâmetro para `executar()`.

- Passe o parâmetro para `dobro()`.
