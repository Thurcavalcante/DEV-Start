# Mensagem da lista de compras 1

Este projeto representa um futuro pedaço de um aplicativo de compras. Imagine que, ao clicar sobre botões + e -, aumenta e diminui respectivamente o número de itens que o usuário deseja comprar.

Altere a função `obtenhaMensagem` de modo que ela retorne uma string diferente para cada situação abaixo:

1. Se o parâmetro `valor` for menor que 0 (por exemplo, -1, -2 etc.), retorne a mensagem: `"Número inválido"`
2. Se o parâmetro `valor` for 0, retorne a mensagem: `"Você não tem nenhum item em sua lista de compras"`
3. Se o parâmetro `valor` for 1, retorne a mensagem: `"Você tem 1 item em sua lista de compras"`
4. Se o parâmetro `valor` for maior que 1, retorne a mensagem: `"Você tem mais de 1 item em sua lista de compras"`

Para mostrar a mensagem na tela, você deve inserir uma string no retorno da função `obtenhaMensagem()`.

Demos a você um exemplo de retorno que você deve remover assim que começar a resolver este projeto.

Dica: cuidado ao fazer comparações no seu código. Use três sinais de igual (`===`) para isso, em vez de um igual simples (`=`).
Exemplo:

```js
// Este código está ERRADO, porque o = simples não serve para fazer comparação
if ((valor = 0)) {
  return "Você não tem nenhum item em sua lista de compras";
}

// Este código está CORRETO, porque está usando === para fazer comparação
if (valor === 0) {
  return "Você não tem nenhum item em sua lista de compras";
}
```

## Caso de uso

```js
function obtenhaMensagem(valor) {
  console.log(valor);

  // remova isso quando você começar a resolver este projeto
  return "Insira a mensagem que será retornada aqui";
}

// ---- Modifique apenas o código que está acima desta linha ----
document.write(`
<div style="font-family: Verdana, Geneva, Tahoma, sans-serif;">
	<h2>Lista de Compras</h2>
    <button id="dv-sub-item" class="btn btn-accent"
		> - </button>
    <input type="number" id="dv-items-count" value="0" 
		readonly class="textbox" />
    <button id="dv-add-item" class="btn btn-accent"
		> + </button>
    <p id="dv-message">
		</p>
</div>
`);

let itemsCount = document.querySelector("#dv-items-count");

function dvRenderizaMensagem() {
  let value = Number.parseInt(itemsCount.value, 10);
  let message = obtenhaMensagem(value);
  document.querySelector("#dv-message").textContent = message;
}

document.querySelector("#dv-add-item").addEventListener("click", () => {
  itemsCount.value = Number.parseInt(itemsCount.value, 10) + 1;
  dvRenderizaMensagem();
});

document.querySelector("#dv-sub-item").addEventListener("click", () => {
  itemsCount.value = Number.parseInt(itemsCount.value, 10) - 1;
  dvRenderizaMensagem();
});
```

### Testes

- Mostrar "Número inválido" para números negativos.

- Mostrar a mensagem correta quando 0 é selecionado.

- Mostrar a mensagem correta quando 1 é selecionado.

- Mostra a mensagem correta quando há mais de 1 item selecionado.
