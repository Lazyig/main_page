const fs = require('fs');
const path = require('path');

const express = require('express');
const app = express();

const PORT = 30000;

app.use((req, res, next) => {
    fs.readFile('404.html', (err, data) => {
        res.end(data, 404);
    });
});

app.get('/', (req, res) => {
    fs.readFile('index.html', (err, data) => {
        res.end(data);
    });
});


app.listen(PORT, (err) => {
    console.log('Main Page Server On');
    console.log('Port : ' + PORT);
});