module.exports = (app)=> {
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

    app.get('/users/admin', (req, res)=> {
        res.statuscode = 200;
            res.setHeader('Content-type', 'application/json');
            res.json({ //retorna o json
                users: []      
            });
    });
};