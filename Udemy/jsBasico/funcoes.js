const prompt = require('prompt-sync')();

// nome de funções é a mesma nome de nomear as variáveis.

// Quando declarado uma função da forma normal, como no exemplo em baixo, não precisa colocar ; no fim dos }.
// function saudacao(nome) {
//     return  `Bom dia, ${nome}`;
// }

// const var_func = saudacao("allan");
// console.log(var_func);


// function soma(x, y) {
//     const resultado = x + y;
//     return resultado;
// }

// function dados() {
//     const primeiroValor = Number(prompt('Digite o primeiro valor: '));
//     const segundoValor = Number(prompt('Digite o segundo valor: '));

//     const resultadoDaSoma = soma(primeiroValor, segundoValor);

//     return resultadoDaSoma;
// }

// console.log(dados());



// function mensagem(dado) {
//     if (dado && dado.toLowerCase() == 'allan') {
//         return 'Olá Allan, seja bem vindo';
//     } else {
//         return 'Nome errado!';
//     }
// }

// function valor() {
//     const valorRecebido = prompt('Digite o seu nome: ');

//     const verificacaoDados = mensagem(valorRecebido);

//     return verificacaoDados;
// }

// console.log(valor());



// No momento que dou um valor para os parametros eles assumem eles quando não é dado nenhum valor para eles
// function soma(x = 1, y = 1) {
//     const resultado = x + y;
//     return resultado;
// }

// const resultado = soma();
// console.log(resultado);


// Nesse caso precisa de ; no final da função - função anonima
// const raiz = function (n) {
//     return n ** 0.5;
// };

// console.log(raiz(9));


// arrow function
const raiz = (n) => {
    return n ** 0.5
};

// forma reduzida da função de cima:
// const raiz = n => n ** 0.5;

// forma normal:
// const raiz = function(n) {
//     return n ** 0.5;
// }

console.log(raiz(9));