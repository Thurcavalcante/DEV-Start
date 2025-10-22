# Introdução à condicional if

Seja bem-vindo! Neste vídeo, vamos tratar do seguinte assunto: Introdução à condicional if.

Uma parte do nosso código pode ou não ser executada dependendo do que precisa ser usado.

Imagine a seguinte condição:

> Se eu acordar antes das 9h da manhã, vou fazer uma caminhada.

Se essa condição acontecer ou seja se ela for verdadeira, então você ira caminhar. Se a condição for falsa ou seja se você não acordar antes das 9h da manhã, você não ira caminhar.

Para se tornar um eleitor, precisa acionar a sua idade, para saber se você podera votar ou não.

> Se você tiver 16 anos ou mais, podera votar.

Para fazer uma condição se usa o `IF`, a estrutura dele é a seguinte:

- Palavra-chave `if`
- Condição `()`
- Chaves/corpo do if `{}`

```js
let nota = 10;
if (nota >= 5) {
  console.log("Você foi aprovado na prova"); // true (porque 10 é maior que 5)
}

if (nota >= 2) {
  console.log("Você foi aprovado na prova"); // false (porque 2 é menor que 5, então o que estiver entre chaves, será ignorado e não será impresso no console)
}
```

## Notas

- A **palavra-chave** `if` permite executar código condicionalmente, com base em uma determinada condição.
- A `condição` dentro do if será verdadeira ou falsa.
- Quando o resultado da condição dentro do if for `verdadeiro`, o código entre as chaves será executado.
- Quando o resultado da condição dentro do if for `falsa`, o código entre as chaves será ignorado.
