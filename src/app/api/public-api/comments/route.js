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