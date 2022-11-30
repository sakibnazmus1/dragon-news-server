const express = require('express');
const app = express();
const cors = require('cors')
const port = process.env.PORT || 5000;

app.use(cors());

const catagories = require('./data/catagories.json');

app.get('/', (req, res) => {
    res.send('News Api Running');
});

app.get('/news-catagories', (req, res) => {
    res.send(catagories);
})

app.listen(port, () => {
    console.log('Dragon News service poat running', port);
})