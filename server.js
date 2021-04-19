var express = require('express');
var app = express();

app.get('/calc/:op/:nb1/:nb2', function(req, res){


    var operation = req.params.op ;

    var num = Number(req.params.nb1) ;

    var nums = Number(req.params.nb2) ;

   // var result = 0 ;

    console.log("The Operation is " + operation) ;
    console.log("The Number1 is " + num) ;
    console.log("The Number2 is " + nums) ;

    if(operation === 'add' ) { 

        result = num + nums ;
        console.log(result) ;
    }

    else{

        console.log('Erreur') ;
    }

    res.send(result) ;

}) 

app.listen(3333)


