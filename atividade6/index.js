const express = require('express');
const mustache = require('mustache-express');
const app = express();

app.engine('html', mustache());
app.set('view engine', 'html');
app.set('views', __dirname + '/views');
app.use(express.urlencoded({extended:true}));

app.get('/', (req, res)=>{
    res.render('index.html');
});

app.post('/dados', (req, res)=>{
    let name = req.body.name;
    let address = req.body.address;
    let phone = req.body.phone;
    let date = req.body.date;
    let stringDate = new Date(date);
    date = stringDate.toDateString();
    if (!name || !address || !phone || !date) {
        res.send('<script>alert("Há campos que não foram preenchidos. Por favor, volte e preencha todos os campos"); window.location.href = "/";</script>');
    } else {
        const Pessoa = {
            name: name,
            address: address,
            date: date,
            phone: phone,
        };
        res.render('dados.html', {Pessoa});
    }
});

const PORT = 8080;  
app.listen(PORT, ()=> {
    console.log("Server is running on port " + PORT);
});