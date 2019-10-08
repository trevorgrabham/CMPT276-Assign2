const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 5000;
var app = express();

const { Pool } = require('pg');
var pool;
pool = new Pool({connectionString: process.env.DB_URL});

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine','ejs');
app.get('/', (req,res) => {
  res.render('tokimon');
});
