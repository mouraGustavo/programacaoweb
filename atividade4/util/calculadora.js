module.exports = {
    somar: function(a, b){
        return parseInt(a) + parseInt(b);
    }, 
    subtrair: function (a, b){
        return parseInt(a-b);
    }, 
    multiplicar: function(a, b){
        return parseInt(a)*parseInt(b);
    },
    dividir: function(a, b){
        return parseInt(a)/parseInt(b);
    }
    // dividir: (a, b) => a/b
    // multiplicar: (a, b) => a*b
    // subtrair: (a, b) => a-b
    // somar: (a, b) => a+b
}