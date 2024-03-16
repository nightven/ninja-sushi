import mongoose, { Schema } from 'mongoose';

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  address: {
    type: Array,
  },
  history: {
    type: Array,
  },
  favorites: {
    type: Array,
  },
  location: {
    type: String,
    required: true,
  },
  Ing: {
    type: String,
  },
});

export const User = mongoose.models?.User || mongoose.model('User', userSchema);
