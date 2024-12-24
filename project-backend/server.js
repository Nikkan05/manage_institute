const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

// Routes
const attendanceRoutes = require('./routes/attendance');
const feesRoutes = require('./routes/fees');
const curriculumRoutes = require('./routes/curriculum1');

// Initialize app
const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB Connection
mongoose.connect(
  'mongodb+srv://<username>:<password>@cluster0.mongodb.net/<dbname>?retryWrites=true&w=majority',
  { useNewUrlParser: true, useUnifiedTopology: true }
)
.then(() => console.log('MongoDB connected'))
.catch(err => console.log('Error connecting to MongoDB:', err));

// Routes
app.use('/attendance', attendanceRoutes);
app.use('/fees', feesRoutes);
app.use('/curriculum', curriculumRoutes);

// Start server
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
