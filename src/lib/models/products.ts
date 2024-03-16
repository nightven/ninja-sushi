import mongoose, { Schema } from 'mongoose';

const productSchema = new Schema({
  localizedTitle: {
    type: Array,
    min: 3,
    required: true,
  },
  image: {
    type: String,
  },
  description: {
    type: Array,
    required: true,
  },
  category: {
    type: Number,
    required: true,
  },
  popularity: {
    type: Number,
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
  ingredients: {
    type: Array,
  },
});

export const Product =
  mongoose.models?.Product || mongoose.model('Product', productSchema);
