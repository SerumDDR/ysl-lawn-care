require('dotenv').config();
const express = require('express');
const path = require('path');

const formRoutes = require('./routes/formRoutes');

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'public')));

app.use('/', formRoutes);

app.listen(port, () => console.log(`Server listening on port ${port}`));

