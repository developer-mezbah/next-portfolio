export const revalidate = 0;
import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function GET(req, res) {
  try {
    const { searchParams } = new URL(req.url);
    const id = await searchParams.get("id");
    let prisma = new PrismaClient();
    let commentsData = await prisma.comment.findMany({
        where: { id: parseInt(id) },
    });
    let blog = await prisma.blog.findMany({
      where: { id: parseInt(id) },
      include: {
        profile: {
          select: {
            user_name: true,
            age: true,
            mobile: true,
            img: true,
            email: true,
          },
        },
      },
    });
    return NextResponse.json({
      status: "success",
      data: { blog, commentsData },
    });
  } catch (error) {
    return NextResponse.json({ status: false, data: error.toString() });
  }
}
