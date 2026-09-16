const prompt = require('prompt-sync')();

const usuariosCadastrados = ['allan', 'admin', 'dev123', 'suporte', 'visitante'];


const pesquisa = prompt('Digite a pesquisa: ');

// O includes já percorre o array sozinho e devolve true ou false
if (usuariosCadastrados.includes(pesquisa)) {
    console.log(`Usuário encontrado no sistema! - ${pesquisa}`);
} else {
    console.log('Usuário não existe.');
}
