const prompt = require('prompt-sync')();

const numero = Number(prompt('Número: '));

let guardaDivisor = `Divisores do ${numero} : 1`;
let soma = 1;

for (let i = 2; i <= numero /2; i++) {
    if (numero % i == 0) {
        guardaDivisor = guardaDivisor + ' ,' + i;
        soma = soma + i;
    }
}

guardaDivisor = guardaDivisor + ' (soma: ' + soma + ')';

console.log(guardaDivisor);

if (numero == soma) {
    console.log(`${numero} É um número Perfeito`);
} else {
    console.log(`${numero} Não é um número Perfeito`);
}