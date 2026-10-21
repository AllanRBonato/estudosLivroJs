const form = document.querySelector('form');
const respErros = document.querySelector('#outErros');
const respChances = document.querySelector('#outChances');
const resDica = document.querySelector('#outDica');

const erro = [];
const sorteado = Math.floor(Math.random() * 100);
const CHANCES = 6; // número de vezes de tentativas.

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const numero = Number(form.inNumero.value);

    if (numero == sorteado) {
        resDica.innerText = `Parabéns!! Número sorteado: ${sorteado}`;
        form.btSubmit.disabled = true; // Troca status dos botões.
        form.btNovo.className = 'exibe'
    }
})