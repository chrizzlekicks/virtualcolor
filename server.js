const express = require('express');
const server = express();
const PORT = 5000;

server.get('/', (req, res) => {
    res.send('hello world')
})

server.listen(PORT, () => {
    console.log(`server listening on ${PORT}`)
});