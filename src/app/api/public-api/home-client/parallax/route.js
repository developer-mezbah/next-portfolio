export const revalidate = 0;
import prisma from "@/utils/prisma";
import { NextResponse } from "next/server";

export async function GET(req, res) {
  try {
    const marque = await prisma.marquee.findFirst({});
    return NextResponse.json({ status: "success", data: marque });
  } catch (error) {
    return NextResponse.json({ status: false, data: error.toString() });
  }
}
