import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import routes from './routes';

dotenv.config();

const app = express();
app.use(express.json());
app.use('/api', routes);

mongoose.connect(process.env.MONGODB_URI as string);

export default app;
