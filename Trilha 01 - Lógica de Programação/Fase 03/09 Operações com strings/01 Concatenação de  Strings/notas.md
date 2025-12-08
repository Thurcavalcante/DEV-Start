# Concatenação de strings

Concatenão

```js
let nome = "Gabriela";
let mensangem = "Olá, " + nome;
console.log(mensagem); // "Olá, Gabriela"
```

Hardcoding

```js
let nome = "Gabriela";
let mensangem = "Olá, Eduardo"; // Hardcoding (não faça isso)
console.log(mensagem); // "Olá, Eduardo"
```

Concatenão em uma função

```js
function cumprimentaUsuario(nome) {
  return "Olá, " + nome;
}

// Exemplos de uso
console.log(cumprimentaUsuario("Gabriela")); // "Olá, Gabriela"
console.log(cumprimentaUsuario("Eduardo ")); // "Olá, Eduardo"
```

```js
function informaIdade(idade) {
  return "Você tem " + idade + " anos";
}

// Exemplos de uso
console.log(informaIdade(20)); // "Você tem 20 anos"
console.log(informaIdade(34)); // "Você tem 34 anos"
```

## Notas

- A concatenação consiste em unir duas ou mais strings
- Para concatenar strings, utilize o operador `+`.
- A concatnação também funciona para incorporar o conteúdo de variáveis dentro da string. Por exemplo, após criar uma variável `"nome"`, você pode escrever: `"Olá " + nome`.
