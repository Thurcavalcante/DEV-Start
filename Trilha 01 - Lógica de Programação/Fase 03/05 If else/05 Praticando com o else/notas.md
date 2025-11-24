# Praticando com o else

Se for verdadeiro retorna verdadeiro se não, retorna falso;

```js
function podeVotar(idade) {
  if (idade >= 16) {
    return true;
  } else {
    return false;
  }
}
```

Forma errada de usar o `else`, sem o `ìf`.

```js
function podeVotar(idade) {
    else { // ERRO: falta o if
        return false
    }
}
```

## Notas

- A palavra-chave `else` **não pode** ser usada **sozinha**. Ela precisa vir depois de um `if`.
- Não se esqueça de inserir as chaves de abertura e fechamento do if, else e da própria função.
