const prompt = require('prompt-sync')();

const fruta = prompt('Fruta: ');
const numeroVezes = Number(prompt('Número de vezes: '));

let nEstrelas = '';

// Faz repetir a quantidade de vezes colocada em numeroVezes
for(let i = 1; i <= numeroVezes; i++) {
    nEstrelas = nEstrelas + fruta;

    // Empede que a última fruta apareça com *
    if (i < numeroVezes) {
        nEstrelas = nEstrelas + ' * ';
    }
}
console.log(nEstrelas);