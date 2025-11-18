# Função sem retorno

Seja bem-vindo! Nesta aula, vamos tratar do seguinte assunto: Função sem retorno.

Se não usar o `return` em uma função, ela ira retornar um valor `underfined`

```js
function quantidadeDeLetras(nome) {
  nome.length;
}

quantidadeDeLetras("Fabiano"); // underfined
```

```js
function quantidadeDeLetras(nome) {
  nome.length;
  return undefined; // retorno implícito adicionado pelo JavaScript
}

quantidadeDeLetras("César"); // underfined
```

## Notas

- Se você esquecer de inserir a palavra-chave `return` dentro de uma função, ela vai retornar um valor indefinido. Isso é chamado de `retorno implícito`.
- O objetivo da maioria das funções é retornar algum valor. Portanto, não se esqueça de usar a palavra-chave **return** para fazer a função retornar o resultado que ela calculou.
