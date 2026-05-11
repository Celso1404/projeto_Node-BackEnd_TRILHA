const express = require('express');
const consign = require('consign');

let app = express();

app.use(express.urlencoded({ extended: true })); 
app.use(express.json());

consign().include('routes').include('utils').into(app); //incluí todas as rotas no app

app.listen(3000, '127.0.0.1', ()=> { //configura a porta e o ip para guardar o server
    console.log('Servidor rodando'); //função de callback quando o server subir
})