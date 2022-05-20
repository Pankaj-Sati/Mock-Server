const jsonServer = require('json-server');
const axios = require('axios');
const cookieParser = require("cookie-parser");

const server = jsonServer.create();
const middlewares = jsonServer.defaults();

// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares);
server.use(cookieParser());
// Add custom routes before JSON Server router

server.post('/login', (_req, _res) => {
    //   res.jsonp(req.query)
    axios.get('https://api.spacexdata.com/v4/launches/latest').then(data=>{
        _res.cookie('MY_CUSTOM_COOKIE','random_value');
        _res.jsonp(data.data);
    })
    });

server.get('/echo', (_req, res) => {
    res.send({data:"Response received"});
})

server.listen(3000, () => {
  console.log('JSON Server is running')
})