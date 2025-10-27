# Formatação de e-mail

Conclua o retorno da função `pegueEmail`() de forma que o e-mail retornado não tenha mais espaços extras, nem à esquerda nem à direita. Ou seja, retire os espaços indesejados.

Implemente o retorno da função `pegueEmail`().

## Caso de uso

```js
function pegueEmail(email) {
  // complete a linha abaixo
  return email;
}

// Exemplo de uso - não modifique
console.log(pegueEmail(" alex@gmail.com "));
console.log(pegueEmail(" alex@gmail.com"));
console.log(pegueEmail("bron@gmail.com"));
```

### Testes

- Retire os espaços indesejados antes e depois do e-mail recebido pela função `pegueEmail`().

- É esperado que, ao receber qualquer e-mail com espaços no início e no final, o resultado seja apenas o endereço de e-mail, sem espaço algum.
