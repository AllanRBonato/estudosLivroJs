const prompt = require('prompt-sync')();

const numeroChinchilas = Number(prompt('N° de Chinchilas: '));
const numeroAnos = Number(prompt('N° de Anos: '));

let contador = '';
let total = numeroChinchilas;

for (let i = 1; i <= numeroAnos; i++) {
    contador = contador + i + '° Ano: ' + total + ' Chinchilas \n'
    total = total * 3
}

console.log(contador);
