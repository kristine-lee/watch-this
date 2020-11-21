const express = require('express');
const path = require('path');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3333;

module.exports = app;

require('dotenv').config();

if (process.env.NODE_ENV !== 'production') require('./secret.js');

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;
const mongoUri =
  `mongodb+srv://${username}:${password}@cluster0.zwd1a.mongodb.net/test?retryWrites=true&w=majority`;

//https://docs.mongodb.com/drivers/node/

mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
}).catch(err => console.log("Oh no, there's an error connecting to the database!", err.reason));

mongoose.connection.once("open", () => {
  console.log("Successfully connected to the database!")
});
mongoose.connection.on("error", error => {
  console.error("Something isn't right with the database connection", error);
});
mongoose.connection.on("close", () => {
  console.log("Databased disconnected, bye bye!");
});

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


app.use(express.static(path.join(__dirname, '..', 'public')));

// app.get('/', function (req, res) {
//   res.sendFile(path.join(__dirname, 'build', 'index.html'));
// });

app.use('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public/index.html'))
});


app.use((err, req, res, next) => {
  console.error(err)
  console.error(err.stack)
  res.status(err.status || 500).send(err.message || 'Internal server error.')
});

app.listen(PORT, () => console.log("Connected to the server! 🚀"));
