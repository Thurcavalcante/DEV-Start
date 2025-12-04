# Verificar se está frio com atalho booleano

Complete a função `estaCongelando()` de forma que ela retorne `true` quando a temperatura estiver estritamente abaixo de zero, e `false` caso contrário.

Nota: a temperatura está em graus Celsius, e é por isso que está congelando quando está abaixo de 0.

Tente resolver o desafio sem usar `if/else`, mas isso não é obrigatório.

Complete a função conforme especificado.

## Caso de uso

```js
function estaCongelando(temperatura) {
  // ..
}

// Não modifique as linhas abaixo
console.log(estaCongelando(-5));
console.log(estaCongelando(10));
```

### Testes

- `estaCongelando()` retorna `true` quando a temperatura está estritamente abaixo de zero.

- `estaCongelando()` retorna `false` quando a temperatura está zero grau ou superior.
