const form = document.querySelector('form');
const inputHoraBrasil = document.getElementById('hora_brasil');
const resultadoFuso = document.getElementById('resultado_fuso');

form.addEventListener('submit', (e)=> {
    e.preventDefault();

    const horaBrasil = Number(inputHoraBrasil.value);

    let fusoFranca = horaBrasil + 5;

    if (fusoFranca > 24) {
        fusoFranca = fusoFranca - 24;
    }

    resultadoFuso.innerText = `Hora na França: ${fusoFranca.toFixed(2)}`;
})