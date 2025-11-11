# Função sem retorno

Temos aqui uma função chamada `quantidadeDeLetras()`, mas nela está faltando um retorno.

Execute os testes e veja que a função vai retornar `undefined`. Isso acontece porque está faltando a palavra-chave `return`.

Então, corrija a função de forma que ela retorne a quantidade de letras corretamente, de acordo com o nome dado ao chamar a função.

Corrija a função `quantidadeDeLetras()`.

## Caso de uso

```js
function quantidadeDeLetras(nome) {
  nome.length;
}

// Exemplo de uso - não modifique
console.log(quantidadeDeLetras("César")); // undefined
console.log(quantidadeDeLetras("Jéssica")); // undefined
```

### Testes

- Ao chamar a função `quantidadeDeLetras()` com o nome **"César"**, a função deve retornar o tamanho 5.

- Ao chamar a função `quantidadeDeLetras()` com o nome **"Jéssica"**, a função deve retornar o tamanho 7.
