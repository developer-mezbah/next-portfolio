"use server";
import fs from "fs/promises";
import path from "path";
import { v4 as uuidv4 } from "uuid";
import os from "os";
import cloudinary from "cloudinary";
import { revalidatePath } from "next/cache";

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});


export async function getAllPhotos() {
  try {
    const { resources } = await cloudinary.v2.search
      .expression("folder:portfolio/*")
      .sort_by("created_at", "desc")
      .max_results(500)
      .execute();

    return resources;
  } catch (error) {
    return { errMsg: error.message };
  }
}

export async function deletePhoto(public_id) {
  try {
      // Delete to cloudinary
      await cloudinary.v2.uploader.destroy(public_id)

    revalidatePath("/");

    return { msg: "Delete Success" };
  } catch (error) {
    return { errMsg: error.message };
  }
}

export async function revalidata(path) {
  revalidatePath(path);
}