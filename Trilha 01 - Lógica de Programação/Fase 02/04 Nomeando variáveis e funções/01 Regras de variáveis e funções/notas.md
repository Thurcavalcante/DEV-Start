# Regras de variáveis e funções

Seja bem-vindo! Nesta aula, vamos tratar do seguinte assunto: Regras de variáveis e funções.

## Revisão dos assuntos passados

### Não é possivel redefinir uma variável! Pois ela já foi definida na primeira linha de código.

Se você definir `let` com uma variável com nom especifico, não pode repetir.

```js
let nome = "Rodrigo";

// Isso é INVÁLIDO e vai retornar um erro
let nome = "Paulo";
```

Dessa forma o código é valido pois descartamos o `let` e atribuimos um valor novo para a variável.

```js
let nome = "Rodrigo";

// Isso é VÁLIDO porque não estamos rdefinindo a variável
nome = "Paulo";
```

### As variáveis e funções diferenciam maiúsculas e minúsculas

- Com diferenciação entre maiúsculas e minúsculas: `"Paulo"` e `"PAULO"` **não** são considerados iguais.
- Sem diferenciação entre maiúsculas de minúsculas: `"Paulo"` e `"PAULO"` são considerados iguais.

```js
let Nome = "Rodrigo";

// Esta não é a variável "Nome"
nome = "Paulo";
```

Com funções a regra é a mesma. A primeira função com a primeira letra em minúscula é diferente dessa outra função com a primeira letra em maiúscula.

```js
function teste() {
  //
}

// Esta função é diferente da primeira
function Teste() {
  //
}
```

Lembre-se de usar os nomes exatamente da maneira que você definir no seu código.

### Não é possível usar uma variável antes de declará-la.

Fica facil de entender nesse primeiro exemplo:

```js
console.log(nome); // Isso vai parar e resultar em ERRO
let nome = "Rodrigo";
```

O `console.log` está se referindo a variável `nome` mas ela só está declarada depois dele. O certo seria definir a variável antes e depois chama-lá no console.

```js
let nome = "Rodrigo";
console.log(nome);
```

## Notas

- Você não pode **redefinir** uma variável depois que ela foi definida.
- A **diferenciação de maiúsculas e minúsculas** significa que um caractere minúsculo e o seu caractere maiúsculo equivalente não são considerados iguais.
- Os nomes de variáveis e de funções diferenciam maiúsculas de minúsculas.
- Você não pode usar uma variável antes de declarar essa variável.
