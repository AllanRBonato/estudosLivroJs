const form = document.querySelector('form');
const inputNome = document.getElementById('input_nome');
const inputAltura = document.getElementById('input_altura');
const resultadoPeso = document.getElementById('resultado');


form.addEventListener('submit', (e) => {
    e.preventDefault();

    const nome = inputNome.value;
    const selecaoMasculino = form.radio_masculino.checked;
    const altura = Number(inputAltura.value);

    let peso;
    if (selecaoMasculino) {
        peso = 22 * Math.pow(altura, 2);
        resultadoPeso.style.color = '#2a5a7b'
    } else {
        peso = 21 * Math.pow(altura, 2);
        resultadoPeso.style.color = '#751a8f'
    }

    resultadoPeso.innerText = `${nome}: Seu peso ideal é ${peso.toFixed(2)} Kg`;
})

form.addEventListener( 'reset', () => {
    resultadoPeso.innerText = '';
})