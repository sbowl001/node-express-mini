const express = require('express');

const helmet = require('helmet');
const cors = require('cors');
const userRouter = require('./userRouter');
const server = express();

server.use(express.json());
server.use(cors());
server.use(helmet());
server.use(greeter());
// server.use(logger('loading'));

server.listen(5000, ()=> {
    console.log('APP running on port 5000')
})

server.get('/', logger('loading from get:'), (req, res) => {
    console.log("Get Request");
    res.send("<h1> Got Request </h1>")
})

function logger(msg){
    return function( req, res, next) {
        console.log(`${msg || 'requesting'} : ${req.url}`);
        next();
    }
}

function greeter(){
    return function(req, res, next) {
        if (req.query.passcode === 'gandalf') {
        next();
    } else {
        res.send('You shall not pass!!') // query string users?passcode=gandalf
}
}
}

 server.use('/api/users', userRouter);