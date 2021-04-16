var express = require('express');
var app = express();

//addition 1 et 2
app.get('/', function (req, res) {
    res.send('1+2=3')
})

//soustraction 10 par 2
app.get('/', function(req,res){
    res.send('10-2=8')
})
//multiplication 12 par 4
app.get('/', function(req,res){
    res.send('12*4=48')
})
//division 10 par 2 
app.get('/', function(req,res){
    res.send('10/2')
});
//modulo  13 par 4
app.get('/', function(req,res){
    res.send('13/4')
})

app.listen(3333);