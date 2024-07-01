export const revalidate = 0;
import { NextResponse } from "next/server";
import cloudinary from "cloudinary";
import prisma from "@/utils/prisma";

// GET images by category name
export async function GET(req, res) {
  try {
    const { searchParams } = new URL(req.url);
    const cat_id = parseInt(searchParams.get("id"));
    const result = await prisma.gallery_img.findMany({
      where: { cat_id },
    });
    return NextResponse.json({ status: "success", data: result });
  } catch (error) {
    return NextResponse.json({ status: "fail", data: error });
  }
}

// Create images by category name
export async function POST(req, res) {
  try {
    const reqBody = await req.json();
    const { searchParams } = new URL(req.url);
    const cat_id = parseInt(searchParams.get("id"));
    const result = await prisma.gallery_img.create({
      data: {
        img_url: reqBody.img_url,
        public_id: reqBody.public_id,
        cat_id,
      },
    });
    return NextResponse.json({ status: "success", data: result });
  } catch (error) {
    return NextResponse.json({ status: "fail", data: error });
  }
}

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});
// Delete image by category name
export async function DELETE(req, res) {
  try {
    const { searchParams } = new URL(req.url);
    const id = parseInt(searchParams.get("id"));
    const public_id = searchParams.get("public_id");

    const result = await cloudinary.v2.uploader.destroy(public_id);
    if (result.result === "ok") {
      await prisma.gallery_img.delete({
        where: { id: id },
      });
    }
    return NextResponse.json({ status: "success", data: { result } });
  } catch (error) {
    return NextResponse.json({ status: "fail", data: error });
  }
}
