const games = require('./../resources/games.json');

//========CONNECT TO DB==================


exports.loadDB = function(req, res) {
  req.getConnection(function(err, db) {
    let dropTable = 'drop table if exists games';
    db.query(dropTable, function (err) {
      if (err) {
        console.log(err.message);
        return;
      }

      createTable(db, res, populatedDB);
    });
  });
}

function createTable(db, res, callback) {
  let createTable = `create table if not exists games(
        id int primary key auto_increment,
        pid varchar(255) not null,
        title varchar(255) not null,
        imgurl varchar(2083) not null,
        genre varchar(255) not null,
        rating decimal(4,2) not null,
        rcount int(255) not null
    ) default charset=utf8mb4 collate utf8mb4_bin`;

  db.query(createTable, function (err) {
    if (err) {
      console.log(err.message);
      return;
    }
    callback(db, res);
  });
}

function populatedDB(db, res) {
  let insert = "insert into games (pid, title, imgurl, genre, rating, rcount) values ?";
  let values = []
  games.forEach(game => {
    if (game.genre = 'GAME')
      values.push([game.pid, game.title, game.imgURL, game.subgenre, parseFloat(game.rating), parseInt(game.rCount)]);
  });

  db.query(insert, [values], function (err) {
    if (err) console.log(err.message);
    res.send('db Updated');
  });
}
