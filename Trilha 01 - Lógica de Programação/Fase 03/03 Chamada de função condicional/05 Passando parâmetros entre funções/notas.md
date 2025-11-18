# Passando parâmetros entre funções

Seja bem-vindo! Nesta aula, vamos tratar do seguinte assunto: Passando parâmetros entre funções.

```js
function dobro(x) {
  return x * 2;
}

function executar(operacao, x) {
  if (operacao === "dobro") {
    return dobro(); // passa o parâmetro 'x' para a função dobro
  }
}

// Exemplos de uso
executar("dobro", 4); // o resultado será 8
executar("dobro", 5); // o resultado será 10
```

## Notas

- Você pode passar um parâmetro de uma função para outra.
