export const revalidate = 0;
import prisma from "@/utils/prisma";
import { NextResponse } from "next/server";

export async function GET(req, res) {
  try {
    const result = await prisma.projects.findMany({
      orderBy: { id: "desc" },
      include: {
        for_developer: true,
        key_feature: true,
        profile: { select: { user_name: true, img: true } },
      },
    });

    return NextResponse.json({ status: "success", data: result });
  } catch (error) {
    return NextResponse.json({ status: "fail", data: error });
  }
}
