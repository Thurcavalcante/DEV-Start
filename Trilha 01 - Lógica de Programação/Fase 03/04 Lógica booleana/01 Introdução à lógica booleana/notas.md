# Introdução à lógica booleana

Exemplo de condição booleana:

> Condição --> Você está feliz?

> Condição oposta --> Você **não** está feliz?

Exemplo no código:

```js
feliz === true; // condição
feliz === false; // condição oposta
feliz !== true; // condição oposta
```

Imagibe que você fez um aplicativo em que o usuário ira fazer um login para acessar. Em algum momento, você terá que avaliar a seguinte condição: `"O usuário está logado?"` e também, a condição oposta: `"O usuário não está logado?"`.

Conferindo como ficaria no código:

```js
usuarioLogado === true; // condição
usuarioLogado === false; // condição oposta
usuarioLogado !== true; // condição oposta
```

## Notas

- A lógica booleana trabalha com `condições`.
- Para toda condição, existe uma `condição oposta`.
- Para obter o oposto de `=== true`, você pode usar `=== false` ou `!== true`.
