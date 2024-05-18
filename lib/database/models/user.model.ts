import { Schema, model, models, Document } from "mongoose";
export interface UserProps extends Document {
  clerkId: string;
  email: string; // Assuming these are the only allowed values
  userName: string;
  photo: string;
  firstName?: string; // Optional properties denoted by '?'
  lastName?: string;
  planId?: number;
  creditBalance?: number;
}
const UserSchema = new Schema<UserProps>({
  clerkId: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  userName: { type: String, required: true, unique: true },
  photo: { type: String, required: true },
  firstName: { type: String },
  lastName: { type: String },
  planId: { type: Number },
  creditBalance: { type: Number, default: 10 },
});

const User = models?.User || model("User", UserSchema);
export default User;
