const prompt = require('prompt-sync')();

let tentativas = 1

while (tentativas <= 3) {

    let login = prompt('Digite o login: ')
    let senha = prompt('digite a senha: ')

    tentativas ++
    if (login == 'allan.bonato' && senha == 'colombo') {
        console.log('A senha esta correta!')
        break
    }
}
