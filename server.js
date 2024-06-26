import dotenv from 'dotenv';
import express from 'express';
import connectMongo from './db/connectMongo.js';
import sequelize from './db/sequelize.js';

import pilotRoutes from './routes/pilot.routes.js';

dotenv.config();

const app = express();
app.use(express.json());

// Connect to MongoDB
connectMongo();

// Connect to MySQL using Sequelize
sequelize.authenticate()
  .then(() => console.log('Sequelize successfully connected'))
  .catch(err => console.log('Sequelize connection error:', err));

// Routes

app.use('/api/pilots', pilotRoutes);

const port = process.env.PORT || 5002;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
