const prompt = require('prompt-sync')();

const carrinho = [];
let valorTotal = 0;
let opcao = '';


do {
    opcao = prompt('Deseja adicionar mais um produto? (s/n)');

    if (opcao == 's') {
        const produto = prompt('Digite o produto: ');
        const valor = Number(prompt('Digite o valor: '));

        valorTotal = valorTotal + valor;
        
        const novoProduto = {
            produto: produto,
            valor: valor
        };
        carrinho.push(novoProduto);
    }
} while (opcao != 'n');

const listaNomes = carrinho.map(item => item.produto).join(', ');

if (valorTotal > 100) {
    const valorDesconto = valorTotal * 0.10;
    console.log(`\nO valor total foi R$${valorDesconto.toFixed(2)}\nComo passou de R$100,00 ganhou 10% de desconto`);
    console.log(`Produtos: ${listaNomes}\nValor total: R$${valorDesconto.toFixed(2)}`);
} else {
    console.log(`Produtos: ${listaNomes}\nValor total: R$${valorTotal.toFixed(2)}`);
}
