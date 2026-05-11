let express = require('express');
let routes = express.Router();

routes.get('/', (req, res)=> {
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

routes.get('/admin', (req, res)=> {
    res.statuscode = 200;
        res.setHeader('Content-type', 'application/json');
        res.json({ //retorna o json
            users: []      
        });
})

module.exports = routes;