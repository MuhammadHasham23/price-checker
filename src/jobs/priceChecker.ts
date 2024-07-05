import cron from 'node-cron';
import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const apiUrl = process.env.API_BASE_URL || 'http://localhost:3000';

cron.schedule('0 * * * *', async () => { // This cron job will run every hour
  try {
    await axios.get(`${apiUrl}/api/check`);
    console.log('Price check completed');
  } catch (error) {
    console.error('Error hitting the /api/check endpoint:', error);
  }
});
