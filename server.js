var express = require('express');
var app = express();

app.use(express.static('./'));

var server = app.listen(2112, function(){
    let host = server.address().address;
    let port = server.address().port;

    console.log('The appliation is running @ http://%s:%s', host, port);
});