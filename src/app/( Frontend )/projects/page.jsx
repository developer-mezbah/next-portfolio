export const revalidate = 0;
import { TracingBeam } from "@/components/Others/TracingBeam";
import Projects from "@/components/Projects/Projects";
import MasterLayout from "@/layout/MasterLayout";
// import { projectSlider, projects } from "@/utils/fakeData";
import { PrismaClient } from "@prisma/client";

async function getData() {
  const prisma = new PrismaClient();
  const projects = await prisma.projects.findMany({
    orderBy: {id: 'desc'},
    include: {for_developer: true, key_feature: true,profile: {select: {user_name: true, img: true}}}
  });
  const categories = await prisma.projects_category.findMany({})
  return {projects, categories};
}


const page = async () => {
  const data = await getData();
  return (
    <MasterLayout>
      
    <TracingBeam className="pl-6 md:pl-0">
      <Projects sliderData={data?.projects} projects={data?.projects}/>
      </TracingBeam>
    </MasterLayout>
  );
};

export default page;
