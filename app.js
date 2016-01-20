/**
 * Created by jiangink on 16/1/20.
 */
var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

server.listen(8000);

app.get('/', function (req, res) {
   res.sendfile(__dirname + '/index.html');
});

io.on('connection', function (socket) {
    socket.emit('news', {server : 'Hello! client.'});
    socket.on('my other event', function (data) {
        console.log(data);
    })
})