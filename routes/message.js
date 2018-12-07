(function () {

    var express = require('express');
    var router =  express.Router();
    var twilio = require('twilio');
    var twilioConfig = require('../config/twilio/config.js');

    var poetryService = require('../services/poetry.js');

    var accountSid = twilioConfig.accountSid;
    var authToken = twilioConfig.authToken;
    var client = new twilio(accountSid, authToken);

    router.post('/', function (req, res) {
        client.messages
        .create({from: '+15125483808', body: 'A song for your day: ' + req.body.song.name + ' - ' + req.body.song.artist, to: req.body.to})
        .then(message => console.log(message.sid))
        .done();

        res.end('ok');
    });


    router.get('/author', poetryService.getPoetry);

    module.exports = router;

}());