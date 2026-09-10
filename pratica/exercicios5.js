const prompt = require('prompt-sync')();

let quantidadeAprovado = 0;
let quantidadeReprovado = 0;
let quantidaderecuperacao = 0;
let notaTotalAprovado = 0;
let notaTotalRecuperacao = 0;
let notaTotalReprovado = 0;


const alunosAprovados = [];
const alunosRecuperacao = [];
const alunosReprovado = [];


for (let i = 1; i <= 6; i++) {
    console.log('\n');
    const aluno = prompt('Digite o nome do aluno: ');
    const nota = Number(prompt('Digite a nota do Aluno: '));

    if (nota >= 7) {
        notaTotalAprovado = notaTotalAprovado + nota;
        quantidadeAprovado++;
        console.log('====> Passou!');
        alunosAprovados.push(aluno);
    } else if (nota >= 5 && nota <= 6.9) {
        notaTotalRecuperacao = notaTotalRecuperacao + nota;
        quantidaderecuperacao++;
        console.log('====> Recuperação!');
        alunosRecuperacao.push(aluno);
    } else {
        notaTotalReprovado = notaTotalReprovado + nota;
        quantidadeReprovado++;
        console.log('====> Reprovado!');
        alunosReprovado.push(aluno);
    }
}

console.log('\n');
console.log('---------------------------------------------------------------------------------------');
console.log(`\nTotal de alunos Aprovados: ${quantidadeAprovado}\nAlunos: ${alunosAprovados}`);
console.log(`\nTotal de alunos em recuperação: ${quantidaderecuperacao}\nAlunos: ${alunosRecuperacao}`);
console.log(`\nTotal de alunos reprovados: ${quantidadeReprovado}\nAlunos: ${alunosReprovado}`);
console.log('\n---------------------------------------------------------------------------------------');
