const fs = require('fs');
const path = require('path');

const express = require('express');
const app = express();

const PORT = 30000;

<<<<<<< HEAD
app.use((req, res) => {
    res.status(404);
    fs.readFile('404.html', (err, data) => {
=======
app.use(express.static('static'));

app.get('/', (req, res) => {
    fs.readFile('index.html', (err, data) => {
>>>>>>> 9c55e4b1d8c661813dac52171d4778e913b8d422
        res.end(data);
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
