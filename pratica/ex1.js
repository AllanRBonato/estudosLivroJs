const prompt = require('prompt-sync')()

const velocidade = Number(prompt('Digite a velocidade do condutor: '));

if (velocidade > 80) {
    console.log('Você foi multado por excesso de velocidade!')
} else {
    console.log('Velocidade dentro do limite permitido.')
}