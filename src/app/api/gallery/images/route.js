import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

// GET images by category name
export async function GET(req, res) {
  try {
    const { searchParams } = new URL(req.url);
    const cat_id = parseInt(searchParams.get("id"));
    const prisma = new PrismaClient();
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
    const prisma = new PrismaClient();
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

// Delete image by category name
export async function DELETE(req, res){
  try {
    const { searchParams } = new URL(req.url);
    const id = parseInt(searchParams.get("id"));
    const result = await prisma.gallery_img.delete({
      where: {id: id}
    })
    return NextResponse.json({ status: "success", data: result });
  } catch (error) {
    return NextResponse.json({ status: "fail", data: error });
  }
}
