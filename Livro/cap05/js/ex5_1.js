const form = document.querySelector('form');
const resp = document.querySelector('pre');


form.addEventListener('submit', (e) => {
    e.preventDefault();

    const inputNumero = Number(form.input_numero.value);

    let resposta = '';

    for (let i = 1; i <= 10; i++) {
        resposta = `${resposta} ${inputNumero} x ${i}  =  ${inputNumero * i}\n`
    }

    resp.innerText = resposta;
});