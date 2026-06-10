const form = document.querySelector('form');
const resultado1 = document.getElementById('resultado1');
const resultado2 = document.getElementById('resultado2');
const resultado3 = document.getElementById('resultado3');


form.addEventListener('submit', (e) => {
    e.preventDefault();

    const valorSaque = Number(form.valor_do_saque.value);

    if (valorSaque % 10 != 0) {
        alert('Valor inválido para notas disponíveis (R$100 R$50 R$10');
        form.valor_do_saque.focus();
        return
    }
    const notasCem = Math.floor(valorSaque / 100);
    let resto = valorSaque % 100;
    const notasCinquenta = Math.floor(resto / 50);
    resto = resto % 50;
    const notasDez = Math.floor(resto / 10);

    if (notasCem > 0) {
        resultado1.innerText = `Notas de R$ 100: ${notasCem}`
    }
    if (notasCinquenta > 0) {
        resultado2.innerText = `Notas de R$ 50 ${notasCinquenta}`
    }
    if (notasDez > 0) {
        resultado3.innerText = `Notas de R$ 10: ${notasDez}`
    }

    console.log(resto);

})