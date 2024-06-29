export const revalidate = 0;
import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function POST(req, res) {
  try {
    let reqBody = await req.json();
    const prisma = new PrismaClient();
    const result = await prisma.Web_information.create({
      data: reqBody,
    });
    return NextResponse.json({ status: "success", data: result });
  } catch (error) {
    return NextResponse.json({ status: "fail", data: error });
  }
}

export async function GET(req, res) {
  try {
    const prisma = new PrismaClient();
    const result = await prisma.Web_information.findFirst({});
    return NextResponse.json({ status: "success", data: result });
  } catch (error) {
    return NextResponse.json({ status: "fail", data: error });
  }
}


export async function PUT(req, res) {
    try {
      const { searchParams } = new URL(req.url);
      const id = parseInt(searchParams.get("id"));
      const reqBody = await req.json();
      const prisma = new PrismaClient();
      const result = await prisma.Web_information.update({
        data: reqBody,
        where: { id },
      });
      return NextResponse.json({ status: "success", data: result });
    } catch (error) {
      return NextResponse.json({ status: "fail", data: error });
    }
  }
