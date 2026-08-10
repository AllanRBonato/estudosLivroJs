const prompt = require('prompt-sync')();

const ano = Number(prompt('Digite o ano: '));
const mes = Number(prompt('Digite o mês: '));
const dia = Number(prompt('Digite o dia: '));



const data = new Date(ano, mes - 1, dia);
let diaSemana = data.getDay();
let diaSemanaTexto

// function obeterDiaSemana() {
//     const diasDaSemana = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']

//     return diasDaSemana[diaSemana];
// }


// console.log(data, diaSemana, obeterDiaSemana());

switch (diaSemana) {
    case 0:
        diaSemanaTexto = 'Domingo';
    break;
    case 1:
        diaSemanaTexto = 'Segunda';
    break;
    case 2:
        diaSemanaTexto = 'Terça';
    break;
    case 3:
        diaSemanaTexto = 'Quarta';
    break;
    case 4:
        diaSemanaTexto = 'Quinta';
    break;
    case 5:
        diaSemanaTexto = 'Sexta';
    break;
    case 6:
        diaSemanaTexto = 'Sábado';
    break;
}

console.log(diaSemana, diaSemanaTexto);