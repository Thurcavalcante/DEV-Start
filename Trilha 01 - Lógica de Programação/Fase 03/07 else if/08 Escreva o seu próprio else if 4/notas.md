# Escreva o seu próprio else if 4

Complete a função `receberSaudacaoPorPeriodoDoDia()` de forma que ela retorne uma das seguintes strings, dependendo da hora do dia:

1. "Bom dia", quando a hora for `estritamente antes` das 12.
2. "Boa tarde", quando a hora estiver entre as 12 `(inclusive)`, mas `estritamente antes` das 20.
3. "Boa noite" em `todos os outros casos`.

Implemente a função receberSaudacaoPorPeriodoDoDia() conforme especificado.

## Caso de uso

```js
function receberSaudacaoPorPeriodoDoDia(hora) {
  // ...
}

//Não modifique as linhas abaixo
console.log(receberSaudacaoPorPeriodoDoDia(11)); // "Bom dia"
console.log(receberSaudacaoPorPeriodoDoDia(12)); // "Boa tarde"
console.log(receberSaudacaoPorPeriodoDoDia(14)); // "Boa tarde"
console.log(receberSaudacaoPorPeriodoDoDia(22)); // "Boa noite"
```

### Testes

- Retorne "Bom dia" quando a hora for estritamente antes das 12.

- Retorne "Boa tarde" quando a hora estiver entre as 12 (inclusive), mas estritamente antes das 20.

- Retorne "Boa noite" em todos os outros casos.
