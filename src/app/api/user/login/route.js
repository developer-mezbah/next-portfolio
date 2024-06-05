import { CreateToken } from "@/utils/JWTTokenHelper";
import { PrismaClient } from "@prisma/client";
import { headers } from "next/headers";
import { NextResponse } from "next/server";
export const maxDuration = 300;

const md5 = require("md5");

export async function POST(req, res) {
  try {
    let reqBody = await req.json();
    const prisma = new PrismaClient();
    reqBody.password = md5(reqBody.password);

    const result = await prisma.profile.findMany({
      where: reqBody,
    });
    if (result.length === 0) {
      return NextResponse.json({ status: false, data: result });
    } else {
      const token = await CreateToken(result[0].email, result[0].id);
      const expirationDate = new Date(Date.now() + 24 * 60 * 60 * 1000);
      const cookieString = `token=${token}; expires=${expirationDate.toUTCString()}; path=/`;
      return NextResponse.json(
        { status: true, data: token },
        { status: 200, headers: { "set-cookie": cookieString } }
      );
    }
  } catch (error) {
    return NextResponse.json({ status: false, data: error.toString() });
  }
}

export async function GET(req, res) {
  try {
    const prisma = new PrismaClient();
    let headerList = headers();
    let id = parseInt(headerList.get("id"));
    return NextResponse.json({ status: "success", data: "data" });
  } catch (error) {
    return NextResponse.json({ status: false, data: error.toString() });
  }
}
