# Bem-vindo ao seu primeiro projeto de programação!

Neste projeto, você **irá completar as quatro funções existentes na calculadora**. Lembre-se de que as operações só darão certo se você completar o código corretamente.

## 👨🏻‍💻 Hora de praticar

1. As quatro funções da calculadora já foram criadas: `soma`, `subtrai`, `multiplica` e `divide`.
2. Insira dentro de cada função o código para fazê-la retornar o cálculo correto.
3. Não basta escrever a operação +,-,/ ou \*, é necessário usar a palavra-chave return

**Conclua o código e experimente a calculadora que você acabou de configurar!**

```js
function soma(a, b) {
  // altere aqui..
}

function subtrai(a, b) {
  // altere aqui..
}

function multiplica(a, b) {
  // altere aqui..
}

function divide(a, b) {
  // altere aqui..
}

// ---- Modifique apenas o código que está acima desta linha ----
document.write(`
	<div style="font-family: Verdana, Geneva, Tahoma, sans-serif;">
		<h2>Calculadora</h2>
		Valor 1: <input id="dvInput1" type="number" placeholder="0"><br><br>
		Valor 2: <input id="dvInput2" type="number" placeholder="0"><br><br>
		Operação:
		<button type="button" onclick="dvCalcular(OPERACAO_SOMA)">+</button>&nbsp;
		<button type="button" onclick="dvCalcular(OPERACAO_SUBTRACAO)">-</button>&nbsp;
		<button type="button" onclick="dvCalcular(OPERACAO_MULTIPLICACAO)">*</button>&nbsp;
		<button type="button" onclick="dvCalcular(OPERACAO_DIVISAO)">/</button><br><br>
		Resultado: <span id="dvResultadoCalculo" style="border: solid 1px #aaa; padding:3px;">0</span>
	</div>
`);

const OPERACAO_SOMA = 1;
const OPERACAO_SUBTRACAO = 2;
const OPERACAO_MULTIPLICACAO = 3;
const OPERACAO_DIVISAO = 4;

function dvCalcular(dvOperacao) {
  let dvValorOp1 = Number(document.querySelector("#dvInput1").value);
  let dvValorOp2 = Number(document.querySelector("#dvInput2").value);
  let dvResult = document.querySelector("#dvResultadoCalculo");

  switch (dvOperacao) {
    case OPERACAO_SOMA:
      dvResult.innerHTML = soma(dvValorOp1, dvValorOp2);
      break;
    case OPERACAO_SUBTRACAO:
      dvResult.innerHTML = subtrai(dvValorOp1, dvValorOp2);
      break;
    case OPERACAO_MULTIPLICACAO:
      dvResult.innerHTML = multiplica(dvValorOp1, dvValorOp2);
      break;
    case OPERACAO_DIVISAO:
      dvResult.innerHTML = divide(dvValorOp1, dvValorOp2);
      break;
  }
}
```

### Testes

- Implemente a função de soma

- Implemente a função de subtração

- Implemente a função de multiplicação

- Implemente a função de divisão
