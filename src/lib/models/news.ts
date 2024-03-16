import mongoose, { Schema } from 'mongoose';

const newsSchema = new Schema({
  localizedTitle: {
    type: Array,
    required: true,
  },
  image: {
    type: Array,
  },
  description: {
    type: Array,
  },
  date:{
    type: Date
  }
});

export const News = mongoose.models?.News || mongoose.model('news', newsSchema);
