# Operações múltiplas

Seja bem-vindo! Nesta aula, vamos tratar do seguinte assunto: Operações múltiplas.

```js
function dobro(x) {
  return x * 2;
}

function triplo(x) {
  return x * 3;
}

function executar(operacao, x) {
  if (operacao === "dobro") {
    return dobro(x); // repassa o parâmetro x
  }

  if (operacao === "triplo") {
    return triplo(x); // repassa o parâmetro x
  }
}

// Exemplo de uso
executar("dobro", 10); // retorna 20
executar("dobro", 30); // retorna 90
```

## Notas

- Quando uma função estiver chamando outra função - por exemplo, a função `executar()` está chamando a função `dobro()` - não se esqueça de retornar o resultado da segunda função - por exemplo, `return dobro()`.
