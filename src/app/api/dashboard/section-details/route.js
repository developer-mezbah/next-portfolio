export const revalidate = 0;
import prisma from "@/utils/prisma";
import { NextResponse } from "next/server";


export async function PUT(req, res) {
  try {
    const reqBody = await req.json();
    const isExist = await prisma.section_details.findFirst({});
    if (isExist) {
      const result = await prisma.section_details.update({
        where: {id: isExist.id},
        data: reqBody
      })
      return NextResponse.json({ status: "success", data: result });
    } else {
      const result = await prisma.section_details.create({
        data: reqBody,
      });
      return NextResponse.json({ status: "success", data: result });
    }
  } catch (error) {
    return NextResponse.json({ status: "fail", data: error });
  }
}
