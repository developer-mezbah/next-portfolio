export const revalidate = 0;
import prisma from "@/utils/prisma";
import { NextResponse } from "next/server";

export async function GET(req, res) {
  try {
    const result = await prisma.Qualification.findMany({});
    return NextResponse.json({ status: "success", data: result });
  } catch (error) {
    return NextResponse.json({ status: "fail", data: error });
  }
}
export async function POST(req, res) {
  try {
    const reqBody = await req.json();
    const result = await prisma.Qualification.create({
      data: reqBody,
    });
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
    const result = await prisma.Qualification.update({
      data: reqBody,
      where: { id },
    });
    return NextResponse.json({ status: "success", data: result });
  } catch (error) {
    return NextResponse.json({ status: "fail", data: error });
  }
}
export async function DELETE(req, res) {
  try {
    const { searchParams } = new URL(req.url);
    const id = parseInt(searchParams.get("id"));
    const result = await prisma.Qualification.delete({
      where: { id },
    });
    return NextResponse.json({ status: "success", data: result });
  } catch (error) {
    return NextResponse.json({ status: "fail", data: error });
  }
}
