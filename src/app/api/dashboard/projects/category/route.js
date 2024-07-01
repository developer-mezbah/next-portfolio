export const revalidate = 0;
import prisma from "@/utils/prisma";
import { NextResponse } from "next/server";
export async function POST(req, res) {
  try {
    const bodyData = await req.json();
    const result = await prisma.Projects_category.create({
      data: { cat_name: bodyData },
    });
    return NextResponse.json({ status: "success", data: result });
  } catch (error) {
    return NextResponse.json({ status: "fail", data: error });
  }
}
