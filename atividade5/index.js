// const { application } = require('express');
const express = require('express');
const mustache = require('mustache-express');
const bodyParser = require("body-parser");
const app = express();

app.engine('html', mustache());
app.set('view engine', 'html');
app.set('views', __dirname + '/views');
app.use(bodyParser.urlencoded({extended:true}));

app.get('/', (req, res)=>{
    res.render('index.html');
});

app.post('/dados', (req, res)=>{
    let name = req.body.name;
    let password = req.body.pwd;
    let address = req.body.address;
    let date = req.body.date;
    let phone = req.body.phone;
    res.render('dados.html', {name, password, address, date, phone});
});

const PORT = 8080;  
app.listen(PORT, ()=> {
    console.log("Server is running on port " + PORT);
});