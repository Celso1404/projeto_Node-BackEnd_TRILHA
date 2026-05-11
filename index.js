const http = require('http');

let server = http.createServer((req, res)=> { //cria o servidor e guarda na variável
    console.log('URL:', req.url); //chama a URL
    console.log('METHOD:', req.method); //chama o método

    res.end('OK');
});

server.listen(3000, '127.0.0.1', ()=> { //configura a porta e o ip para guardar o server
    console.log('Servidor rodando'); //função de callback quando o server subir
})