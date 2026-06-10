const prompt = require('prompt-sync')()
const pessoas = Number(prompt('Total de pessoas: '));
const peixes = Number(prompt('Quantidade de peixes: '));

const valorEntrada = 20 * pessoas;

const quantidadeExtra = peixes - pessoas;

console.log('---------------------------------------------\n');

console.log('Valor por pessoa: R$20,00');
console.log('Valor extra por peixe adicionar: R$12,00\n');

console.log('---------------------------------------------\n');


if (peixes > pessoas) {
    const valorExtra = (quantidadeExtra * 12) + valorEntrada;
    console.log(`Passou a quantidade de peixes, valor fica R$: ${valorExtra.toFixed(2)}`);
} else {
    console.log(`O valor total ficou em R$: ${valorEntrada.toFixed(2)}`);
}


