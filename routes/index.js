module.exports = app=>{
    app.get('/', (req, res)=> { 
    res.statuscode = 200;
    res.setHeader('Content-type', 'text/html');
    res.end('<h1>Olá</h1>');//cria o servidor e guarda na variável
    });
}; //exporta as requisições