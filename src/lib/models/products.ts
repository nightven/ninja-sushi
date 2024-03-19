import mongoose, { Schema } from 'mongoose';

const productSchema = new Schema({
  title: {
    type: String,
    min: 3,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  category: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  weight: {
    type: Number,
    required: true,
  },
  vegan: {
    type: Boolean,
  },
  hit: {
    type: Boolean,
  },
  lactose: {
    type: Boolean,
  },
  spicy: {
    type: Boolean,
  },
  ingredients: {
    type: Array,
  },
});

export const Product =
  mongoose.models?.Product || mongoose.model('Product', productSchema);
