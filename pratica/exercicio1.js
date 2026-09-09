let contador = 1;


for (let i = 1; i <= 20; i++) {
    if (i % 2 == 0) {
        console.log(`${contador++} - O número ${i} é Par`);
    } else {
        console.log(`${contador++} - O número ${i} é impar`);
    }
}
