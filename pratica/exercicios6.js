const prompt = require('prompt-sync')();

const estoque = [];

let esgotado = 0;
let EstoqueCritico = 0;
let estoqueNormal = 0;

let opcao;

console.log('Digite opção 1 para continuar e opção 0 para parar o sistema');

do {
    opcao = Number(prompt('Digite opção: '));

    if (opcao == 1) {
        const quantidadeProduto = Number(prompt('Digite a quantidade de produtos: '));
        estoque.push(quantidadeProduto);
    }
} while (opcao != 0);

for (let i = 1; i <= estoque.length; i++) {

    const produtos = estoque[i];

    if (produtos == 0) {
        esgotado++
    } else if (produtos < 10) {
        EstoqueCritico++
    } else {
        estoqueNormal++
    }
}

console.log(`\nEstoque atual =>\nProdutos quantidade esgotados: ${esgotado}\nProdutos quantidade críticos: ${EstoqueCritico}\nProdutos quantidade normais: ${estoqueNormal}`);
