const dbPool = require('./db');
const express =require('express');
const bodyParser = require('body-parser');
const app = express();
const fetch = require('node-fetch');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

//// API Calls
app.get('/capsules', async (req, res) => {
    await fetch('https://api.spacexdata.com/v3/capsules')
        .then(response => response.json())
        .then(data => res.send(data));
})

app.get('/landingpad', async (req, res) => {
    var url = 'https://api.spacexdata.com/v3/landpads/' + req.query.landingpad
    await fetch(url)
        .then(response => response.json())
        .then(data => res.send(data));
})

app.listen('4000');
console.log(`Listening on port: 4000, wait for the development server to be up...`);
