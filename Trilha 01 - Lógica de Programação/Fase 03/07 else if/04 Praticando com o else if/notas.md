# Praticando com o else if

Erros comuns ao usar `else if`.

1. Escrever `else if` de de um jeito diferente (`elseif, elsif, etc...`).
2. Acrescentar else if `depois` do else.
3. Misturar parênteses `( )` e chaves `{ }`

Else if também pode ser usado para comparar strings e propriedades de strings. Por exemplo:

```js
if (resultado === "sucesso") {
  // o usuário pagou
} else if (resposta === "credito_insulficiente") {
  // o cartão do usuário não tinha crédito
} else {
  // tratar todos os outros cénarios
}
```
