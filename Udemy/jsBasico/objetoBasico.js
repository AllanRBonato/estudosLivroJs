const prompt = require('prompt-sync')();

// const nome01 = 'Allan';
// const sobrenome01 = 'Bonato';
// const idade01 = 25;

// const nome02 = 'Maria';
// const sobrenome02 = 'Melo';
// const idade02 = 26;

// tudo iso fica muito repetitivo, veja a melhor forma de fazer com objetos.


// Isso é um objeto com {}
// Esse é um objeto literal:
// const pessoa = {
//     nome: 'Allan',
//     sobrenome: 'Bonato',
//     idade: 30
// };

// console.log(pessoa);
// console.log(pessoa.nome);
// console.log(pessoa.sobrenome);
// console.log(pessoa.idade);

// function pessoas(nome, sobrenome, idade) {
//     return {
//         nome,
//         sobrenome,
//         idade
//     }

// }

function criaPessoas() {
    const valorNome = prompt('Digite seu nome: ');
    const valorSobrenome = prompt('Digite seu sobrenome: ');
    const valorIdade = Number(prompt('Digite sua idade: '));

    const pessoaCriada = pessoas(valorNome, valorSobrenome, valorIdade); // aqui agora salva o objeto que a primeira função controi.

    return pessoaCriada;
}

console.log(criaPessoas());



