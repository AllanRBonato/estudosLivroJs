const prompt = require('prompt-sync')();

let quantidadeProdutoCaro = 0;
let quantidadeProdutoBarato = 0;
let valorTotalCaro = 0;
let valorTotalBarato = 0;
let produtoCaros = '';
let produtoBarato = '';

const produtos = [];

for (let i = 1; i <= 5; i++) {
    console.log(`\n--- Produto totais ${i} ---`);
    const produto = prompt('Digite o produto: ').trim();
    const valor = Number(prompt('Digite o valor: '));

    if (produtos.includes(produto)) {
        console.log(`O produto ${produto} já foi adicionado! Digite outro produto.`);
        i--;
        continue;
    }

    produtos.push(produto);    

    if (valor >= 50) {
        quantidadeProdutoCaro++
        valorTotalCaro = valorTotalCaro + valor;
        console.log('\n-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-');
        console.log(`Esse produto é caro!`);
        console.log(`Quantidade: ${quantidadeProdutoCaro}, porduto: ${produto} - valor: ${valor.toFixed(2)}`);
        console.log(`Valor total: ${valorTotalCaro.toFixed(2)}\n`);
    } else {
        quantidadeProdutoBarato++
        valorTotalBarato = valorTotalBarato + valor;
        console.log('\n-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-');
        console.log(`Esse produto é barato!`);
        console.log(`Quantidade: ${quantidadeProdutoBarato}, porduto: ${produto} - valor: ${valor.toFixed(2)}`);
        console.log(`Valor total: ${valorTotalBarato.toFixed(2)}\n`);
    }
}
