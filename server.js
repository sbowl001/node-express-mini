const express = require('express');

const userRouter = require('./userRouter');
const server = express();

server.listen(5000, ()=> {
    console.log('APP running on port 5000')
})

server.get('/', (req, res) => {
    console.log("Get Request");
    res.send("<h1> Got Request </h1>")
})

 server.use('/api/users', userRouter);