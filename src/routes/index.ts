import express from 'express';
import Product from '../models/Product';
import { scrapePrice } from '../services/scraper';
import { sendNotification } from '../services/notifier';
import { validateRequest } from '../middleware/validateRequest';
import { productSchema } from '../schemas/product';

const router = express.Router();

router.post('/track', validateRequest(productSchema), async (req, res) => {
  const { url, email } = req.body;

  try {
    const price = await scrapePrice(url);
    const product = new Product({ url, price, email });
    await product.save();

    await sendNotification(email, 'Price Tracker - Tracking Started', `We are now tracking the price for ${url} at ${price}.`);

    res.json({ message: 'Tracking started', price });
  } catch (error) {
    res.status(500).json({ error: 'Error tracking product' });
  }
});

router.get('/check', async (req, res) => {
  try {
    const products = await Product.find();
    for (const product of products) {
      const currentPrice = await scrapePrice(product.url);
      if (currentPrice < product.price) {
        await sendNotification(product.email, 'Price Drop Alert', `The price for ${product.url} has dropped to ${currentPrice}.`);
        product.price = currentPrice;
        await product.save();
      }
      product.lastChecked = new Date();
      await product.save();
    }
    res.json({ message: 'Prices checked' });
  } catch (error) {
    res.status(500).json({ error: 'Error checking prices' });
  }
});

export default router;
