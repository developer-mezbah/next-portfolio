export const revalidate = 0;
import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

// create comment
export async function POST(req, res) {
  try {
    let reqBody = await req.json();
    let prisma = new PrismaClient();

    let result = await prisma.comment.create({
      data: reqBody,
    });

    return NextResponse.json({ status: true, data: result });
  } catch (e) {
    return NextResponse.json({ status: false, data: e.toString() });
  }
}

// Delete Comment
export async function DELETE(req, res) {
  try {
    let { searchParams } = new URL(req.url);
    let ID = searchParams.get("id");

    let prisma = new PrismaClient();

    let result = await prisma.comment.delete({
      where: { id: parseInt(ID) },
    });

    return NextResponse.json({ status: true, data: result });
  } catch (e) {
    return NextResponse.json({ status: false, data: e.toString() });
  }
}

// comments read all
export async function GET(req, res) {
  try {
    let prisma = new PrismaClient();

    let result = await prisma.comment.findMany({});

    return NextResponse.json({ status: true, data: result });
  } catch (e) {
    return NextResponse.json({ status: false, data: e.toString() });
  }
}

// upadate comments
export async function PUT(req, res) {
  try {
    let { searchParams } = new URL(req.url);
    let serviceID = searchParams.get("id");

    let reqBody = await req.json();
    let prisma = new PrismaClient();

    let result = await prisma.comment.update({
      where: { id: parseInt(serviceID) },
      data: reqBody,
    });

    return NextResponse.json({ status: true, data: result });
  } catch (e) {
    return NextResponse.json({ status: false, data: e.toString() });
  }
}
