var express = require('express');
var router = express.Router();
var path = require('path');
var socket = require('socket.io-client')('http://localhost');


socket.on('connect', function() {
    console.log("pp");
});

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', {
        title: 'Express'
    });
});

router.get('/chat', function(req, res, next) {

    res.render('chat/index', {
        title: 'Chat'
    });

});


module.exports = router;
