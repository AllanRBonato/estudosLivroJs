const prompt = require('prompt-sync')();

const valor = Number(prompt('Valor R$: '));
const numero = Number(prompt('N° de parcelas: '));
const valorParcelas = Math.floor(valor / numero);
const valorFinal = valorParcelas + (valor % numero);
for (let i = 1; i < numero; i++) {
    console.log(`${i}° parcela: R$ ${valorParcelas.toFixed(2)}`);
}
console.log(`${numero}° parcelas: R$ ${valorFinal.toFixed(2)}`);
