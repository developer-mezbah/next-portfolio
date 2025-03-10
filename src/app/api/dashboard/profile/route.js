export const revalidate = 0;
import prisma from "@/utils/prisma";
import { NextResponse } from "next/server";
let md5 = require("md5");

// export async function POST(req, res) {
//   try {
//     const bodyData = await req.json();
//     const result = await prisma.profile.create({
//       data: {
//         bodyData,
//       },
//     });
//     return NextResponse.json({ status: "success", data: result });
//   } catch (error) {
//     return NextResponse.json({ status: "fail", data: error });
//   }
// }

export async function GET(req, res) {
  try {
    const result = await prisma.profile.findFirst({});
    return NextResponse.json({ status: "success", data: result });
  } catch (error) {
    return NextResponse.json({ status: "fail", data: error });
  }
}

export async function PUT(req, res) {
  try {
    const { searchParams } = new URL(req.url);
    const ID = parseInt(searchParams.get("id"));
    let bodyData = await req.json();
    if (bodyData.password) {
      bodyData.password = md5(bodyData.password)
    }
    const result = await prisma.profile.update({
      data: bodyData,
      where: { id: ID },
    });
    return NextResponse.json({ status: "success", data: result });
  } catch (error) {
    return NextResponse.json({ status: "fail", data: error });
  }
}
