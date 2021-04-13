// Import Modules
const express = require('express');
const server = express();
const path = require('path');
const cors = require('cors');

// Define Port
const PORT = process.env.PORT || 5000;

// Middleware
server.use(express.static(path.join(__dirname, './public')));
server.use(cors());

// Routing
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

// Error Routing
server.all('*', (req, res) => {
    res.status(404).send(`<h2>404</h2><p>The page you are looking for is currently unavailable...</p><a href='/'>return</a>`);
});

// Get Server Up and Running
server.listen(PORT, () => {
    console.log(`server listening on ${PORT}`)
});