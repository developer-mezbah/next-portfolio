export const revalidate = 0;
let md5 = require("md5");
import prisma from "@/utils/prisma";
import { NextResponse } from "next/server";

export async function POST(req, res) {
  try {

    let result = await prisma.profile.create({
      data: { id: 1, email: "admin@mezbah.com", password: md5("admin") },
    });

    return NextResponse.json({ status: true, data: result });
  } catch (e) {
    return NextResponse.json({ status: false, data: e.toString() });
  }
}

