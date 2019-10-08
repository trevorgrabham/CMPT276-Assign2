const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 5000;
var app = express();

const { Pool } = require('pg');
var pool;
pool = new Pool({connectionString: process.env.DB_URL});
