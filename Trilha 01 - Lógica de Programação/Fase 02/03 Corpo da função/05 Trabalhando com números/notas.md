# Trabalhando com números

Seja bem-vindo! Nesta aula, vamos tratar do seguinte assunto: Trabalhando com números.

Suponha que existe uma função para converter reais para centavos.

> cada Real equivale a 100 centavos

```js
function reaisParaCentavos(reais) {
  return reais * 100;
}

// Exemplos de uso
reaisParaCentavos(1); // 100
reaisParaCentavos(5); // 500
```

Digamos que essa função seja utilizada para calcular o preço de um produto e que ela vai adicionar um imposto fixo de `200 centavos` ou `2 reais` ao final do preço.

```js
function reaisParaCentavos(reais) {
  return reais * 100 + 200;
}
```

Também pode escrever a função em varias linhas mostrando o passo a passo.

```js
function precoEmReais(reais) {
  let preco = reais * 100;
  preco = preco + 200;
  return preco;
}
```

Ambos fazem a mesma coisa, embora o segundo exemplo esteva mais longa, ele permite que estaja perfeitamente bem. Não há necessidade de você enfiar toda a lógica em uma linha

## Notas

- É melhor escrever sua lógica linha por linha, passo a passo, em vez de tentar colocar tudo em uma única linha.
- Isso também se aplica a especialistas, não apenas para os iniciantes.
