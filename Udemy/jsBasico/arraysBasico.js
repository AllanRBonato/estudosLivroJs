// Os arrays tem indices por elemento, não por unidade.
// O array é um objeto.
// é bom sempre usar o mesmo tipo de dado dentro da array para ficar mais organizado.
// Melhor forma de adicionar os elemento é com push, que é no final, e shift que é no começo, porem o problema é que esse altera os indices.

//                 0        1        2
const alunos = ['Allan', 'Maria', 'João'];


console.log(typeof alunos); // Retorna um onjeto
console.log(alunos instanceof Array);

// alunos.push('Luiza');
// alunos.push('Eduardo');
// console.log(alunos.slice(0, 3)); // fatiar o array, mesma coisa que com string
// console.log(alunos.slice(0, -3)); // fatia com negativos, utiliza o tamanho do array menos o número negativo
// console.log(alunos[50]); // Sempre que selecionar um indice que não existe o resultado é undefined
// delete alunos[1]; // Retira o elemento sem alterar os indices
// console.log(alunos);
// const removido = alunos.shift(); // Remove no começo e alterar os indices
// const removido = alunos.pop(); // Remove o último não altera o indice pq retira do final
// console.log(removido);
// console.log(alunos);
// alunos.unshift('Luiza'); // Adicionar no começo porem desloca todos os indices
// alunos.unshift('fábio');
// alunos.push('Otávio'); - adiciona no fim
// alunos.push('Fábio');
// console.log(alunos.length);
// console.log(alunos);
// alunos[alunos.length] = 'Luiza' - altera no fim
// alunos[alunos.length] = 'Fábio'
// alunos[alunos.length] = 'Luana'
// alunos[0] = 'Eduardo';
// alunos[3] = 'Luiza'
// console.log(alunos);
// console.log(alunos[0]); aqui acesso os elementos por indices
// console.log(alunos[2]);


