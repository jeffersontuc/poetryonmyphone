(function () {

    var request = require('request');
    var poetryDB = require('../config/poetryDB/config.js');

    var twilio = require('twilio');
    var twilioConfig = require('../config/twilio/config.js');

    var accountSid = twilioConfig.accountSid;
    var authToken = twilioConfig.authToken;
    var client = new twilio(accountSid, authToken);

    var service = {};

    service.getPoetry = function () {

        request(poetryDB.api_url + 'author', {json: true}, function (err, res, body) {

            var authors = body.authors;
            var amountOfAuthors = authors.length;
            var selectedAuthor = authors[Math.floor((Math.random() * amountOfAuthors))];

            request(poetryDB.api_url + 'author/' + selectedAuthor, {json: true}, function (err, res, poems) {

                var selectedPoem = poems[Math.floor((Math.random() * poems.length))];
                var response = '\n\n' + 'Title: ' + selectedPoem.title + '\n';
                response += 'Author: ' + selectedPoem.author + '\n\n';


                for(var i = 0; i < selectedPoem.lines.length; i++){
                    response += selectedPoem.lines[i] + '\n';
                }

                if(response.length < 1590){
                    client.messages
                        .create({from: '+15125483808', body: response, to: '+5583999715570'})
                        .then(message => console.log(message.sid))
                        .done();
                }

                return response;
            })
        });
    };


    module.exports = service;

}());