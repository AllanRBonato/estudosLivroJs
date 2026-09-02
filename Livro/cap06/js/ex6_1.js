const frm = document.querySelector('form');
const respNome = document.querySelector('span');
const respLista = document.querySelector('pre');

const pacientes = [];

frm.addEventListener('submit', (e) => {
    e.preventDefault();

    const nome = frm.pacienteInput.value;

    pacientes.push(nome);

    let lista = '';

    for (let i = 0; i < pacientes.length; i++) {
        lista += `${i + 1}. ${pacientes[i]}\n`;
    }

    respLista.innerText = lista;
    frm.pacienteInput.value = '';
    frm.pacienteInput.focus();
});

frm.btnUrgencia.addEventListener('click', () => {
    if (!frm.checkValidity()) {
        alert('Informe o nome do paciente a ser atendido em caráter de urgência');
        frm.pacienteInput.focus();
        return;
    }
    const nome = frm.pacienteInput.value;
    pacientes.unshift(nome);
    let lista = ''
    pacientes.forEach((pacientes, i) => (lista += `${i + 1}. ${pacientes}\n`));
    respLista.innerText = lista;
    frm.pacienteInput.value = '';
    frm.pacienteInput.focus();
});

frm.btnAtender.addEventListener('click', () => {
    if (pacientes.length == 0) {
        alert('Não há pacientes na lista de espera');
        frm.pacienteInput.focus();
        return;
    }
    const atender = pacientes.shift();
    respNome.innerText = atender;
    let lista = '';
    pacientes.forEach((pacientes, i) => (lista += `${i + 1}. ${pacientes}\n`));
    respLista.innerText = lista;
})