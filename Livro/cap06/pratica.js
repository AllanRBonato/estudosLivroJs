const prompt = require('prompt-sync')();

const numerosDigitados = [];

let digiteUmNumero = '';

for (let i = 1; i <= 5; i++) {
    digiteUmNumero = Number(prompt('Digite um número: '));
    numerosDigitados.push(digiteUmNumero);
}

console.log(numerosDigitados);

let soma = 0;

numerosDigitados.forEach(num => soma += num);

console.log(`À soma de todos os números digitados são:\n${soma}`);
