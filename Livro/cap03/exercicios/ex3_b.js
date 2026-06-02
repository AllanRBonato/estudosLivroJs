const prompt = require('prompt-sync')();

const pesoRacao = Number(prompt('Digite quanto de ração em Kg: '));
const consumoPorDia = Number(prompt('Digie o quanto o gato come por dia (gr): '));

const quilo = pesoRacao * 1000
const duracao = Math.floor(quilo / consumoPorDia);
// const sobra = quilo - (consumoPorDia * duracao)
const sobra = quilo % consumoPorDia

console.log('--------------------------------------------');

console.log(`Peso da Ração (Kg): ${pesoRacao}Kg`);
console.log(`Consumo diário (gr): ${consumoPorDia}gr`);
console.log(`Duração: ${duracao} dias`);
console.log(`Sobra: ${sobra}gr`);

console.log('--------------------------------------------');