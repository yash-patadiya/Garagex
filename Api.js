const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql');

const app = express();

app.use(cors());
app.use(bodyparser.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '123456789',
  database: 'Ty',
  port: 3306
});
db.connect(err => {
  if (err) { console.log(err, 'db err'); }
  console.log('Database connected...');
});
app.post('/insertData', (req, res) => {
  console.log(req.body, 'createdata');

  let fullname = req.body.name;
  let num = req.body.number;
  let eMail = req.body.email;
  let pass = req.body.password;
  let repass = req.body.repassword;
  let qr = `insert into Customer(Name,Mobile_Number,Email,Password,RePassword) values ('${fullname}','${num}', '${eMail}','${pass}','${repass}')`;

  db.query(qr, (err, result) => {
    if (err) { console.log(err); }

    console.log(result, 'result');
    res.send({
      message: 'data inserted',
    });
  })

});
app.post('/Customer', (req, res) => {
  console.log('yash')
});
app.listen(3000, () => {
  console.log('Server running..');
});  