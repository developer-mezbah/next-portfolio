import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function GET(req, res) {
  try {
    const prisma = new PrismaClient();
    let educationQualify = await prisma.qualification.findMany({
      where: { role: "Education" },
    });
    let workQualify = await prisma.qualification.findMany({
      where: { role: "Work" },
      orderBy: { id: "desc" },
    });
    const sectionDetails = await prisma.section_details.findFirst({});
    return NextResponse.json({ status: "success", data: {educationQualify, workQualify, sectionDetails} });
  } catch (error) {
    return NextResponse.json({ status: false, data: error.toString() });
  }
}
