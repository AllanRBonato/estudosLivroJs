const logs = ['ERRO', 'INFO', 'AVISO', 'ERRO', 'ERRO', 'INFO', 'AVISO'];

const logsCriticos = [];
let aviso = 0;

for (let i = 0; i <= logs.length; i++) {
    const avisos = logs[i];

    if (avisos === 'ERRO') {
        logsCriticos.push(avisos);
        aviso++;
    }
}

console.log(`Foram encontrados ${aviso} erros críticos no sistema`);
console.log(...logsCriticos);
