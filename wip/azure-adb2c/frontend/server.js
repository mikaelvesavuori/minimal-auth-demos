const express = require('express');
const morgan = require('morgan');
const path = require('path');

const PORT = process.env.PORT || 6420;

const app = express();
app.use(morgan('dev'));
app.use(express.static('App'));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(PORT);
console.log(`Listening on port ${PORT}...`);
