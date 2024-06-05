export const revalidate = 0;
export const maxDuration = 300;
import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function GET(req, res) {
  try {
    const prisma = new PrismaClient();
    const result = await prisma.services.findMany({
      orderBy: { id: "desc" },
      include: { service_items: true },
    });
    return NextResponse.json({ status: "success", data: result });
  } catch (error) {
    return NextResponse.json({ status: "fail", data: error });
  }
}

export async function POST(req, res) {
  try {
    const bodyData = await req.json();
    const prisma = new PrismaClient();

    const createdService = await prisma.services.create({
      data: {
        title: bodyData.title,
        svg: bodyData.svg,
      },
    });
    if (createdService) {
      const newServiceItems = [];
      bodyData.services.forEach((item) => {
        newServiceItems.push({
          name: item.name,
          serviceId: createdService.id,
        });
      });
      await prisma.service_items.createMany({
        data: newServiceItems,
      });
    }
    return NextResponse.json({ status: "success", data: createdService });
  } catch (error) {
    return NextResponse.json({ status: "fail", data: error });
  }
}

export async function DELETE(req, res) {
  try {
    const { searchParams } = new URL(req.url);
    const id = parseInt(searchParams.get("id"));
    const prisma = new PrismaClient();
    const result = await prisma.services.delete({
      where: { id },
    });
    return NextResponse.json({ status: "success", data: result });
  } catch (error) {
    return NextResponse.json({ status: "fail", data: error });
  }
}

export async function PUT(req, res) {
  try {
    const bodyData = await req.json();
    const prisma = new PrismaClient();
    const { searchParams } = new URL(req.url);
    const id = parseInt(searchParams.get("id"));

    const createdService = await prisma.services.update({
      data: {
        title: bodyData.title,
        svg: bodyData.svg,
      },
      where: { id },
    });

    await prisma.service_items.deleteMany({
      where: { serviceId: id },
    });

    const newServiceItems = [];
    bodyData.services.forEach((item) => {
      newServiceItems.push({
        name: item.name,
        serviceId: createdService.id,
      });
    });
    await prisma.service_items.createMany({
      data: newServiceItems,
    });
    return NextResponse.json({ status: "success", data: createdService });
  } catch (error) {
    return NextResponse.json({ status: "fail", data: error });
  }
}
