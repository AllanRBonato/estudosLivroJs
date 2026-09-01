const cidades = ['Pelotas']; // declara e define conteúdo inicial do vetor

cidades.push('São Lourenço'); // Adiciona cidade ao final do vetor
console.log('-'.repeat(40));
console.log(cidades.toString());
console.log(cidades.join(' - '));

cidades.unshift('Porto Alegre'); // Adiciona ao início e desloca as demais
console.log('-'.repeat(40));
console.log(cidades.toString());
console.log(cidades.join(' - '));

const ultima = cidades.pop(); // Remove a última cidade do vetor
console.log(cidades);
console.log('-'.repeat(40));


const primeira = cidades.shift(); // Remove a primeira e "sobe" as demais
console.log(cidades);
console.log('-'.repeat(40));
