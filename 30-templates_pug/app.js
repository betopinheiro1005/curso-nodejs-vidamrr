const express = require('express');
const app = express();
const bodyParser = require('body-parser');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'pug');

app.get('/', (req, res) =>{
    res.render('index', {titulo: "Minha primeira app", nome: "Roberto Pinheiro"});
});

app.listen(3002, () =>{
    console.log('Servidor iniciado...');
});
