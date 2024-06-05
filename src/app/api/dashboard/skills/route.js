export const revalidate = 0;
export const maxDuration = 300;
import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function GET(req, res) {
  try {
    const prisma = new PrismaClient();
    const result = await prisma.Skills.findMany({
      orderBy: { id: "desc" },
      include: { skill_items: true },
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

    const createdSkill = await prisma.skills.create({
      data: {
        title: bodyData.title,
        subTitle: bodyData.subTitle,
        svg: bodyData.svg,
      },
    });
    if (createdSkill) {
      const newSkillItems = [];
      bodyData.skills.forEach((item) => {
        newSkillItems.push({
          name: item.name,
          percent: item.percent,
          skillId: createdSkill.id,
        });
      });
      await prisma.Skill_items.createMany({
        data: newSkillItems,
      });
    }
    return NextResponse.json({ status: "success", data: createdSkill });
  } catch (error) {
    return NextResponse.json({ status: "fail", data: error });
  }
}

export async function DELETE(req, res) {
  try {
    const { searchParams } = new URL(req.url);
    const id = parseInt(searchParams.get("id"));
    const prisma = new PrismaClient();
    const result = await prisma.skills.delete({
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

    const createdSkill = await prisma.skills.update({
      data: {
        title: bodyData.title,
        subTitle: bodyData.subTitle,
        svg: bodyData.svg,
      },
      where: { id },
    });

    await prisma.skill_items.deleteMany({
      where: { skillId: id },
    });

    const newSkillItems = [];
    bodyData.skills.forEach((item) => {
      newSkillItems.push({
        name: item.name,
        percent: item.percent,
        skillId: createdSkill.id,
      });
    });
    await prisma.Skill_items.createMany({
      data: newSkillItems,
    });
    return NextResponse.json({ status: "success", data: createdSkill });
  } catch (error) {
    return NextResponse.json({ status: "fail", data: error });
  }
}
