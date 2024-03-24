import mongoose, { Schema } from 'mongoose';

const newsSchema = new Schema({
  poster: {
    type: String,
    required: true,
  },
  topic: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  date: {
    type: String,
  },
});

export const News = mongoose.models?.News || mongoose.model('News', newsSchema);
