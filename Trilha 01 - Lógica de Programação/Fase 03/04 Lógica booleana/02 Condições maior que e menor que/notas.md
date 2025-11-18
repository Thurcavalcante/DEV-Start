# Condições "maior que" e "menor que"

Condição para votar:

```js
idade >= 16; // Condição (inclui o 16)
idade <= 16; // Não é a condição oposta, porque também inclui o 16
idade < 16; // Condição oposta (não inclui o 16)
```

Uma pessoa de 15 anos pode votar? Não! Então essa pessoa não atende a essa condição. Nesse caso o resultado é `false` ou seja `falso`.

Uma pessoa de 16 anos pode votar? Sim! Então essa pessoa atende a essa condição. Nesse caso o resultado é `true` ou seja `verdadeiro`.

```js
pontuacao >= 100; // Condição (inclui o 100)
pontuacao < 100; // Condição oposta (não inclui o 100)
```

```js
saldo < 0; // Condição (não inclui o 0)
saldo >= 0; // Condição (inclui o 0)
```

## Notas

- O oposto de `idade >= 16` é `idade < 16`.
- O oposto de `pontuacao >= 100` é `pontuacao < 100`.
- O oposto de `saldo >= 0` é `saldo < 0`.
