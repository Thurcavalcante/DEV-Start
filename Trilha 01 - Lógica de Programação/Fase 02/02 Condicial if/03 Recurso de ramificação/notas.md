# Recurso de ramificação

A partir de agora, você vai se deparar com conceitos que talvez ainda não foram esclarecidos. No entanto, pedimos para que tenha foco em resolver apenas aquilo que está sendo proposto a você! E no momento oportuno, terá conhecimento de sobra sobre funções, retornos...

**Corrija a comparação realizada dentro da condição if** que se encontra dentro da função `mostreMesagemVoto`. Ela deve apresentar a mensagem de votação quando o usuário tiver **permissão para votar** (ou seja, quando tiver 18 anos ou mais).

Feito isso, você deveria visualizar o resultado dessa função com base em como ela está sendo chamada. Quando a função `mostreMesagemVoto` recebe `10`, qual mensagem aparece? Quando a função `mostreMesagemVoto` recebe `20`, qual mensagem aparece?

Veja que, no primeiro exemplo, você deve ver `undefined` no console, porque a condição resultará em `false`. No segundo exemplo, você deve ver "Você tem permissão para votar" no console, porque a condição resultará em `true`.

Tome seu tempo e certifique-se de que você entendeu o que está acontecendo neste desafio!

Faça a correção na condição `if`.

## Caso de uso

```js
function mostreMesagemVoto(idade) {
  if (idade < 18) {
    console.log("Você tem permissão para votar");
  }
}

//Exemplo de uso - não modifique
console.log(mostreMesagemVoto(10));
console.log(mostreMesagemVoto(20));
console.log("---");
```

### Testes

- Corrija a comparação dentro do if, desde que a idade seja maior ou igual a 18.
