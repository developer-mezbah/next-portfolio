export const revalidate = 0;
import prisma from "@/utils/prisma";
import { NextResponse } from "next/server";

// create comment
export async function POST(req, res) {
  try {
    let reqBody = await req.json();
    reqBody.blogId = parseInt(reqBody.blogId)
    let result = await prisma.comment.create({
      data: reqBody,
    });
    return NextResponse.json({ status: true, data: result });
  } catch (e) {
    console.log(e);
    return NextResponse.json({ status: false, data: e.toString() });
  }
}

// Delete Comment
export async function DELETE(req, res) {
  try {
    let { searchParams } = new URL(req.url);
    let ID = searchParams.get("id");


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

    let result = await prisma.comment.findMany({
      include: {blog: {select: {title: true}}}
    });

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

    let result = await prisma.comment.update({
      where: { id: parseInt(serviceID) },
      data: reqBody,
    });

    return NextResponse.json({ status: true, data: result });
  } catch (e) {
    return NextResponse.json({ status: false, data: e.toString() });
  }
}
