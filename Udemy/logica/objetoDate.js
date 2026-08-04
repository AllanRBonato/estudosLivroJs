// a função date é uma função construtora e sempre utiliza new e sempre vai começar com a primeira letra maiúscula.
// const tresHoras = 60 * 60 * 3 * 1000;
// const umDia = 60 * 60 * 24 * 1000;
// const data = new Date(0 + tresHoras + umDia); // 01/01/1970 Timestamp unix ou época unix
//                    ano   mês  dia   hora  minutos   milesimos
// const data = new Date(2026,  7,   3,    20,    32,        27); // o mês começa com 0 - mandaria: ano/ mês/ dia/ hora/ minutos/ segundos/ milissegundo
const data = new Date('2026-08-03 20:44:59');
console.log(data.toString());