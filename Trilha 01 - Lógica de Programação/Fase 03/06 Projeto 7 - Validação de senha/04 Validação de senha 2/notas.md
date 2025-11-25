# Validação de senha 2

Esta é uma validação de senha básica semelhante ao projeto anterior.

Complete novamente a função `senhaEValida()` de forma que retorne `true` quando a senha for válida e `false` caso contrário.

A senha é considerada válida quando possui pelo menos 10 caracteres. **Entretanto, espaços à esquerda e à direita NÃO devem ser contados**.

## Caso de uso

```js
Implemente a funcionalidade solicitada.

function senhaEValida(senha) {
    console.log(senha)

}
```

### Testes

- `senhaEValida(" Senh4@DoJo4o ")` retorna true, pois essa senha é válida.

- `senhaEValida(" Senh4@DoJ ")` retorna false, pois essa senha não é válida.
