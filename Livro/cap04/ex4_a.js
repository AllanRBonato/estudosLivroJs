const prompt = require('prompt-sync')()
const pessoas = Number(prompt('Total de pessoas: '));
const peixes = Number(prompt('Quantidade de peixes: '));

const valorEntrada = 20 * pessoas;

let valorExtra;

if (peixes > pessoas) {
    valorExtra = ((pessoas / peixes) * 12) + valorEntrada;
} 


console.log(valorExtra);