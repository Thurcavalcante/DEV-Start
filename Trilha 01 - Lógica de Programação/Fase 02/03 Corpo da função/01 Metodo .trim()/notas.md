# Metodo .trim()

Seja bem-vindo! Nesta aula, vamos tratar do seguinte assunto: Método .trim().

Corpo da função é todo o código que fica entre as chaves `{}`. Nesse caso o copor da função é `return a + b;`.

```js
function soma(a, b) {
  return a + b;
}
```

O copor da função pode ter mais de uma linha também. Ele pode ter uma serie de transformações que veremos nas próximas atividades, mas antes vamos ver um metodo que usa **strings** chamado `.trim()`.

Esse metodo cria uma nova copia de uma string e `remove os espaços iniciais e finais` da string original.

Esse metodo é muito utilizado em sites com formulário.

```js
let email = " marcos@meuemail.com ";
email.trim(); // "marcos@meuemail.com"
```

## Notas

- O método `trim()` nos permite fazer uma nova cópia de uma string, removendo os espaços iniciais e finais
- O modo de usar o **trim()** é semelhante ao **toUpperCase()** e ao **toLowerCase()**.
