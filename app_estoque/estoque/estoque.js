let produtos = array();

function createProd(id, nome, qtd) {
    let p = {
        id: id,
        nome: nome,
        qtd: qtd
    }
    return p;
};

function addProd(p) {
    produtos.push(p);
};

function editProd(id, qtdAtual) {
    let prodEditado;
    produtos.forEach(p => {
        if(p.id == id){
            p.qtd = qtdAtual;
        }
        prodEditado = p;
    }); 
    return prodEditado;
};

function deleteProd(id) {
    let prodRemoved;
    produtos.forEach(p => {
        if(p.id == id){
            prodRemoved = p;
        }
    }); 
    produtos.pop(prodRemoved);
};

function listProd() {
    return produtos;
};

module.exports = {
    createProd: createProd,
    addProd: addProd,
    listProd: listProd
};