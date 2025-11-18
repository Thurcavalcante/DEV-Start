# Adicionando condicionais if

Agora, assim como no exercício anterior, quando a função `executar()` for chamada com o parâmetro `dobro`, deve ser executada a função `dobro()`. E, se a função `executar()` receber` triplo` como parâmetro, deve ser executada a função `triplo()`.

Ou seja, codifique dentro da função `executar()`, para que ela receba uma strinh como parâmetro, podendo ser `dobro` ou `triplo()`.

Dependendo do valor/parâmetro recebido, a função deverá invocar a devida função correspondente e usar o comando `return` para retornar imediatamente o resultado da execução.

1. Utilize o código base fornecido abaixo.

2. Dentro da função `executar()`, crie condições (utilizando if ou else if) para identificar o valor do parâmetro operacao:

   2.1. Se operacao for igual a `dobro`, a função `executar()` deve chamar `dobro()` e retornar o seu resultado utilizando o comando `return`.

   2.2. Se operacao for igual a` triplo`, a função `executar()` deve chamar `triplo()` e retornar o seu resultado utilizando o comando `return`.

3. A inclusão do `return` é obrigatória, pois esse comando garante que a função `executar()` finalize a execução imediatamente após a chamada da função desejada, conforme demonstrado na orientação em vídeo. Essa prática evita ambiguidades e assegura que o código se comporte de forma previsível.

## Caso de uso

```js
function dobro() {
  console.log("O número será dobrado");
}

function triplo() {
  console.log("O número será triplicado");
}

function executar(operacao) {
  // Implemente sua solução aqui
}

// Exemplos de uso - não mexa aqui
executar("dobro"); // deve chamar a função dobro() e exibir "O número será dobrado"
executar("triplo"); // deve chamar a função triplo() e exibir "O número será triplicado"
```

### Testes

- Chamar a função `dobro()` se a operação for "**dobro**".

- Chamar a função `triplo()` se a operação for "**triplo**".

- Não chamar `dobro()` nem `triplo()` em todos os outros casos.
