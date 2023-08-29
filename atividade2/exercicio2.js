var mat1 = [
    [1, 2, 3, 4],
    [1, 2, 3, 4],
    [1, 2, 3, 4],
];

console.log('Matriz:');
mat1.forEach(row => {
    console.log(row.join('\t'));
});

console.log('Matriz transposta:');
const matTransposed = [];

for (let i = 0; i < mat1[0].length; i++) {
    matTransposed.push([]);
    for (let j = 0; j < mat1.length; j++) {
        matTransposed[i].push(mat1[j][i]);
    }
}

matTransposed.forEach(row => {
    console.log(row.join('\t'));
});