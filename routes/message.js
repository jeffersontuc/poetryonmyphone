(function () {

    var express = require('express');
    var router =  express.Router();

    // var userService = require('../services/user.service.js')();

    router.post('/', function (req, res) {
        console.log(req.body);
    });

    module.exports = router;

}());