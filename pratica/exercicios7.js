const temposDeResposta = [120, 155, 95, 210, 110, 145];

let tempoMaximo = 0;
let alertasDeLentidao = 0; 

for (let i = 0; i < temposDeResposta.length; i++) {
    const tempoAtual = temposDeResposta[i];

    if (tempoAtual > tempoMaximo) {
        tempoMaximo = tempoAtual;
    }

    if (tempoAtual > 150) {
        alertasDeLentidao++;
    }
}

console.log(`\nAlertas de lentidão: ${alertasDeLentidao}. O pico de lentidão foi de ${tempoMaximo} ms\n`);
