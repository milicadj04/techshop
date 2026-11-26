import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

export default async function connect() {
  const uri = process.env.MONGODB_URI;
  if (!uri) throw new Error('MONGODB_URI is not set');

  mongoose.set('strictQuery', true);

  try {
    const conn = await mongoose.connect(uri);
    console.log('Mongo connected:', {
      host: conn.connection.host,
      name: conn.connection.name,
    });
    return conn;
  } catch (err) {
    console.error('Mongo connect error:', err?.message || err);
    throw err;
  }
}
