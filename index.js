var express = require('express');

var app = express();

var bodyParser = require('body-parser');

const PORT = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



app.get('/', function (req, res) {
    res.json('Hello World!');
});


app.listen(PORT, function(){
    console.log('server running on port ' + PORT);
});