# Chamada de função condicional

Seja bem-vindo! Nesta aula, vamos tratar do seguinte assunto: Chamada de função condicional.

```js
function podeVotar(idade) {
  if (idade >= 16) {
    return true;
  }
}
```

Usar o `if` para chamar outras funções, esse recuso faz com que seu código trabalhe com cenarios mais complexo.

```js
function dobro() {
  console.log("O número será dobrado");
}

function executar(operacao) {
  if (operacao === "dobro") {
    return true;
  }
}

// Exemplo de uso
executar("dobro");
```

## Notas

- Você pode chamar funções **dentro de condicionais** `IFs`.
- Esse recurso permite que o seu programa lide com casos de uso mais complicados.
