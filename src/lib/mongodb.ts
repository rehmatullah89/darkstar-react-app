// lib/mongodb.ts
import { MONGODB_URI } from '@/utils/constants';
import mongoose, { Mongoose, ConnectOptions } from 'mongoose';



if (!MONGODB_URI) {
  throw new Error(
    'Please define the MONGODB_URI environment variable inside .env.local'
  );
}

interface Cached {
  conn: Mongoose | null;
  promise: Promise<Mongoose> | null;
}

let cached: Cached = (global as any).mongoose || { conn: null, promise: null };

async function connectToDatabase(): Promise<Mongoose> {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts: ConnectOptions = {
      // Options have been simplified or changed in newer versions of Mongoose
      // You may use `useNewUrlParser` and `useUnifiedTopology` as `true` for compatibility
      // but they are not required in newer Mongoose versions.
      // These are generally not needed unless specific behaviors are required
      // Use other options as needed for your use case
    };

    cached.promise = mongoose.connect(MONGODB_URI as string, opts).then((mongooseInstance) => {
      return mongooseInstance;
    });
  }

  cached.conn = await cached.promise;
  return cached.conn;
}

export default connectToDatabase;
