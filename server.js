const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const routes = require('./backend/routes');
const PORT = process.env.PORT || 3001;
const app = express();

// MIDDLEWARE
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// SERVE STATIC
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

// API ROUTES
app.use(routes);

// REACT ROUTE
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './../client/build/index.html'));
});

// SERVER START
app.listen(PORT, () => {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});