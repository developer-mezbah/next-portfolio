export const revalidate = 0;
import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function POST(req, res) {
  try {
    const bodyData = await req.json();
    const prisma = new PrismaClient();
    
    const profileResult = await prisma.profile.findFirst();
    const createdProject = await prisma.projects.create({
      data: {
        banner_img: bodyData.banner_img,
        long_img: bodyData.long_img,
        price: bodyData.price,
        code_url: bodyData.code_url,
        preview_url: bodyData.preview_url,
        title: bodyData.title,
        description: bodyData.description,
        keywords: bodyData.keywords,
        type: bodyData.type,
        profileId: profileResult.id,
        categoryId: parseInt(bodyData.categoryId),
      },
    });
    if (createdProject) {
      const for_developers = [];
      bodyData.for_developers.forEach((item) => {
        for_developers.push({ title: item, projectId: createdProject.id });
      });
      await prisma.for_developers.createMany({
        data: for_developers,
      });
      const key_features = [];
      bodyData.key_features.forEach((item) => {
        key_features.push({ title: item, projectId: createdProject.id });
      });
      await prisma.Key_features.createMany({
        data: key_features,
      });
    }
    return NextResponse.json({ status: "success", data: createdProject });
  } catch (error) {
    return NextResponse.json({ status: "fail", data: error });
  }
}
