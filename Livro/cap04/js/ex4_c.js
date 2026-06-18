const prompt = require('prompt-sync')();

const valor = Number(prompt('Valor R$: '));



if (valor >= 3) {
    console.log(`Tempo: 120`)
    const troco = valor - 3
    console.log(`Troco R$: ${troco.toFixed(2)}`)
} else if (valor >= 1.75) {
    console.log(`Tempo: 60`);
    const troco = valor - 1.75
    console.log(`Troco R$: ${troco.toFixed(2)}`)
} else if (valor >= 1) {
    console.log(`Tempo: 30`)
    const troco = valor - 1
    console.log(`Troco R$: ${troco.toFixed(2)}`)
} else {
    console.log('Valor inferior a R$ 1,00, deposite mais para seguir.');
}