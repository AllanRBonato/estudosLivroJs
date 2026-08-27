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

// let soma = 0;

// do {
//     console.log('Faça depositos de: R$ 10; R$ 20; R$ 50\n');
//     const valorDepositado = Number(prompt('Digite o valor a depositar: '));

//     soma += valorDepositado;

//     console.log(`\nSoma até o momento: R$ ${soma}\n`);

// } while (soma < 150);


// if (soma == 150) {
//     console.log(`\nParabéns, atingiu o valor desejado de R$ ${soma}`);
// } else {
//     console.log(`\nParabéns, atingiu mais que o valor desejado, R$ ${soma}`);
// }

// quando se precisa colocar todo o código englobado dentro de um IF no seu laço é provavel a condição do IF pode ser a condição do laço. o proprio laço pode fazer a função sem precisar do IF.


// for (let i = 10; i > 0; i--) {
//     if (i % 2 == 1) {
//         console.log(`Tempo: ${i}`);
//     }
// }

// console.log('Booom');

// for (let i = 1; i <= 15; i++) {
//     if (i === 13) {
//         continue
//     }

//     console.log(`Andar ${i}`);
// }


// const fatorial = Number(prompt('Digite um número: '))
// let resultado = 1;

// for (let i = fatorial; i > 0; i--) {
//     console.log(resultado);
//     resultado = resultado * i;
// }
// console.log(`O fatorial é: ${resultado}`);

// FizBuzz

for (let i = 1; i <= 50; i++) {
    const divisorTres = i % 3 == 0;
    const divisorCinco = i % 5 == 0;

    if (divisorTres && divisorCinco) { // Começa com essa verificação pois se tivesse com o divisorTres ele ia escrever buzz, pois, por exemplo: 15 é divisivo por 3 e ele não ia ler a próxima condição e ia mostrar que era so buz sem passar para a condição é divisivel por 3 e 5.
        console.log('FizzBuzz');
    } else if (divisorTres) {
        console.log('Fizz');
    } else if (divisorCinco) {
        console.log('Buzz');
    } else {
        console.log(i);
    }
}





