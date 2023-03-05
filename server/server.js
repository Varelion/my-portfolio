const express = require('express');
const cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser');
const morgan = require('morgan');
require('dotenv').config();
// const requestIp = require('request-ip');

const app = express();

// *** CORS DOESN'T GO HERE; CHECK contacts.js api !!!!
// app.use(cors());

// app.use(
//   cors({
//     origin: 'http://localhost:3000',
//   })
// );

app.post('/api/contacts/send', (req, res) => {
  // handle the request here
  console.log('cors lol');
});

const http = require('http').Server(app);
// const socket = require('socket.io');

// const io = socket(http);
// --------------------------
//#region IPLOGGING
// --------------------------
// app.use(requestIp.mw());
// let theirIp = '';
// app.use((req, res, next) => {
//   const clientIp = requestIp.getClientIp(req);
//   theirIp = clientIp;
//   const date = new Date();
//   console.log(`\n New \n Visitor \n Time: ${date}\n IP Address: ${theirIp}`);
//   next();
// });

//#endregion IPLOGGING

// logging middleware
app.use(morgan('dev'));

// static file-serving middleware
app.use(express.static(path.join(__dirname, '..', 'public')));

// body parsing middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// API routes

// io.on('connection', (socket) => {
//   console.log(`User: ${socket.id} just connected! Their IP: ${theirIp}`);

// });


app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '..', 'public/index.html'))
);

// Send index.html for any requests that don't match one of the API routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

// any remaining requests with an extension (.js, .css, etc.) send 404
app.use((req, res, next) => {
  if (path.extname(req.path).length) {
    const err = new Error('Not found');
    err.status = 404;
    next(err);
  } else {
    next();
  }
});

// Handle 500 Errors
app.use(function (err, req, res, next) {
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || 'Internal server error.');
});

module.exports = http;
