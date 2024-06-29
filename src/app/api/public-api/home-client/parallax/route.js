export const revalidate = 0;
import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function GET(req, res) {
  try {
    const prisma = new PrismaClient();
    const marque = await prisma.marquee.findFirst({});
    return NextResponse.json({ status: "success", data: marque });
  } catch (error) {
    return NextResponse.json({ status: false, data: error.toString() });
  }
}
