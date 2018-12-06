var express = require('express');
var bodyParser = require('body-parser');

var app = express();

var routes = require('./routes/index.js');

const PORT = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', routes);


app.listen(PORT, function(){
    console.log('server running on port ' + PORT);
});