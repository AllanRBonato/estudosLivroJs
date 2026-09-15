const prompt = require('prompt-sync')();

let tentativas = 0;

do {
    tentativas++
    const login = prompt('Digite seu login: ');
    const senha = prompt('Digite sua senha: ');

    if (login == 'allan' && senha == 'secreta123') {
        console.log('Acesso liberado!');
        break
    } else {
        console.log('\nLogin ou senha errado, tente de volta');
        console.log(`Tentativa ${tentativas}, ainda falta ${3 - tentativas} tentativas\n`);
        continue
    }
} while (tentativas <= 2)
