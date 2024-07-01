export const revalidate = 0;
import prisma from "@/utils/prisma";
import { NextResponse } from "next/server";

// Get all images from gallery
export async function GET(req, res) {
  try {
    const { searchParams } = new URL(req.url);
    const id = parseInt(searchParams.get("id"));
    if (id) {
      const result = await prisma.gallery_img.findMany({
        where: { cat_id: id },
        orderBy: { id: "desc" },
      });
      return NextResponse.json({ status: "success", data: result });
    } else {
      const result = await prisma.gallery_img.findMany({
        orderBy: { id: "desc" },
      });
      return NextResponse.json({ status: "success", data: result });
    }
  } catch (error) {
    return NextResponse.json({ status: "fail", data: error });
  }
}
