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
    const requiredFields = [
        { name: 'name', label: 'Nome' },
        { name: 'address', label: 'Endereço' },
        { name: 'phone', label: 'Telefone' },
        { name: 'date', label: 'Data' },
        { name: 'cpf', label: 'CPF' },
        { name: 'bday', label: 'Data de Nascimento' },
        { name: 'cep', label: 'CEP' },
        { name: 'uf', label: 'UF' },
        { name: 'email', label: 'Email' },
        { name: 'especiality', label: 'Especialidade Médica' },
        // { name: 'alergia', label: 'Alergia a Medicamentos' }
        // { name: 'info_add', label: 'Informações Adicionais' }
    ];
    
    const missingFields = requiredFields.filter(field => !req.body[field.name]);

    if (missingFields.length > 0) {
        const errorMessage = `Campos obrigatórios não preenchidos: ${missingFields.map(field => field.label).join(', ')}`;
        res.send(`<script>alert("${errorMessage}"); window.location.href = "/";</script>`);
    } else {
        let name = req.body.name;
        let address = req.body.address;
        let phone = req.body.phone;
        let date = req.body.date;
        let stringDate = new Date(date);
        let cpf = req.body.cpf;
        let bday = req.body.bday;
        let cep = req.body.cep;
        let uf = req.body.uf;
        let email = req.body.email;
        let especialidade = req.body.especiality;
        let alergias = req.body.alergia;
        let infoAdd = req.body.info_add;
        date = stringDate.toDateString();
        const Pessoa = {
            name: name,
            address: address,
            bday: bday,
            phone: phone,
            cpf: cpf,
            cep: cep,
            uf: uf,
            email: email
        };
        const DadosConsulta = {
            date: date,
            especialidade: especialidade,
            alergia: alergias,
            infoAdd: infoAdd
        }
        res.render('dados.html', {Pessoa, DadosConsulta});
    }
});

const PORT = 8080;  
app.listen(PORT, ()=> {
    console.log("Server is running on port " + PORT);
});