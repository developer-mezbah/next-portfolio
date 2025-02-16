export const revalidate = 0;
import prisma from "@/utils/prisma";
import { NextResponse } from "next/server";

export async function GET(req, res) {
  try {
    const { searchParams } = new URL(req.url);
    const id = parseInt(searchParams.get("id"));
    const result = await prisma.projects.findMany({
      where: { categoryId: id },
      orderBy: {id: 'desc'},
    });
    return NextResponse.json({ status: "success", data: result });
  } catch (error) {
    return NextResponse.json({ status: "fail", data: error });
  }
}
