const express = require('express');
const request = require('request');
const nodemailer = require('nodemailer');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

const port = process.env.PORT || 3000;
require('dotenv').config();

const { GMAIL_PASS, GMAIL_USER } = process.env;

app.use(express.static(path.join(__dirname, '../public')));

app.post('/contact', (req, res) => {
  console.log(req.body)
  console.log('GMAIL_PASS', GMAIL_PASS)

  const smtpTrans = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: GMAIL_USER,
      pass: GMAIL_PASS
    }
  });

  const mailOpts = {
    from: req.body.name + ' &lt;' + req.body.email + '&gt;',
    to: GMAIL_USER,
    subject: 'New message from website!',
    text: `${req.body.name} (${req.body.email}) says: ${req.body.message}`
  };

  smtpTrans.sendMail(mailOpts, (error, response) => {
    if (error) {
      res.status(400);
      res.send({ "result": "contact-failure" });
    }
    else {
      res.status(200);
      res.send({ "result": "contact-success" });
    }
  })
});

app.listen(port, () => console.log(`Listening on port ${port}`));
