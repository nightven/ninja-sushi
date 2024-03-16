import mongoose, { Schema } from 'mongoose';

const productSchema = new Schema({});

export const Product =
  mongoose.models?.Product || mongoose.model('Product', productSchema);
