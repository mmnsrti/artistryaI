import mongoose, { Mongoose } from "mongoose";

const MONGODB_URL = process.env.MONGODB_URL;
type MongooseConnectionProps = {
  conn: Mongoose | null;
  promise: Promise<Mongoose> | null;
};
let cached: MongooseConnectionProps = (global as any).mongoose;
if (!cached) {
  cached = (global as any).mongoose = { conn: null, promise: null };
}
export const connectToDatabase = async () => {
  if (!cached.conn) {
    return cached.conn;
  }
  if (!MONGODB_URL) {
    throw new Error("Missing parameter MONGODB_URL");
  }
  cached.promise = cached.promise || mongoose.connect(MONGODB_URL, {
    bufferCommands: false, // Disable
    dbName:'ARTISTRY AI'
  })
  cached.conn = await cached.promise
  return cached.conn

};
