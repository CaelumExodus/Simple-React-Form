const express = require('express')
const app = express()
const mysql = require('mysql')
const cors = require('cors')
const { check, validationResult } = require('express-validator')

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  user: 'root',
  host: 'localhost',
  password: 'root',
  database: 'form_management_system',
});

app.post(
  '/send',
  [
    check('firstName').notEmpty().withMessage('firstName must be filled'),
    check('lastName').notEmpty().withMessage('lastName must be filled'),
    check('email').notEmpty().withMessage('Email must be filled'),
    check('formDate').notEmpty().withMessage('Date must be filled'),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }

    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.email;
    const formDate = req.body.formDate;

    db.query(
      'INSERT INTO form_data (firstName, lastName, email, formDate) VALUES (?, ?, ?, ?)',
      [firstName, lastName, email, formDate],
      (err, result) => {
        err ? console.log(err) : res.send('Value inserted');
      }
    )
  })

app.listen(3100, () => console.log('Server is running'));