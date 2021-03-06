var express = require('express');

var app = express();
var port = process.env.port || 8080;

var controller = require('./src/controller.js');

app.get('/api/:content', function(req, res){
    var content = req.params.content;
    if(/(whoami)/.test(content)){
        res.status(200).json(controller(req));
    }
    else{
        res.status(500).send();
    }
        
    //res.send(content);
});

app.listen(port, function(){
    console.log("Listening to port " + port + "!");
})