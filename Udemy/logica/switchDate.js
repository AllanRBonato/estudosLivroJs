const prompt = require('prompt-sync')();

const ano = Number(prompt('Digite o ano: '));
const mes = Number(prompt('Digite o mês: '));
const dia = Number(prompt('Digite o dia: '));



const data = new Date(ano, mes - 1, dia);
const diaSemana = data.getDay();

function obeterDiaSemana() {
    const diasDaSemana = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']

    return diasDaSemana[diaSemana];
}


console.log(data, diaSemana, obeterDiaSemana());