import mongoose, { Schema } from 'mongoose';

const ingredientSchema = new Schema({});

export const Ingredient =
  mongoose.models?.Ingredient || mongoose.model('Ingredient', ingredientSchema);
