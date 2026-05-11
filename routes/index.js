let express = require('express');
let routes = express.Router();

routes.get('/', (req, res)=> { 
    res.statuscode = 200;
    res.setHeader('Content-type', 'text/html');
    res.end('<h1>Olá</h1>');//cria o servidor e guarda na variável
});

module.exports = routes; //exporta as requisições