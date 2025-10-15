# Armazenar valor retornado por uma função

Às vezes, temos funções que exigem mais de um parâmetro de entrada. Como um celular, por exemplo, que exige uma senha de 4 dígitos para acesso por questão de segurança. Mas como programamos isso?

Vamos praticar o armazenamento do valor retornado pela função.

## 👨🏻‍💻 Hora de praticar

Crie uma variável chamada `total`. Armazene na variável `total` o resultado da soma de `10` e `20`.

**Importante**: utilize a função soma() para realizar esta operação.

**Exemplo**:

```js
let verificado = verificarSenha(num1, num2, num3, num4);
```

Chamando a função `verificarSenha()`, que retorna verdadeiro quando os dígitos da senha estão corretos, e armazena esse retorno numa variável chamada verificado.

```js
function soma(x, y) {
  return x + y;
}
```

### Testes

- Defina o total recebendo a função soma() com os parâmetros esperados.
- Não faça hardcoding.
