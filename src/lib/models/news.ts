import mongoose, { Schema } from 'mongoose';

const newsSchema = new Schema({});

export const News = mongoose.models?.News || mongoose.model('news', newsSchema);
