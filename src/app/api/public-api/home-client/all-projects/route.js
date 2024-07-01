export const revalidate = 0;
import prisma from "@/utils/prisma";
import { NextResponse } from "next/server";

export async function GET(req, res) {
  try {
    const allProjects = await prisma.projects.findMany({
      take: 4,
      orderBy: { id: "desc" },
    });
    return NextResponse.json({ status: "success", data: allProjects });
  } catch (error) {
    return NextResponse.json({ status: false, data: error.toString() });
  }
}
