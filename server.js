const express = require('express');

const helmet = require('helmet');
const cors = require('cors');
const userRouter = require('./userRouter');
const server = express();

const { logger, greeting} = require('./middleware');

server.use(express.json());
server.use(cors());
server.use(helmet());
server.use(greeter());
server.use(logger());

server.listen(5000, ()=> {
    console.log('APP running on port 5000')
})

server.get('/', logger('loading from get:'), (req, res) => {
    console.log("Get Request");
    res.send("<h1> Got Request </h1>")
})



 server.use('/api/users', userRouter);