var fs = require('fs');
const mysql = require('mysql');
const games = require('./resources/games.json');

//========CONNECT TO DB==================
const db = mysql.createConnection ({
    host: '35.190.139.24',
    user: 'root',
    database: 'gamesdb',
    password: 'password',
    charset : 'utf8mb4'
});

db.connect((err) => {
    if (err) {
        throw err;
    }

    loadDB();

    console.log('Connected to database');
});

function loadDB() {
    let dropTable = 'drop table if exists games';
    db.query(dropTable, function(err) {
        if (err) {
            console.log(err.message);
            endConnection();
            return;
        }

        createTable(populatedDB);
    });
}

function createTable(callback) {
    let createTable = `create table if not exists games(
        id varchar(255) primary key not null,
        title varchar(255) not null,
        imgurl varchar(2083) not null,
        genre varchar(255) not null,
        rating decimal(4,2) not null,
        rCount int(255) not null
    ) default charset=utf8mb4 collate utf8mb4_bin`;

    db.query(createTable, function(err) {
        if (err) {
            console.log(err.message);
            endConnection();
            return;
        }
        callback();
    });
}

function populatedDB() {
    let insert = "insert into games (id, title, imgurl, genre, rating, rCount) values ?";
    let values = []
    games.forEach(game => {
        if (game.genre = 'GAME')
            values.push([game.pid, game.title, game.imgURL, game.subgenre, parseFloat(game.rating), parseInt(game.rCount)]);
    });

    db.query(insert, [values], function(err) {
        if (err) console.log(err.message);
        endConnection();
    });
}

function endConnection() {
    db.end(function(err) {
        if (err) console.log(err.message);
    });
}
