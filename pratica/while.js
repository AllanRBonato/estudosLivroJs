// let bateria = 100;

// while (bateria > 0) {
//     console.log(`Usando o celular.... bateria em ${bateria}`);

//     bateria -= 20;
// }

// console.log('O celular desligou!');

const prompt = require('prompt-sync')();

// console.log('Tente adivinha o número secreto\nTem 3 tentativas!');
// console.log('----------------------------------------------------\n');

// const numeroSecreto = 43;
// let tentativas = 0;
// let ganhou = false;

// while (tentativas < 3) {
//     const numeroAdivinha = Number(prompt('Adivinhe o número: '));

//     tentativas++;

//     if (numeroAdivinha == numeroSecreto) {
//         console.log(`Parabéns, descobriu o número secreto: ${numeroSecreto}`);
//         ganhou = true;
//         break;
//     } else if (tentativas < 3){
//         console.log(`\nErrou o número, tente de volta.\nTem mais ${3 - tentativas} tentativas`);
//         console.log('----------------------------------------------------\n');
//     } 
// }

// if (ganhou == false) {
//     console.log('\n************************');
//     console.log('**     Game Over!     **');
//     console.log('************************');
// }


let somaValor = '';
let quantidadeProduto = '';
let opcao;

do {
    somaValor++
    quantidadeProduto++

    opcao = prompt('Digite a opção: ');

    if (opcao == 1) {
        const produto = prompt('Digite o produto: ');
        const valor = prompt('O valor desse produto: ');
    }

} while (opcao != 0)

console.log(`Fim da compra, o valor total dos ${quantidadeProduto} produtos é R$ ${somaValor}`);
