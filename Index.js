// Import the mssql package
//var sql = require('mssql');
const express = require('express');
const app = express();
const port = 3001;

/*var db = {
    server: "pallavi2.database.windows.net", 
    database: "Stopwatch1", 
    user: "azureuser", 
    password: "Pallavirani1", 
    port: 1433,
    options: {
        encrypt: true
    }
};*/

app.get("/", (req, res) => {
  res.send("Hello from server");
});

/*app.get('/api/get', (req, res) => {
  var conn = new sql.ConnectionPool(db);
  conn.connect().then(function () {
      var reqst = new sql.Request(conn);
      var spView = 'EXEC ViewTask'
      reqst.query(spView).then(function(result) {
          res.send(result.recordset);
          res.send("This is working!")
          conn.close();
      });
  }).catch(function(err) {
      console.log(err);
  });
});*/

app.listen(port, () => {
  console.log(`running on port ${port}`);
});