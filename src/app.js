import express from 'express';

export const app = express();

//var app = express();
//module.exports = app;

var controller = require('./controller.js');

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

