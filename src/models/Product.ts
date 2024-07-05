import { Schema, model, Document } from 'mongoose';

interface IProduct extends Document {
  url: string;
  price: number;
  lastChecked: Date;
  email: string;
}

const productSchema = new Schema<IProduct>({
  url: { type: String, required: true },
  price: { type: Number, required: true },
  lastChecked: { type: Date, default: Date.now },
  email: { type: String, required: true }
});

const Product = model<IProduct>('Product', productSchema);

export default Product;
