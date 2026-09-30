const form = document.querySelector('form');
const respNome = document.querySelector('span');
const respLista = document.querySelector('pre');

const pacientes = [];

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const nome = form.inPaciente.value;
    pacientes.push(nome);

    let lista = '';

    for (let i = 0; i < pacientes.length; i++) {
        lista += `${i + 1}. ${pacientes[i]}\n`;
    }

    respLista.innerText = lista;
    form.inPaciente.value = '';
    form.inPaciente.focus();
});

form.btUrgencia.addEventListener('click', () => {
    // Verifica se as validações do form estãoi ok (no caso, paciente is required
    if (!form.checkValidity()) {
        alert('Informe o nome do paciente a ser atendido em caráter de urgência');
        form.inPaciente.focus();
        return;
    }
    const nome = form.inPaciente.value;
    pacientes.unshift(nome); //Adiciona o paciente no início do vetor.
    let lista = '';
    pacientes.forEach((pacientes, i) => (lista += `${i + 1}. ${pacientes}\n`));
    respLista.innerText = lista;
    form.inPaciente.value = '';
    form.inPaciente.focus();
});

form.btAtender.addEventListener('click', () => {
    if (pacientes.length == 0) {
        alert('Não há pacientes na lista de espera');
        form.inPaciente.focus();
        return;
    }
    const atender = pacientes.shift(); //Remove do início da fila (e obtém nome);
    respNome.innerText = atender;
    let lista = '';
    pacientes.forEach((pacientes, i) => (lista += `${i + 1}. ${pacientes}\n`));
    respLista.innerText = lista;
});

// Os 3 eventos interagem com o array, porem o primeiro é o responsável por criar os elemento dentro do array e o segundo verifica se esta tudo ok com o primeiro evento, se o form esta tudo ok, e o terceiro verifica se o array não esta vazio.