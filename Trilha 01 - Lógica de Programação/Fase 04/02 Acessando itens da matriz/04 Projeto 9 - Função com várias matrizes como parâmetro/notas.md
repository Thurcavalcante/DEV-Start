# Projeto 9 - Função com várias matrizes como parâmetro

# Diferença de área de superfície

Complete a função `calcularDiferenca()` de forma que ela retorne um número representando a diferença (subtração) entre a área da superfície dos dois retângulos que ela recebe.

Aqui está um exemplo do que a função `calcularDiferenca()` recebe:

`calcularDiferenca([10, 20], [5, 10])`

Ele sempre receberá a largura e o comprimento de dois retângulos. No exemplo acima, isso significa que o primeiro retângulo tem uma largura de 10 e um comprimento de 20. Logo, sua área de superfície é `10 * 20 = 200`.

E o segundo retângulo tem uma largura de 5 e comprimento de 10, o que significa que sua área de superfície é `5 * 10 = 50`.

Nesse exemplo, o resultado de `calcularDiferenca` deve ser:

`10 * 20 - 5 * 10 = 150`

Siga a dica a seguir.

## Caso de uso

```js
function calcularDiferenca(primeiroRetangulo, segundoRetangulo) {
  console.log("Primeiro Retângulo", primeiroRetangulo);
  console.log("Segundo Retângulo", segundoRetangulo);
}
```

### Testes

- Implemente a função `calcularDiferenca()`.

- Não faça hardcode.

#### Código

- [diferencaDeAreaDeSuperficie.js](./diferencaDeAreaDeSuperficie.js)
