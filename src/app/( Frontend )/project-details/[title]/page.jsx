export const dynamic = "force-dynamic";
import ProjectDetails from "@/components/ProjectDetails/ProjectDetails";
import MasterLayout from "@/layout/MasterLayout";
import prisma from "@/utils/prisma";
import { cache } from "react";

const getData = cache(async (id) => {
  try {
    const projects = await prisma.projects.findUnique({
      where: { id: parseInt(id) },
      include: {
        profile: { select: { user_name: true, img: true } },
        key_feature: true,
        for_developer: true,
      },
    });
    const relatedProjects = await prisma.projects.findMany({
      where: { categoryId: projects.categoryId },
    });

    return { projects, relatedProjects };
  } catch (error) {
    console.log(error);
  }
});

export async function generateMetadata(props) {
  let id = await props.searchParams["id"];
  const data = await getData(id);
  return {
    title: data?.projects?.title,
    description: data?.projects?.description,
    keywords: [data?.projects?.keywords],
    openGraph: {
      images: [data?.projects?.long_img, data?.projects?.banner_img],
    },
  };
}

export default async function page(props) {
  let id = await props.searchParams["id"];
  const data = await getData(id);
  return (
    <MasterLayout>
      <div>
        <ProjectDetails
          data={data?.projects}
          relatedProjects={data?.relatedProjects}
        />
      </div>
    </MasterLayout>
  );
}
