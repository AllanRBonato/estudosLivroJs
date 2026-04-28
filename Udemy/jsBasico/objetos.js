// const nome01 = 'Allan';
// const sobrenome01 = 'Bonato';
// const idade01 = 30;

// const nome02 = 'Maria';
// const sobrenome02 = 'Melo';
// const idade02 = 25;

// const pessoa1 = {
//     nome: 'Allan',
//     sobrenome: 'Bonato',
//     idade: 30
// }

// console.log(`${pessoa1.nome} ${pessoa1.sobrenome}, tem ${pessoa1.idade} anos.`);

// function criaPessoa (nome, sobrenome, idade) {
//     return {
//         nome,
//         sobrenome,
//         idade
//     };
// }

// const pessoa1 = criaPessoa('Allan', 'Bonato', 30);
// const pessoa1 = criaPessoa('Maria', 'Melo', 25);
// const pessoa1 = criaPessoa('Amanda', 'Bonato', 29);
// const pessoa1 = criaPessoa('Ana', 'Bonato', 25);
// const pessoa1 = criaPessoa('Anderson', 'Bonato', 24);
// console.log(pessoa1);

const pessoa1 = {
    nome: 'Allan',
    sobrenome: 'Bonato',
    idade: 30,

    fala() {
        console.log(`A minha idade atual é ${this.idade}.`);
    },

    incrementaIdade() {
        this.idade++;
    }
}

pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();