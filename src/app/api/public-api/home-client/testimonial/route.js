export const revalidate = 0;
import prisma from "@/utils/prisma";
import { NextResponse } from "next/server";

export async function GET(req, res) {
  try {
    const testimonial = await prisma.Testimonial.findMany({
      orderBy: { id: "desc" },
    });

    const sectionDetails = await prisma.section_details.findFirst({});
    return NextResponse.json({
      status: "success",
      data: { testimonial, sectionDetails },
    });
  } catch (error) {
    return NextResponse.json({ status: false, data: error.toString() });
  }
}
