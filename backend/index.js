const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 8000; 


app.use(bodyParser.json());
app.use(cors());


const MONGODB_URI = 'mongodb://localhost:27017/already';
mongoose.connect(MONGODB_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));


app.get('/', (req, res) => {
  res.send('Welcome to your backend server!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
