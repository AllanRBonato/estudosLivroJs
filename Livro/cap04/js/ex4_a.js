const terminal = require('prompt-sync')();

const numero = Number(terminal('Digite um número: '));

if (numero % 2 === 0) {
    console.log(`O número ${numero} é par`);
} else {
    console.log(`O número ${numero} é ímpar`);
}

numero % 2 === 0 ? console.log(`O número ${numero} é par`) : console.log(`O número ${numero} é ímpar`);