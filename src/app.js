const fs = require('fs');
const path = require('path');
const accountRoutes = require('./routes/accounts.js');
const servicesRoutes = require('./routes/services.js');

const express = require('express');
const app = express();
const {accounts, users, writeJSON} = require('./data');
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({extended: true}));

app.use('/account', accountRoutes);
app.get('/', (req,res) => {
  res.render('index', {title: 'Account Summary', accounts: accounts})
});

app.get('/profile', (req,res) => {
  res.render('profile', {title: 'Profile', user: users[0]})
});

app.use('/services', servicesRoutes);

app.listen(3000, () => console.log('PS Project running on port 3000!'));