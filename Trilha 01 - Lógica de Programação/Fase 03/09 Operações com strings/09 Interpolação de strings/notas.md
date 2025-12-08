# Interpolação de strings

```js
let nome = "Tiago";
let mensagem = `Olá, ${nome}`; // `Olá, Tiago`
```

```js
let nome = "Tiago";
let sobrenome = "Silva";

// Usando interpolação
let mensagem1 = `Olá, ${nome} ${sobrenome}`; // `Olá, Tiago Silva`

// Usando concatnação
let mensagem1 = "Olá, " + nome + " " + sobrenome; // "Olá, Tiago Silva"
```

Erros comuns

```js
let nome = "Tiago";

// Isso está ERRADO
let mensagem1 = "Olá, ${nome}";

// Isso está CERTO
let mensagem2 = `Olá, ${nome}`;
```

```js
let nome = "Tiago";

// Isso está ERRADO
let mensagem1 = `Olá, nome`;

// Isso está CERTO
let mensagem2 = `Olá, ${nome}`;
```

## Notas

- A `interpolação` é um método para inserir variáveis ou expressões dentro de uma string.
- Os dois passos para a interpolação são:
- 1. Criar uma template string usando o caractere de crase. A interpolação não funciona com aspas.
- 2. Ao redor do nome da variável, inserir cifrão, `${ e }`.
- O resultado da interpolação e da concatenação é o mesmo. Você pode escolher qualquer uma das duas no seu código.
