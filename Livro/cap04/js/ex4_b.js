const prompt = require('prompt-sync')();

const velocidadePermitida = Number(prompt('Digite a velocidade permitida: '));
const velocidadeCondutor = Number(prompt('Digite a velocidade do condutor: '));

const vintePorcento = (velocidadePermitida * 0.20) + velocidadePermitida;

if (velocidadeCondutor > vintePorcento) {
    console.log(`Sua velocidade: ${velocidadeCondutor} Km/h; Multa Grave`)
} else {
    console.log(`Sua velocidade ${velocidadeCondutor} Km/h; Multa Leve`)
}
