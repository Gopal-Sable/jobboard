const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

const mongoURI = process.env.MONGO_URI;
mongoose.connect(mongoURI)
    .then(() => console.log('MongoDB connected successfully'))
    .catch(err => console.error('Failed to connect to MongoDB', err));


app.get('/', (req, res) => {
  res.send('Job Posting Board API');
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
