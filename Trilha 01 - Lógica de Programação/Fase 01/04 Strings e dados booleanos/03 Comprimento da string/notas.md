# Comprimento da string

Seja bem-vindo! Nesta aula, vamos tratar do seguinte assunto: Comprimento da string.

Quantos caracteres tem o seu nome ou a cidade que você mora? Essa quantidade de caracteres é chamada de `comprimento da string`. Ela é uma propriedade de qualquer string que você definir, por exemplo:

- Na primeira linha, é declarada uma variável chamada `cidade` que recebe o valor de `Curitiba`.
- Na segunda linha, solicitamos o `length` para saber o comprimeito da string `cidade`
- O resultado será 8, porque `Curitiba` tem oito caracateres.

```js
let cidade = "Curitiba";
cidade.length; // O resultado é 8
```

O `.length` é uma propriedade da string. Use ele `após` a variavel sem `aspas`, pois se a variável estiver `entre aspas`, o length contaram quantos caracteres tem a variável `cidade` e não o valor dela que seria `Curitiba`.

```js
let cidade = "Curitiba";

cidade.length; // O resultado é 8 (CERTO)

"cidade".length; // o resultado é 6 (ERRADO)
```

## Notas

- `.length` é uma propriedade da string que retorna o número de caracteres que ela contem.
- Use corretamente as aspas! Elas devem aparecer ao redor do texto da string, mas não ao redor do nome da variável.

### Está preparado para avançar para o próximo conteúdo?

[x] Sim, estou aprendendo bastante. Vamos em frente!

[ ] Ainda não. Preciso revisar o conteúdo atual.

[ ] Vou avançar, mas não agora. Farei uma pausa pro café :)
