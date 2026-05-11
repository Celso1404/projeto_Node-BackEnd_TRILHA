const http = require('http');

let server = http.createServer((req, res)=> { //cria o servidor e guarda na variável
    console.log('URL:', req.url); //chama a URL
    console.log('METHOD:', req.method); //chama o método

    switch(req.url) { //confirmação do funcionamento do servidor e da requisição
        case '/':
            res.statuscode = 200;
            res.setHeader('Content-type', 'text/html');
            res.end('<h1>Olá</h1>');
            break;
        case '/users':
            res.statuscode = 200;
            res.setHeader('Content-type', 'application/json');
            res.end(JSON.stringify({
                users: 
                [{
                    name: 'Celso',
                    email: 'celsoteste@gmail.com',
                    id: 1
                }]
            }));
            break; 
    }
});

server.listen(3000, '127.0.0.1', ()=> { //configura a porta e o ip para guardar o server
    console.log('Servidor rodando'); //função de callback quando o server subir
})