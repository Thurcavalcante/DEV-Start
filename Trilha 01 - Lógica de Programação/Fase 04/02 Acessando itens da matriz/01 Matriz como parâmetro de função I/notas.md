# Matriz como parâmetro de função I

Nomes de matrizes no plural, pois as matrizes servem para contem mais de um item. E o nome no plural, ajuda a lembrar isso.

```js
let valores = [26, 100, 41, 32];

valores[0]; // 26
valores[1]; // 100
valores[2]; // 41
valores[3]; // 32
```

Função recebendo uma matriz

```js
function obtemPrimeiroItem(itens) {
  return itens[0];
}

// Exemplo de uso
obtemPrimeiroItem([6, 2, 5]); // 6
obtemPrimeiroItem([4, -3, 8]); // 4
```

## Notas

- É recomendável usar plural no nome das matrizes, porque isso sinaliza que elas são criadas para armazenar mais de um item.
- Você pode usar matrizes como parâmetros de funções.
