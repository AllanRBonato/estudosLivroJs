/*
Operadores de comparação

> maior que.
>= maior que ou igual a.
< menor que.
<= menor que ou igual a.
== igualdade (valor) ************* Não utiliza para comparações pois ele não compara o tipo, se eu colocar um 10 e um '10' como string ele vai retornar como true.
=== igualdade estrita (valor e tipo).
!= diferente (valor) ************* Não utiliza para comparações pois não faz a comparação de tipos.
!== diferente estrito (valor e tipo).
*/

// Exemplo de maior que:
// console.log(10 > 5);
// Retornar true ou false

// Exemplo de maior que ou igual a:
// const comp = 10 >= 5;
// console.log(comp);
// Vai retornar uma das duas, no caso 10 é maior que 5 porém não é igual.
// Nesse caso pode ser qualquer uma delas, sendo menor ou igual


// Exemplo de menor que:
// console.log(10 < 5);
// Mesma coisa que o maior que, vai retornar true ou false

// Exemplo de menor que ou igual a:
// const comp = 10 <= 5;
// console.log(comp);
// nesse caso faz duas comparações também, mas o exemplo retorna false pois 10 não é menor que 5 e não é igual.


// Exemplo de igualdade com ===:
// const num1 = 10;
// const num2 = '10'; // Ou se fosse const num2 = 11; daria falso também, mesmo com tipo e valores diferentes
// const comp = num1 === num2;
// console.log(comp);


// Exemplo de diferente:
// const num1 = 10;
// const num2 = 11;
// const comp = num1 !== num2;
// console.log(comp);
// Faz a comparação de diferença de dados.
