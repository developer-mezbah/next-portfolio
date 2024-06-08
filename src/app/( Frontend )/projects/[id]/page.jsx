import ProjectDetails from "@/components/ProjectDetails/ProjectDetails";
import MasterLayout from "@/layout/MasterLayout";
import { PrismaClient } from "@prisma/client";

async function getData(id) {
  try {
    const prisma = new PrismaClient();
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
}

const ProjectsDetails = async (props) => {
  let id = await props.searchParams["id"]
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
};

export default ProjectsDetails;
