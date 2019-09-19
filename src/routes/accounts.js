const express = require('express');
const router = express.Router();

const accounts =  require('../data.js');

router.get('/savings', (req,res) => {
  res.render('account', {title: 'Savings Account Detail', account: accounts.savings})
});

router.get('/checking', (req,res) => {
  res.render('account', {title: 'Checking Account Detail', account: accounts.checking})
});

router.get('/credit', (req,res) => {
  res.render('account', {title: 'Credit Account Detail', account: accounts.credit})
});

module.exports = router