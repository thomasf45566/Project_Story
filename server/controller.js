const { Story } = require('../database');

const controller = {
  get: (req, res) => {
    res.status(200).send('hi');
  },
  post: (req, res) => {
    res.status(201).send('hi');
  },
  put: (req, res) => {
    res.status(202).send('hi');
  },
  delete: (req, res) => {
    res.status(202).send('hi');
  },
};

module.exports = controller;