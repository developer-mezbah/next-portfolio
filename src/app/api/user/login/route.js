import { CreateToken } from "@/utils/JWTTokenHelper";
import prisma from "@/utils/prisma";
import { headers } from "next/headers";
import { NextResponse } from "next/server";

const md5 = require("md5");

export async function POST(req, res) {
  try {
    let reqBody = await req.json();
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
    let headerList = headers();
    let id = parseInt(headerList.get("id"));
    return NextResponse.json({ status: "success", data: "data" });
  } catch (error) {
    return NextResponse.json({ status: false, data: error.toString() });
  }
}
