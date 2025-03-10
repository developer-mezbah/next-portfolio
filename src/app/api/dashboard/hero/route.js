export const revalidate = 0;
import prisma from "@/utils/prisma";
import { NextResponse } from "next/server";

export async function POST(req, res) {
  try {
    const bodyData = await req.json();
    const result = await prisma.hero.create({
      data: {
        title1: bodyData?.title1,
        title2: bodyData?.title2,
        title3: bodyData?.title3,
        title4: bodyData?.title4,
        subtitle: bodyData.subtitle,
        description: bodyData.description,
        img: bodyData.img,
      },
    });
    return NextResponse.json({ status: "success", data: result });
  } catch (error) {
    return NextResponse.json({ status: "fail", data: error });
  }
}

export async function GET(req, res) {
  try {
    const result = await prisma.hero.findFirst({});
    return NextResponse.json({ status: "success", data: result });
  } catch (error) {
    return NextResponse.json({ status: "fail", data: error });
  }
}

export async function PUT(req, res){
  try {
    const {searchParams} = new URL(req.url)
    const ID = parseInt(searchParams.get('id'))
    const bodyData = await req.json()
    const result = await prisma.hero.update({
      data: bodyData,
      where: {id: ID}
    })
    return NextResponse.json({ status: "success", data: result });
  } catch (error) {
    return NextResponse.json({ status: "fail", data: error });
  }
}