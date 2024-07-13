const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./server/config/db');
const authRoutes = require('./server/routes/auth');
const userRoutes = require('./server/routes/user');
const discRoutes = require('./server/routes/disc');

dotenv.config();

connectDB();

const app = express();

app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/user', userRoutes);
app.use('/api/disc', discRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>
  console.log(`Server running on port ${PORT}`));