const form = document.querySelector('form');
const inputNumeroDigitado = document.getElementById('numero_digitado');
const resultadoRaiz = document.getElementById('resultado_raiz');


form.addEventListener('submit', (e) => {
    e.preventDefault();

    const numeroDigitado = Number(inputNumeroDigitado.value);

    const raiz = Math.sqrt(numeroDigitado);

    let mensagem;

    if (Number.isInteger(raiz)) {
        // Ou if (raiz % 1 == 0) {} nesse caso o resto da divisão tem que ser 0, para ele ser um número inteiro. Somente uma forma alternativa.
        mensagem = `Raiz: ${raiz}`;
    } else {
        mensagem = `Não há raiz exata para ${numeroDigitado}`;
    }
    
    resultadoRaiz.innerText = mensagem;
})