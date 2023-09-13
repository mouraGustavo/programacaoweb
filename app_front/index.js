const { application } = require('express');
const express = require('express');
const mustache = require('mustache-express');
const bodyParser = require("body-parser");
const app = express();

app.engine('html', mustache());
app.set('view engine', 'html');
app.set('views', __dirname + '/views');
app.use(bodyParser.urlencoded({extended:true}));

app.get('/', (req, res)=>{
    let name = req.params.name;
    res.render('index.html');
});

app.post('/dados', (req, res)=>{
    let name = req.params.name;
    let password = req.params.pwd;
    let addres = req.params.addres;
    let date = req.params.date;
    let phone = req.params.phone;
    res.render('dados.html', {name, password, addres, date, phone});
});

const PORT = 8080;  
app.listen(PORT, ()=> {
    console.log("Server is running on port " + PORT);
});