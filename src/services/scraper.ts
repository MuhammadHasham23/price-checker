import axios from 'axios';
import cheerio from 'cheerio';

export const scrapePrice = async (url: string): Promise<number> => {
  const { data } = await axios.get(url);
  const $ = cheerio.load(data);
  const priceTag = '.a-price-whole'
  const priceString = $(priceTag).text()
  const price = parseFloat(priceString.replace(/[^0-9.-]+/g, ""));
  return price;
};
