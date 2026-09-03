const frm = document.querySelector('form');
const respNome = document.querySelector('span');
const respLista = document.querySelector('pre');


const pacientes = [];

function atualizarLista() {
    let lista = '';

    pacientes.forEach((pacientes, i) => {
        lista += `${i + 1}. ${pacientes}\n`
    });
    respLista.innerText = lista;
}

frm.addEventListener('submit', (e) => {
    e.preventDefault();

    const nome = frm.pacienteInput.value;

    pacientes.push(nome);
    atualizarLista();
    
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
    atualizarLista();
    
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
    atualizarLista();
})