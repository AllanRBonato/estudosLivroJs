const prompt = require('prompt-sync')();


const salario = Number(prompt('Digite o salário do funcionário: '));
const tempoDeTrabalho = Number(prompt('Digite o tempo de trabalho do funcionário: '));

const quadrienios = Math.floor(tempoDeTrabalho / 4);
const porcentagem = salario * 0.01;
const salarioFinal = (quadrienios * porcentagem) + salario

console.log('--------------------------------------------');

console.log(`Slário R$: ${salario.toFixed(2)}`);
console.log(`Tempo (anos): ${tempoDeTrabalho}`);
console.log(`Quadriênios: ${quadrienios}`);
console.log(`Salário Final R$ ${salarioFinal.toFixed(2)}`);

console.log('--------------------------------------------');