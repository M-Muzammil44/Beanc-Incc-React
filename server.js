const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = 3000;

mongoose.connect('mongodb://localhost:27017/React_App/Bean_Inc', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

app.use(cors());
app.use(express.json());

const contactFormSchema = new mongoose.Schema({
  name: String,
  email: String,
  data: String,
});

const ContactForm = mongoose.model('ContactForm', contactFormSchema);

// API route to handle contact form submissions
app.post('/tasks', async (req, res) => {
  try {
    const { name, email, data } = req.body;
    const newEntry = new ContactForm({ name, email, data });
    const savedEntry = await newEntry.save();
    res.json(savedEntry);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
