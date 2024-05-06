import { Schema, model, models, Document } from "mongoose";

export interface ImageProps extends Document {
  title: string;
  TransformationType: string; // Assuming these are the only allowed values
  publicId: string;
  secureURL: URL;
  width?: number; // Optional properties denoted by '?'
  height?: number;
  config?: object;
  TransformationUrl?: URL;
  aspectRatio?: string;
  color?: string;
  prompt?: string;
  author:
    | {
        _id: string;
        firstName: string;
        lastName: string;

      }
    | string; // Assuming Schema.Types.ObjectId is defined elsewhere
  createdAt?: Date; // Default value will be set in Mongoose schema
  updatedAt?: Date;
}

const ImageSchema = new Schema<ImageProps>({
  title: { type: String, require: true },
  TransformationType: { type: String, require: true }, //enum('resize','c
  publicId: { type: String, require: true },
  secureURL: { type: String, require: true },
  width: { type: Number },
  height: { type: Number },
  config: { type: Object },
  TransformationUrl: { type: String },
  aspectRatio: { type: String },
  color: { type: String },
  prompt: { type: String },
  author: { type: Schema.Types.ObjectId, ref: "User" },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});
const Image = models?.Image || model("Image", ImageSchema);
export default Image;
