# Else if

```js
function transformaNotaEmLetras(nota) {
  if (nota >= 15) {
    return "A";
  } else if (nota >= 10) {
    return "B";
  } else {
    return "F";
  }
}
```

## Notas

- O par `if else` avalia apenas dois cenários:
  a condicional e a respectiva condição oposta.
  Para lidar com outros cénarios além desses, podemos usar o `else if`.
- O `else if` só pode ser usado após uma condicional `if`.
