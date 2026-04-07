//               0123456789.....   <= indices começa sempre com 0
let umaString = 'O rato roeu a roupa de rei de roma.'

console.log(umaString[4]); // Mostra a letra t

console.log(umaString.charAt(7)); // Mostra o r - porem com esse modo não mostra erro quando não tem nada no indice ou não existe.

console.log(umaString.concat(' em', ' um', ' lindo dia.')); // Concatena o texto original com o novo colocado.

console.log(`${umaString} em um lindo dia.`); // Concatena também, porem de uma forma melhor.

console.log(umaString.indexOf('roupa')); // Mostra em qual indice começa a palavra de frente para trás.

console.log(umaString.lastIndexOf('o')); // Começa a buscar de trás pra frente.

console.log(umaString.match(/[a-z]/g));

console.log(umaString.search(/x/)); // acha o indice da letra ou do texto

console.log(umaString.replace('Um', 'Outro')); // troca a palavra escolhida

console.log(umaString.replace(/r/g, '#')); // usa expressão regula e colocando repetidamente com o g na frente e a troca que quer fazer com '' na frente.

console.log(umaString.length); // Ve o tamanho da string

console.log(umaString.slice(2, 6)); // fatia a string conforme onde mandou, 2 sendo o ínicio e o 6 o fim 

console.log(umaString.slice(-3));

console.log(umaString.slice(-5));  // como se tivesse pego a string inteira e diminuido o valor escolhido

console.log(umaString.slice(-5, umaString.length - 1)); 
// ou
console.log(umaString.slice(-5, -1));

// console.log(umaString.substring(umaString.length - 5, umaString.length - 1)); // A mesma coisa que de cima mas com mais código

console.log(umaString.split('r'));

console.log(umaString.split(' ', 2));