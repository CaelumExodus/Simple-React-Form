const express = require('express')
const app = express()
const mysql = require('mysql')

const db = mysql.createConnection({
  user: 'root',
  host: 'localhost',
  password: '',
  database: 'form_management_system',
});

app.post('/send', (req, res) => {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const email = req.body.email;
  const formDate = req.body.formDate;

  db.query(
    'INSERT INTO form_data (firstName, lastName, email, date) VALUES (?, ?, ?, ?)',
    [firstName, lastName, email, formDate],
    (err, res) => {
      err ? console.log(err) : res.send('Values inserted');
    }
  )
})

app.listen(3100, () => console.log('Server is running'));