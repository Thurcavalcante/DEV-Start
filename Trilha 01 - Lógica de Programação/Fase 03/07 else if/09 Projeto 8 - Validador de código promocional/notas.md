# Projeto 8 - Validador de código promocional

Suponha que temos um formulário que aceita um código promocional. O código promocional só é considerado válido quando tiver entre 5 e 10 caracteres (inclusive). Isso significa que 5, 6, 7, 8, 9 e 10 caracteres são considerados válidos, mas qualquer outra quantidade de caracteres não é válida.

Preencha a função `eCodigoPromocionalValido()` de forma que retorne `true` quando o código promocional for válido, e `false` caso contrário.

Confira as validações abaixo para guiar o seu trabalho.

## Caso de uso

```js
function eCodigoPromocionalValido(codigo) {
  console.log(codigo);
}
```

### Testes

- Sua solução lida com códigos promocionais inválidos.

- Sua solução lida com códigos promocionais válidos.

- Sua solução lida com espaços à esquerda e à direita.
