# Concatenação de strings versus adição

O sinal d mais `+` pode ser usado tanto para somar quanto para concatenar

```js
function soma(a, b) {
  return a + b;
}
```

| Operandos       | Operação     | Exemplo                  |
| --------------- | ------------ | ------------------------ |
| Número + número | Adição       | 1 + 3 = 4                |
| Número + string | Concatenação | "parte " + 2 = "parte 2" |

```js
let total = 30;
let nota = 5;
let nome = "Vinícius";

total + nota; // 35 (adição)
20 + total; // 50 (adição)
"Olá, " + nome; // "Olá, Vinícius" (concatenação)
```

### Erros mais comuns

1º - Colocar o texto direto na string sem concatenar

```js
function cumprimentarUsuario(nome) {
  return "Olá, Carol"; // isso está errado (Hardcoding)
}
```

2º - Esquecer de fechar as aspas ao redor da string

```js
function cumprimentarUsuario(nome) {
  return "Olá, + nome;
}
```

3º - Esquecer o caractere de espaço entre a string

```js
function cumprimentarUsuario(nome) {
  return "Olá," + nome;
}

cumprimentaUsuario("Carol"); // "OláCarol"
```

## Notas

- Os `operadores` são os valores que aparecem antes e depois de um operador. Por exemplo, em `a + b`, o operador é `+` e os operadores são **a** e **b**.
- Se pelo menos um dos valores antes ou depois do sinal de "mais" for uma string, acontecerá uma `concatenação`. Se ambos forem números, acontecerá uma `adição`.
- Ao concatenar strings: não faça `hardcoding`, preste atenção nas aspas de fechamento da string e não se esquerça do caractere de espaço para separar as palavras.
