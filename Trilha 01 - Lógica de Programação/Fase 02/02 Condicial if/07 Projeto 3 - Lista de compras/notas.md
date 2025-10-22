# Projeto 3 - Lista de compras

Seja bem-vindo! Nesta aula, vamos tratar do seguinte assunto: Projeto 3 - Lista de compras.

## Varias `condicionais IFs` na mesma função

```js
function obterMensagemDeVoto(idade) {
  if (idade >= 16) {
    return "Você pode votar";
  }

  if (idade < 16) {
    return "Você não pode votar";
  }
}

obterMensagemDeVoto(20); // vai retornar "Você pode votar"
obterMensagemDeVoto(10); // vai retornar "Você não pode votar"
```

Dentro de uma função, pode ter varias condicionais `ifs`, mas preste atenção na condição que está sendo avaliada em cada **IF**.
