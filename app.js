require('dotenv').config();

//Express
const express = require('express');
const app = express();
const cors = require('cors');

//Database
const connectDB = require('./database/connect');
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('<h1>Welcome to God Plan Food </h1>');
  });

  
const port = process.env.PORT || 3000;
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();