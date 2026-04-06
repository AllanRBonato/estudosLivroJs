//               01234567   <= indices começa sempre com 0
let umaString = 'Um texto'

console.log(umaString[4]); // Mostra a letra e

console.log(umaString.charAt(6)); // Mostra o t - porem com esse modo não mostra erro quando não tem nada no indice ou não existe.

console.log(umaString.concat(' em', ' um', ' lindo dia.')); // Concatena o texto original com o novo colocado.

console.log(`${umaString} em um lindo dia.`); // Concatena também, porem de uma forma melhor.

console.log(umaString.indexOf('texto')); // Mostra em qual indice começa a palavra de frente para trás.

console.log(umaString.lastIndexOf('o')); // Começa a buscar de trás pra frente.


