function printEvenNumbers(n) {

    for (let i = 1; i <= n; i++) {
        // Check if the number is even
        if (i % 2 === 0) {
            console.log(i);
        }
    }
}
printEvenNumbers(10);
