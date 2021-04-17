var express = require('express');
var app = express();

app.get('/calc/:op/:nb1/:nb2', (req, res)=> res.send(req.params)) 

app.listen(3333)
