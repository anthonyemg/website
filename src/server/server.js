const express = require('express');
const request = require('request');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;
require('dotenv').config();
const { KEY, SECRET, USER_ID } = process.env;

app.use(express.static(path.join(__dirname, '../public')));

app.listen(port, () => console.log(`Listening on port ${port}`));
