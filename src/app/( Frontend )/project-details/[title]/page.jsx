export const dynamic = "force-dynamic" 
import ProjectDetails from "@/components/ProjectDetails/ProjectDetails";
import MasterLayout from "@/layout/MasterLayout";
import prisma from "@/utils/prisma";

async function getData(id) {
  try {
    const projects = prisma.projects.findUnique({
      where: { id: parseInt(id) },
      include: {
        profile: { select: { user_name: true, img: true } },
        key_feature: true,
        for_developer: true,
      },
    });
    const relatedProjects = prisma.projects.findMany({
      where: { categoryId: projects.categoryId },
    });
    
  const [projectsData, relatedProjectsData] = await Promise.all([projects, relatedProjects])
    return { projectsData, relatedProjectsData };
  } catch (error) {
    console.log(error);
  }
}

export async function generateMetadata(props) {
  let id = await props.searchParams["id"];
  const data = await getData(id);
  return {
    title: data?.projectsData?.title,
    description: data?.projectsData?.description,
    keywords: [data?.projectsData?.keywords],
    openGraph: {
      title: data?.projectsData?.title,
      images: [data?.projectsData?.long_img, data?.projectsData?.banner_img],
      description: data?.projectsData?.description,
    },
  };
}


export default async function Page(props) {
  let id = await props.searchParams["id"]
  const data = await getData(id);
  return (
    <MasterLayout>
      <div>
        <ProjectDetails
          data={data?.projectsData}
          relatedProjects={data?.relatedProjectsData}
        />
      </div>
    </MasterLayout>
  );
};

