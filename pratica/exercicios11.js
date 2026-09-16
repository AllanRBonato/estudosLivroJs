const aplicacoes = [
    { nome: 'App Vendas', memoriaUsada: 85 },
    { nome: 'App Estoque', memoriaUsada: 45 },
    { nome: 'App RH', memoriaUsada: 92 }
];

let memoriaTotal = 0;

for (let i = 0; i < aplicacoes.length; i++) {
    const app = aplicacoes[i];
    memoriaTotal = memoriaTotal + app.memoriaUsada; // Somando para a reconciliação

    if (app.memoriaUsada >= 80) {
        console.log(`[ALERTA] ${app.nome} com muita memória: ${app.memoriaUsada}%`);
    } // ...
}

const media = memoriaTotal / aplicacoes.length;
console.log(`Média de uso global: ${media}%`);
