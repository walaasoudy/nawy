import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import apartmentRoutes from '../src/routes/apartmentRoutes';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

if (!process.env.MONGO_URI) {
    throw new Error('MONGO_URI environment variable is not defined');
}

mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.error('MongoDB connection error:', err));


app.use('/api/apartments', apartmentRoutes);


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});