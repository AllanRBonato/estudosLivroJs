const prompt = require('prompt-sync')();

let tentativas = 0;

do {
    tentativas++;

    const numeroDigitado = Number(prompt('Adivinhe o número: '));
    
    if (numeroDigitado != 7) {
        console.log(`Número errado\nTente devolta\nTentativa: ${tentativas}`);
        continue;
    } else {
        console.log(`Parabéns, descobriu o número\nNúmero secreto é: ${numeroDigitado}\nTentativas até descobrir: ${tentativas}`);
        break
    }
} while (true);
