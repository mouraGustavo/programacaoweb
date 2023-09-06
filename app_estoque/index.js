const express = require("express");
const estoque = require("./estoque/estoque");
const app = express();

app.get("/", function(req, res){
    res.send("API estoque running");
});


app.get("/api/adicionar/:id/:nome/:qtd", (req, res)=>{
    let id = req.params.id;
    let nome = req.params.nome;
    let qtd = req.params.qtd;
    let prod = estoque.createProd(id, nome, qtd);
    estoque.addProd(id, nome, prod);

    res.json(prod);
});

app.get("/api/listar", (req, res)=>{
    res.json(estoque.listProd());
});

app.get("/api/editar/:id/:qtdAtual", (req, res)=>{
    let id = req.params.id;
    let qtdAtual = req.params.qtdAtual;
    let prod = estoque.editProd(id, qtdAtual);
    res.json(prod);
});

app.get("/api/remover/:id/", (req, res)=>{
    let id = req.params.id;
    res.json(estoque.deleteProd(id));
});

const PORT = 8080;
app.listen(PORT, ()=>{
    console.log("Server running on port " + PORT);
});