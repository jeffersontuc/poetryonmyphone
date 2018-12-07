var express = require('express');

var bodyParser = require('body-parser');

var app = express();

var routes = require('./routes/index.js');


var CronJob = require('cron').CronJob;


const PORT = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', routes);


var poetryService = require('./services/poetry.js');

const job = new CronJob('0 */1440 * * * *', function() {
    poetryService.getPoetry();
});


job.start();



app.listen(PORT, function(){
    console.log('server running on port ' + PORT);
});