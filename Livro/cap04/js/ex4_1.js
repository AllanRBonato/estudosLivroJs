const form = document.querySelector('form');
const inputNomeDoAluno = document.getElementById('nome_do_aluno');
const inputPrimeiraNota = document.getElementById('primeria_nota');
const inputSegundaNota = document.getElementById('segunda_nota');
const respostaMedia = document.getElementById('resultado_media');
const respotaSituacao = document.getElementById('resultado_situacao');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const nomeAluno = inputNomeDoAluno.value;
    const primeriaNota = Number(inputPrimeiraNota.value);
    const segundaNota = Number(inputSegundaNota.value);

    const media = (primeriaNota + segundaNota) / 2;

    let mensagemSituacao = '';

    if (media >= 7) {
        mensagemSituacao = `Parabéns ${nomeAluno}! Você foi aprovado(a)!`
        respotaSituacao.style.color = 'green';
    } else if (media >= 4) {
        mensagemSituacao = `Atenção ${nomeAluno}, necessário fazer prova de recuperação!`;
        respotaSituacao.style.color = 'orange';
    } else {
        mensagemSituacao = `${nomeAluno}, você foi reporvado(a)!`;
        respotaSituacao.style.color = 'red';
    }

    respostaMedia.innerText = `Médias das notas: ${media.toFixed(2)}`;
    respotaSituacao.innerText = mensagemSituacao;
})