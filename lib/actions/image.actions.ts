"use server";

import { revalidatePath } from "next/cache";
import { connectToDatabase } from "../database/mongoose";
import { handleError } from "../utils";
import Image from "../database/models/image.model";
import User from "../database/models/user.model";

export async function addImage({ image, userId, path }: AddImageParams) {
  try {
    await connectToDatabase();
    const author = await User.findById(userId);
    if (!author) {
      throw new Error("user not found");
    }
    const newImage = await Image.create({
      ...image,
      author,
    });
    revalidatePath(path);
    return JSON.parse(JSON.stringify(image));
  } catch (error) {
    handleError(error);
  }
}
export async function updateImage({ image, userId, path }: AddImageParams) {
  try {
    await connectToDatabase();
    revalidatePath(path);
    return JSON.parse(JSON.stringify(image));
  } catch (error) {
    handleError(error);
  }
}
export async function deleteImage({ imageId }: string) {
  try {
    await connectToDatabase();
    revalidatePath(path);
    return JSON.parse(JSON.stringify(image));
  } catch (error) {
    handleError(error);
  }
}
export async function getImageById({ imageId }: string) {
  try {
    await connectToDatabase();
    revalidatePath(path);
    return JSON.parse(JSON.stringify(image));
  } catch (error) {
    handleError(error);
  }
}
