/*
- A primeira vez que você definie uma variável, você tem que defini-la com let.

- Da próxima vez que você usar essa variável, você NÃO deve mais usar let. Basta usar diretamente a variável pelo seu nome.

- A instrução ano + 1 execulta uma operação que adiciona 1 ao valor da variável ano. ela NÃO modifica a variável.

- Tenha cuidado com o hardcoding. Não substitua ano + 1 por um número, porque queremos que o nosso código funcione para qualquer valor dado à variável ano.
*/

let ano = 2024;
ano = 2025;
console.log("Estamos no ano de: " + ano); //Então proximoAno = 2026

let proximoAno = ano + 1;
console.log("Próximo ano será: " + proximoAno); // Mensagem: "Próximo ano será: 2026"

// Forma errada: Hardcoding. NÂO faça isso!
// let proximoAno = 2026;
