exports.query = function(req, res) {
  req.getConnection(function(err, conn) {
    let qstring = req.params.qstring.toUpperCase();
    let page = req.params.page;

    conn.query("SELECT * FROM games WHERE UPPER(title) LIKE '%" + qstring + "%' LIMIT " + page + ", 10",
      function(err, rows) {
        if(err)
          console.log("Error Selecting : %s ",err );

        res.json({
          data: rows
        });
    });
  });
}
