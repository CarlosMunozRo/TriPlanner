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
app.use(express.urlencoded({ extended: true }));

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

    if(!req.body.username && !req.body.password) {
        res.json({message:"Bad parameters",status:"error"});
        return;
    }else if(req.body.username=='' || req.body.password==''){
        res.json({message:"Bad parameters",status:"error"});
        return;
    }

    username = req.body.username;
    password = req.body.password;


    

    connection.query("SELECT * FROM users where name='"+username+"' and password='"+password+"' limit 1", function(err, rows, fields) {
        if (err) throw err;
        console.log(rows.length);

        if(rows.length===1){
            res.json({status:'ok',message:'Login Correcto',token:''});
        }else{
            res.json({status:'error',message:'Login incorrecto'});
        }
        

    });

    
});




app.listen(port,()=>{

    console.log('Server lisening to port '+port);

});