import express from 'express';
import cors from 'cors';
const app = express();
import { connectDb } from './db/connect.js';

// Routes
import authRoutes from './routes/authRoutes.js';

app.use(express.json()); // Parse JSON Data
app.use(express.urlencoded({ extended: true })); //Parse form Data

// Connect TO Db
connectDb()
  .then((res) => {
    console.log('Connected To DB');
  })
  .catch((err) => {
    console.log('Database Err', err);
  });

// Accept incoming req from client
app.use(
  cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'PUT', 'POST', 'PATCH', 'DELETE'],
  })
);

app.use('/api/auth/', authRoutes);

app.listen(8080, () => {
  console.log('Server is running on PORT 8080');
});
