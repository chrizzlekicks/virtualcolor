const express = require('express');
const server = express();
const path = require('path');
const cors = require('cors');
const PORT = process.env.PORT || 5000;

server.use(express.static('./public'));
server.use(cors());

server.get('/', (req, res) => {
    res.status(200).sendFile(path.resolve(__dirname, './public/views/index.html'));
});

server.get('/auroom', (req, res) => {
    res.status(200).sendFile(path.resolve(__dirname, './public/views/auroom.html'));
});

server.get('/virtualcolor', (req, res) => {
    res.status(200).sendFile(path.resolve(__dirname, './public/views/virtualcolor.html'));
});

server.get('/team', (req, res) => {
    res.status(200).sendFile(path.resolve(__dirname, './public/views/team.html'));
});

server.get('/news', (req, res) => {
    res.status(200).sendFile(path.resolve(__dirname, './public/views/news.html'));
});

server.all('*', (req, res) => {
    res.status(404).send('The page you are looking for is currently unavailable...');
});

server.listen(PORT, () => {
    console.log(`server listening on ${PORT}`)
});