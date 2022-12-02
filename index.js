const express = require('express');
const app = express();
const cors = require('cors')
const port = process.env.PORT || 5000;

app.use(cors());

const catagories = require('./data/catagories.json');
const news = require('./data/news.json');

app.get('/', (req, res) => {
    res.send('News Api Running');
});

app.get('/news-catagories', (req, res) => {
    res.send(catagories);
})

app.get('/category/:id', (req, res) => {
    const id = req.params.id;
    if (id === '08') {
        res.send(news);
    }
    else {
        const catagoryNews = news.filter(n => n.category_id === id);
        res.send(catagoryNews);
    }

})

app.get('/news/:id', (req, res) => {
    const id = req.params.id;
    const selectedNews = news.find(n => n._id === id);
    res.send(selectedNews);
})

app.listen(port, () => {
    console.log('Dragon News service poat running', port);
})