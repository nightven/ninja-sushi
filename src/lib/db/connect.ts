import mongoose from 'mongoose';

async function dbConnect() {
  try {
    const host = process.env.DB_HOST;
    if (!host) {
      throw new Error('DB_HOST is not defined');
    }

    await mongoose.connect(host);
    console.log('Db is connected');
  } catch (error) {
    console.log(error);
  }
}

export default dbConnect;
