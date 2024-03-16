import mongoose, { Schema } from 'mongoose';

const ingredientSchema = new Schema({
  localizedTitle: {
    type: Array,
    required: true,
  },
  image: {
    type: String,
  },
});

export const Ingredient =
  mongoose.models?.Ingredient || mongoose.model('Ingredient', ingredientSchema);
