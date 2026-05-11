const express = require('express');

let app = express();

app.get('/', (req, res)=> { 
    
    res.statuscode = 200;
    res.setHeader('Content-type', 'text/html');
    res.end('<h1>Olá</h1>');//cria o servidor e guarda na variável
});

app.get('/users', (req, res)=> {
     res.statuscode = 200;
        res.setHeader('Content-type', 'application/json');
        res.json({ //retorna o json
            users: 
            [{
                name: 'Celso',
                email: 'celsoteste@gmail.com',
                id: 1
            }]
        });
});

app.listen(3000, '127.0.0.1', ()=> { //configura a porta e o ip para guardar o server
    console.log('Servidor rodando'); //função de callback quando o server subir
})