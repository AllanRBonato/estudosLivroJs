/* 
    Aritméticos 
    +   Adição e também a concatenação (unir dois valores) 
    -   Subtração 
    /   Divisão
    *   Multiplicação
    **  Potenciação (elevar um número)
    %   Resto da divisão (retorna)

    ordem:
    ()      |
    **      |
    *       |
    /       |
    %       |
    +       |
    -       |
            v
*/

/*
    exemplo de contator incremento ++:

    let contador = 1;
    contador++; - 2
    contador++; - 3
    contador++; - 4
    contador++; - 5
    console.log(contador);

    o ++ pode ser antes ou depois, ele vai contar igual.
    Antes (pré) - Primeiro faz a conta de depois retorna o valor
    depois (pós) - Primerio executa a ação e depois faz o incremento do valor
*/

/* 
    Exemplo de decremento --:

    let contador 10;
    contador--; -10;
    console.log(contador);

    Assim como o ++ ele também tam antes (pré) e o depois (pós) interferindo como é mostrado o valor.
*/

/*
    Operadores de atribuição =>

    const passo = 50;
    let contador = 0;
    contador += passo;  - Isso é igual -> contador = contador + 50;


    ou


    let contador = 0;
    contador += 2;
    contador += 2;
    contador += 2;
    contador += 2;
    console.log(contador);


    ou


    let contador = 2;
    contador *= 2;
    contador *= 2;
    contador *= 2;
    contador *= 2;
    console.log(contador);
    

    ou


    let contador = 2;
    contador **= 10;
    console.log(contador);
*/

const num1 = 10;
const num2 = 4;

console.log(num1 + num2);   // Adição
console.log(num1 - num2);   // Subtração
console.log(num1 / num2);   // Divisão
console.log(num1 * num2);   // Multiplicação
console.log(num1 ** num2);  // Potenciação
console.log(num1 % num2);   // Resto da divisão
console.log((num1 + num2) * num2);  // Ordem de precedência