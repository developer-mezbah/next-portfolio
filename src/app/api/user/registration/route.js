export const revalidate = 0;
export const maxDuration = 300;
let md5 = require("md5");
import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function POST(req, res) {
  try {
    let prisma = new PrismaClient();

    let result = await prisma.profile.create({
      data: { id: 1, email: "admin@mezbah.com", password: md5("admin") },
    });

    return NextResponse.json({ status: true, data: result });
  } catch (e) {
    return NextResponse.json({ status: false, data: e.toString() });
  }
}

