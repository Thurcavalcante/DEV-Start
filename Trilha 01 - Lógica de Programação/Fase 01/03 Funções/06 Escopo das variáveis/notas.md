# Escopo das variáveis

O **escopo** determina **onde** uma variável pode ser acessada dentro de um programa e **por quanto tempo** ela permanece válida. Compreender o escopo das variáveis é essencial para escrever código claro, evitar erros e criar programas robustos. Ao longo desta aula, vamos entender os diferentes tipos de escopo e como eles afetam o comportamento das variáveis em nossos programas.

```js
// A variável numero NÃO pode ser acessada antes ou depois da função
function dobro(numero) {
  // A variável numero só pode ser usada DENTRO dessa função
  return numero * 2;
}
```

> - O parâmetro só pode ser acessado dentro da função.
> - Em qualquer outro lugar, você não tem acesso a ele.

## Armazenar o resultado de uma função em uma variável

```js
function dobro(numero) {
  return numero * 2;
}

let primeiroResultado = dobro(4);
let segundoResultado = dobro(10);
```

## Notas

- Os parâmetros de uma função só são acessíveis dentro dessa função.
- Este conceito é chamado de **escopo da variável**.
- Você pode armazenar o resultado de uma função em uma variável.

### É possível armazenar o resultado de uma função em uma variável?

[x] Sim, let total = soma(a, b)

[ ] Sim, let soma(a + b)

[ ] Não, isso não é possível.
