const calc = require('./util/calculadora');

console.log("Somar: "+calc.somar(1,2));
console.log("Subtrair: "+calc.subtrair(10,2));
console.log("Multiplicar: "+calc.multiplicar(551,227));
console.log("Dividir: "+calc.dividir(100,25));

const express = require('express');
const app = express();

app.get('/somar/:a/:b', (req, res) => {
    let a = req.params.a;
    let b = req.params.b;
    res.send(`${a} + ${b} = ${calc.somar(a,b)}`);
});
app.get('/subtrair/:a/:b', (req, res) => {
    let a = req.params.a;
    let b = req.params.b;
    res.send(`${a} - ${b} = ${calc.subtrair(a,b)}`);
});
app.get('/multiplicar/:a/:b', (req, res) => {
    let a = req.params.a;
    let b = req.params.b;
    res.send(`${a} * ${b} = ${calc.multiplicar(a,b)}`);
});
app.get('/dividir/:a/:b', (req, res) => {
    let a = req.params.a;
    let b = req.params.b;
    res.send(`${a} / ${b} = ${calc.dividir(a,b)}`);
});
const PORT = 8081;
app.listen(PORT, function () {
    console.log(`Servidor rodando na porta ${PORT}`);
});