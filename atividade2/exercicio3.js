function multiMatrizes(matrizA, matrizB) {
    const rowsA = matrizA.length;
    const colsA = matrizA[0].length;
    const rowsB = matrizB.length;
    const colsB = matrizB[0].length;

    if (colsA !== rowsB) {
        return "Não é possível calcular"; // Verificação para multiplicação válida
    }

    const resultMatriz = [];

    for (let i = 0; i < rowsA; i++) {
        resultMatriz[i] = [];
        for (let j = 0; j < colsB; j++) {
            let sum = 0;
            for (let k = 0; k < colsA; k++) {
                sum += matrizA[i][k] * matrizB[k][j];
            }
            resultMatriz[i][j] = sum;
        }
    }

    return resultMatriz;
}

const matrizA = [
    [1, 2],
    [3, 4]
];

const matrizB = [
    [5, 6],
    [7, 8]
];
console.log("Matriz A: ");
matrizA.forEach(row => {
    console.log(row.join('\t'));
}),
console.log('------------------------------------------');
console.log("Matriz B: ");
matrizB.forEach(row => {
    console.log(row.join('\t'));
}),
console.log('------------------------------------------');
const resultMatriz = multiMatrizes(matrizA, matrizB);

if (typeof resultMatriz === "string") {
    console.log(resultMatriz);
} else {
    console.log("Resultado:");
    resultMatriz.forEach(row => {
        console.log(row.join('\t'));
    });
}
