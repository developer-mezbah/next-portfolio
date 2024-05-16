export const revalidate = 0;
import { TracingBeam } from "@/components/Others/TracingBeam";
import Projects from "@/components/Projects/Projects";
import MasterLayout from "@/layout/MasterLayout";
// import { projectSlider, projects } from "@/utils/fakeData";
import { PrismaClient } from "@prisma/client";

async function getData() {
  try {
    const prisma = new PrismaClient();
    const projects = await prisma.projects.findMany({
      orderBy: { id: "desc" },
      include: {
        for_developer: true,
        key_feature: true,
        profile: { select: { user_name: true, img: true } },
      },
    });
    const categories = await prisma.projects_category.findMany({});
    const sliderProjects = await prisma.projects.findMany({
      where: { type: "slider" },
      orderBy: { id: "desc" },
      take: 5,
    });
    const sectionDetails = await prisma.section_details.findFirst({});
    return { projects, categories, sliderProjects,sectionDetails };
  } catch (error) {
    console.log(error);
  }
}

const page = async () => {
  const data = await getData();
  return (
    <MasterLayout>
      <TracingBeam className="pl-6 md:pl-0">
        <Projects sectionDetails={data?.sectionDetails} sliderData={data?.sliderProjects} projects={data?.projects} />
      </TracingBeam>
    </MasterLayout>
  );
};

export default page;
