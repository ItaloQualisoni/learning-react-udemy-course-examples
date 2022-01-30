var express = require('express');

//Create our app
var app = express();

app.use(express.static('public'));

app.listen(3000,() => {
    console.log('Express server is up on port http://localhost:3000');
})