const prompt = require('prompt-sync')()

const idade = Number(prompt('Digite a idade: '));

if (idade > 60) {
    console.log('idoso')
} else if (idade >= 18 && idade <= 50) {
    console.log('Adulto')
} else if (idade >= 12 && idade <= 17) {
    console.log('Adolecente')
} else {
    console.log('Criança')
}