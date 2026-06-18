const prompt = require('prompt-sync')();

const ladoA = Number(prompt('Lado A: '));
const ladoB = Number(prompt('Lado B: '));
const ladoC = Number(prompt('Lado C: '));

if (ladoA + ladoB > ladoC && ladoA + ladoC > ladoB && ladoB + ladoC > ladoA) {
    
    console.log('Lados podem formar um triângulo.');

    if (ladoA === ladoB && ladoB === ladoC) {
        console.log('Tipo: Equilátero');
    } else if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC) {
        console.log('Tipo: Isósceles');
    } else {
        console.log('Tipo: Escaleno');
    }

} else {
    console.log('Os lados informados NÃO podem formar um triângulo.');
}