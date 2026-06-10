const prompt = require('prompt-sync')();

const valorCompra = Number(prompt('Digite o valor total da compra: R$ '));

const aux = Math.floor(valorCompra/20);
const parcelas = aux === 0 ? 1 : aux > 6 ? 6 : aux;
const valorParcelas = valorCompra / parcelas;
console.log(`Pode pagar em ${parcelas}x de R$: ${valorParcelas.toFixed(2)}`);