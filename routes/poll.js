const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Vote = require('../models/Vote');

const Pusher = require('pusher');

const pusher = new Pusher({
    appId: "1113967",
    key: "94eb4680b7e7bfe62122",
    secret: "05399784e1119450b2d3",
    cluster: "us2",
    useTLS: true
  });

router.get('/', (req, res) => {
    Vote.find().then(votes => res.json({success: true, votes: votes}));
});

router.post('/', (req, res) => {
    const newVote = {
        os: req.body.os,
        points: 1
    }

    new Vote(newVote).save().then(vote => {
        pusher.trigger("os-poll", "os-vote", {
            points: parseInt(vote.points),
            os: vote.os
          });
    
          return res.json({success: true, message: 'Thank you for voting'});
    });
});

module.exports = router;