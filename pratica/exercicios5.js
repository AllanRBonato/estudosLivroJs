const prompt = require('prompt-sync')();

let quantidadeAprovado = 0;
let quantidadeReprovado = 0;
let quantidaderecuperacao = 0;
let aprovado = '';
let reprovado = '';
let recuperacao = '';
let notaTotalAprovado = 0;
let notaTotalRecuperacao = 0;
let notaTotalReprovado = 0;


const alunosAprovados = [];
const alunosRecuperacao = [];
const alunosReprovado = [];


for (let i = 1; i <= 6; i++) {
    const aluno = prompt('Digite o nome do aluno: ');
    const nota = Number(prompt('Digite a nota do Aluno: '));

    alunosAprovados.push(aluno);
    alunosRecuperacao.push(aluno);
    alunosReprovado.push(aluno);


    if (nota >= 7) {
        notaTotalAprovado = notaTotalAprovado + nota;
        quantidadeAprovado++;
        console.log('\nvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv');
        console.log(`Quantidade aprovado(s) ${quantidadeAprovado}\n${alunosAprovados}\nCom média 7`);
        console.log(`Nota taotal dos alunos: ${notaTotalAprovado}`);
    } else if (nota >= 5 && nota <= 6.9) {
        notaTotalRecuperacao = notaTotalRecuperacao + nota;
        quantidaderecuperacao++;
        console.log('\n-----------------------------------------------------------');
        console.log(`Quantidade em recuperação: ${quantidaderecuperacao}\n${alunosRecuperacao}\ncom média entre 5 e 6,9`);
        console.log(`Nota total dos alunos: ${notaTotalRecuperacao}`);
    } else {
        notaTotalReprovado = notaTotalReprovado + nota;
        quantidadeReprovado++;
        console.log('\nX-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X');
        console.log(`Quantidade reprovado(s): ${quantidadeReprovado}\n${alunosReprovado}\ncom média menor que 5`);
        console.log(`Nota total dos alunos: ${notaTotalReprovado}`);
    }
}

