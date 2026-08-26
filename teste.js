const prompt = require('prompt-sync')();

let tentativas = 0

while (tentativas <= 3) {

    let login = prompt('Digite o login: ')
    let senha = prompt('digite a senha: ')

    tentativas ++
    console.log(`tentativa ${tentativas}, faltam mais ${3 - tentativas}`);
    if (login == 'allan.bonato' && senha == 'colombo') {
        console.log('A senha esta correta!')
        break
    }
}

