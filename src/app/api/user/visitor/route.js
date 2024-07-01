import prisma from "@/utils/prisma";
import { NextResponse } from "next/server";
export async function POST(req, res) {
  try {
    let reqBody = await req.json();
    const existingVisit = await prisma.visitor_data.findMany({
      where: {
        ip: reqBody.ip,
      },
    });

    if (existingVisit.length === 0) {
      // If the visitor is unique, save the visit information to the database
      let result = await prisma.visitor_data.create({
        data: {
          ip: reqBody.ip,
        },
      });

      return NextResponse.json({ status: true, data: result });
    }

    return NextResponse.json({ status: true, data: null });
  } catch (e) {
    return NextResponse.json({ status: false, data: e.toString() });
  }
}
