# Adicionando condicionais if

Seja bem-vindo! Nesta aula, vamos tratar do seguinte assunto: Adicionando condicionais if.Seja bem-vindo! Neste vídeo, vamos tratar do seguinte assunto: Adicionando condicionais if.

```js
function dobro() {
  console.log("O número será dobrado");
}
function triplo() {
  console.log("O número será triplicado");
}

function executar(operacao) {
  if (operacao === "dobro") {
    return dobro();
  }

  if (operacao === "triplo") {
    return triplo();
  }
}

// Exemplos de uso
executar("dobro"); // chamará a função dobro
executar("triplo"); // chamará a função triplo
```

## Notas

- O código é interpretado de cima para baixo.
- A execusão do código segue a lógica do seu programa. Ela percorre as condicionais `if` e executa as chamadas de função conforme você programou.
