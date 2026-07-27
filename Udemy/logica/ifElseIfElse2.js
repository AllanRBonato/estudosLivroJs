const prompt = require('prompt-sync')();
const numero = Number(prompt('Digite o núemro:'))

if (numero >= 0 && numero <= 5) {
    console.log('O número está ente 0 e 5');
} else if (numero >= 6 && numero <= 8) {
    console.log('O número esta ente 6 e 8');
} else if (numero >= 9 && numero <= 11) {
    console.log('O número está ente 9 e 11');
} else {
    console.log('O número não esta entre 0 e 11');
}