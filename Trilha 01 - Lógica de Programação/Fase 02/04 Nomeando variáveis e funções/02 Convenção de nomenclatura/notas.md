# Convenção de nomenclatura

Seja bem-vindo! Nesta aula, vamos tratar do seguinte assunto: Convenção de nomenclatura.

No `JavaScript`, a convenção de nomeclatura, é chamada de `lowerCamelCase`. Se você tiver varias palavras **primeiro nome**, para usar como nome de uma variável ou de uma função, vai precisar usar essas duas palavras juntas com a letra `P` em minúscula e `N` e maiúscula. `primeiroNome`.

Outro exemplo é **número do documento**, note que as palavras estão juntas e só as duas letras `D` estão maiúsculas. `numeroDoDocumento`. Além disso, foi removido o acento agudo da palavra `numero` pois é recomendado não acentuar nomes de variáveis e funções.

Então, a nomeclatura `lowerCamelCase` significa que o primeiro caractere da primeira palavra fica em minúsculo e o primeiro caractere das palavras seguintes em maiúsculo.

```js
let nomeCompleto = "Rita Silta";

function mostrarBomDia() {
  return "Bom dia";
}
```

Para palavras **booleanas** ou funções que retornam valores **booleanos**, é recomendado usar palavras do tipo: `tem`, `pode`... Poque as palavras que indicam uma determinada condinção que vai valer **sim** ou **não**, **verdadeiro** ou **falso**.

Notem que as palavras `podeVotar` e `temCadastro` indicam valores booleanos.

```js
let podeVotar = true;

function temCadastro() {
  return false;
}
```

Você não pode iniciar um nome de variável com um **número**.

```js
let _planeta = "Terra"; // Correto
let planeta2 = "Vênus"; // Correto
let 2planeta = "Vênus"; //  ERRADO
```

## Notas

- Uma convenção de nomeclatura é um conjunto de regras que você deve levar em consideração ao definir o nome de uma variável ou função.
- Em JavaScrip, a convenção de nomeclatura para variáveis e funções é a `lowerCamelCase`.
- `lowerCamelCase` significa que o primeiro caractere da primeira palavra deve ser minúsculo, e o primeiro caractere das palavras restantes deve ser maiúsculo.
- Você não pode iniciar um nome de variável ou de função com um número.
