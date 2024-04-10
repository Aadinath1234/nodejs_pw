const express = require('express');

const app = express();

const PORT = 4000;

const HOSTNAME = 'localhost';

app.get('/', (req, res) => {
      res.send('Hello world');
});

app.get('/about', (req, res) => {
        res.send('about page ! ');
})

app.get('/contact', (req, res) => {
      res.send('Contact page ');
})

app.listen(PORT, ()=> {
       console.log(`server running at ${HOSTNAME}: ${PORT}`);
});

