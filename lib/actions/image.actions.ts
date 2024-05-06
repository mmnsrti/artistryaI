"use server";

import { revalidatePath } from "next/cache";
import { connectToDatabase } from "../database/mongoose";
import { handleError } from "../utils";
import Image from "../database/models/image.model";
import User from "../database/models/user.model";
import { redirect } from "next/navigation";

const populateUser = (query: any) =>
  query.populate({
    path: "author",
    model: User,
    select: "_id firstName lastName",
  });
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
    return JSON.parse(JSON.stringify(newImage));
  } catch (error) {
    handleError(error);
  }
}
export async function updateImage({ image, userId, path }: AddImageParams) {
  try {
    await connectToDatabase();
    const imagetoUpdate = await Image.findById(image._id);
    if (!imagetoUpdate || imagetoUpdate.author.toHexString() !== userId) {
      throw new Error("unauthorized or image not found ");
    }
    const updateImage = await Image.findByIdAndUpdate(
      imagetoUpdate._id,
      image,
      { new: true }
    );
    revalidatePath(path);
    return JSON.parse(JSON.stringify(image));
  } catch (error) {
    handleError(error);
  }
}
export async function deleteImage({ imageId }: string) {
  try {
    await connectToDatabase();
    await Image.findByIdAndDelete(imageId);
    revalidatePath(path);
    return JSON.parse(JSON.stringify(image));
  } catch (error) {
    handleError(error);
  } finally {
    redirect("/");
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
