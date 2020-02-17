var app = require('./app');
const port = 3000;

//middleware for developement only --be sure to delete before release
app.use(function (request, response, next) {
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    response.header('Access-Control-Allow-Methods', 'POST, PATCH, GET, PUT, DELETE, OPTIONS');
    next();
});

//======== OPEN CONNECTION ============================
app.listen(port);
console.log('Listening on port ' + port + ' ');
