const express = require('express');
const db  = require('./data/db');

const router = express.Router();

router.get("/", (req, res) => {
  db
    .find()
    .then(users => {
      res.status(200).json({ users });
    })
    .catch(err => {
      res.status(5000).json({
        error: "The users information could not be retrieved."
      });
    });
});

 

router.get("/:id", (req, res) => {
  const userId = req.params.id;
  db
    .findById(userId)
    .then(user => {
      res.json({ user });
    })
    .catch(err => {
      res.status(404).json({
        message: "The user with the specified ID does not exist."
      });
    });
});


module.exports = router; 