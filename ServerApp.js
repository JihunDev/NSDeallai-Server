// User Socket.io query
// 2015.08.27 
// kermit

var connection = require('./Connection.js');
var sql = connection.con();

var server = require('http').createServer();
var io = require('socket.io')(server);
var port = 3000;

var inspect = require('util').inspect;

//모듈화
var chat = require('./Chat.js');
var user = require('./UserCRUD.js');
var star = require('./StarCRUD.js');

server.listen(port, function () {
    console.log('Server Start : http://211.253.11.138:' + port);
});


io.on('connection', function (socket) {
    console.log("connection");
    
    socket.on('start', function (date) {
        console.log('Android Connction = > ' + date);
    });

    //Chat
    socket.on('userNewMessage', function (date) {
        chat(date, socket);
    });
    //User
    socket.on('userInsert', function (date) {
        user.userInsert(date, socket, sql);
    });

    socket.on('userUpdata', function (date) {
        user.userUpdate(date, socket, sql);
    });

    socket.on('userLogin', function (date) {
        user.userLogin(date, socket, sql);
    });

    socket.on('userDelete', function (date) {
        user.userDelete(date, socket, sql);
    });

    //Star
    socket.on('starInsert', function (date) {
        star.starInsert(date, socket, sql);
    });
    
    socket.on('starUpdate', function (date) {
        star.starUpdate(date, socket, sql);
    });
    
    socket.on('starDelete', function (date) {
        star.starDelete(date, socket, sql);
    });

    socket.on('starSelect', function (date) {
        star.starSelect(date, socket, sql);
    });
});





