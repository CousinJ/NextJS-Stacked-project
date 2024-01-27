import mongoose from 'mongoose'

export async function connectDB() {
    try {
      await mongoose.connect(process.env.URI!);
      const connection = mongoose.connection;
  
      connection.on('connected', () => {
        console.log('mongoDB connection established');
      });
  
      connection.on('error', (err) => {
        console.error('mongoDB connection error:', err);
        process.exit(1);
      });
    } catch (error) {
      console.error('ERROR CONNECTING');
      console.error(error);
      process.exit(1);
    }
  }
  