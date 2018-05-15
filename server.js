const express = require('express');
const db = require('./data/db');

const server = express();

server.listen(5000, ()=> {
    console.log('APP running on port 5000')
})

server.get('/', (req, res) => {
    console.log("Get Request");
    res.send("<h1> Got Request </h1>")
})

server.get('/api/users', (req, res) => {
    db.find()
    .then( users => {
        res.status(200).json({users})
        })
    .catch( err => {
        res.status(5000).json({
            error: "The users information could not be retrieved."
          })
    })
});

server.get('/api/users/:id', (req, res) => {
    const userId= req.params.id;
    db.findById(userId)
    .then(user => {
        res.json({user});
    })
    .catch( err => {
        res
          .status(404)
          .json({
            message: "The user with the specified ID does not exist."
          });
    })
})