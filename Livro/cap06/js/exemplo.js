const idades = [5, 6, 8, 3, 6, 9];

console.log(idades.indexOf(6));  // Retorna o indice 1 - A busca ocorre desde o início do vetor.
console.log(idades.lastIndexOf(6));  // Retorna o indice 4 - A busca é do final ao início do vetor.
console.log(idades.indexOf(7));  // Retorna -1 - Quando o valor pesquisado no vetor não existe, sempre retorna -1.
console.log(idades.includes(3));  // Retorna true - Retorna verdadeiro ou falso de acordo com a existência do conteúdo do vetor.