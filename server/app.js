const express = require('express');
const app = express();
var mysql = require('mysql');
const port = 3000;
app.use(express.json());
app.use(
    express.urlencoded({
      extended: true,
    })
  );

var connection = mysql.createConnection({
  host     : '192.168.1.60',
  user     : 'carlos',
  password : 'Carlos1234',
  database: 'TriPlanner'
});





app.get("/", (req, res) => {

    res.json({ message: "ok" });

});


app.get("/login", (req, res) => {

    var monka = {
        data:[],
        message:"ok"
    };
    connection.connect();

    connection.query('SELECT * FROM users', function(err, rows, fields) {
        if (err) throw err;

        for (let i = 0; i < rows.length; i++) {
            const user = rows[i];
            monka.data.push(user.name)
        }
        
        res.json(monka);

    });
    connection.end();
});



app.listen(port,()=>{

    console.log('Server lisening to port '+port);

});