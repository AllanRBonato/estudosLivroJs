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


// let somaValor = 0;
// let quantidadeProduto = 0;
// let opcao;

// let listaProdutos = [];

// do {
//     opcao = prompt('Digite a opção: ');

//     if (opcao == 1) {
//         const produto = prompt('Digite o produto: ');
//         const valor = Number(prompt('O valor desse produto: '));
//         listaProdutos.push(produto);

//         somaValor = somaValor + valor;
//         quantidadeProduto++;
//     }

// } while (opcao != 0)

// console.log(`\nLista de produtos comprados: ${listaProdutos}\n`);
// console.log(`Fim da compra, o valor total dos ${quantidadeProduto} produtos é R$ ${somaValor.toFixed(2)}`);


// Cofrinho:

let soma = 0;


do {
    if (soma < 150) {
        console.log('Faça depositos de: R$ 10; R$ 20; R$ 50\n');
        const valorDepositado = Number(prompt('Digite o valor a depositar: '));

        soma += valorDepositado;

        console.log(`\nSoma até o momento: R$ ${soma}\n`);
    }

} while (soma != 150);

console.log(`\nParabéns, tu atingiu o valor total de R$150,00`);
