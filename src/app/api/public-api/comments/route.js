export const revalidate = 0;
import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

// create comment
export async function POST(req, res) {
    try {
      let reqBody = await req.json();
      reqBody.blogId = parseInt(reqBody.blogId)
      let prisma = new PrismaClient();
      let result = await prisma.comment.create({
        data: reqBody,
      });
      return NextResponse.json({ status: true, data: result });
    } catch (e) {
      console.log(e);
      return NextResponse.json({ status: false, data: e.toString() });
    }
  }