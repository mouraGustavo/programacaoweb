var mat1 = [
    [1,2], [3,4], [5,6],
    [1,2], [3,4], [5,6],
    [1,2], [3,4], [5,6]
];
console.log('matriz: ');
mat1.forEach(element => {
    console.log(element);
});

console.log('matriz transposta: ');
for(i=0; i<mat1.length; i++){
    for(j=0;j<(mat1.length);j++){
        console.log(mat1[i][j]);
    }
}
