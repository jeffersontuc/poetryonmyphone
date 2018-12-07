(function () {
    var express = require('express');
    var router = express.Router();

    var message = require('./message.js');


    router.get('/', function (req, res) {
        res.json('Welcome to PoetryOnMyPhone server!');
    });


    router.use('/message', message);


    module.exports = router;

}());