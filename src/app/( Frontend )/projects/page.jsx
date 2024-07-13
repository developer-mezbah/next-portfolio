export const revalidate = 0;
import { TracingBeam } from "@/components/Others/TracingBeam";
import Projects from "@/components/Projects/Projects";
import MasterLayout from "@/layout/MasterLayout";
import prisma from "@/utils/prisma";

// async function getData() {
//     const projectsFetch = prisma.projects.findMany({
//       orderBy: { id: "desc" },
//       include: {
//         for_developer: true,
//         key_feature: true,
//         profile: { select: { user_name: true, img: true } },
//       },
//     });
//     const categoriesFetch = prisma.projects_category.findMany({});
//     const sliderProjectsFetch = prisma.projects.findMany({
//       where: { type: "slider" },
//       orderBy: { id: "desc" },
//       take: 5,
//     });
//     const sectionDetailsFetch = prisma.section_details.findFirst({});
//     const [projects, categories, sliderProjects,sectionDetails] = await Promise.all([projectsFetch, categoriesFetch, sliderProjectsFetch,sectionDetailsFetch])
//     return { projects, categories, sliderProjects,sectionDetails };
// }

// export async function generateMetadata() {
//   const data = await getData();
//   return {
//     title: "Projects | Mezbah Uddin",
//     description: "This is Projects page. I am Mezbah Uddin, a dedicated and passionate full stack web developer with a keen eye for detail and a commitment to creating seamless, user-friendly web experiences. With expertise in both front-end and back-end technologies, I specialize in building robust, scalable, and dynamic web applications. My proficiency spans across HTML, CSS, JavaScript, and various back-end frameworks, enabling me to deliver comprehensive solutions tailored to meet diverse client needs. I thrive in collaborative environments, continuously seeking opportunities to innovate and enhance the digital landscape through cutting-edge web development practices.",
//     openGraph: {
//       title: data?.projects[0]?.title,
//       images: [data?.projects[0]?.banner_img],
//       description: data?.projects[0]?.description,
//     },
//   };
// }

const projectsFetch = async () => {
  const data = await prisma.projects.findMany({
    orderBy: { id: "desc" },
    include: {
      for_developer: true,
      key_feature: true,
      profile: { select: { user_name: true, img: true } },
    },
  });
  return data;
};
// const categoriesFetch = async () => {
//   const data = await prisma.projects_category.findMany({});
//   return data;
// };
const sliderProjectsFetch = async () => {
    const data = await prisma.projects.findMany({
      where: { type: "slider" },
      orderBy: { id: "desc" },
      take: 5,
    });
  return data;
};
const sectionDetailsFetch = async () => {
  const data = await prisma.section_details.findFirst({});
  return data;
};

const page = async () => {
  // const data = await getData();
  const projectPromise = projectsFetch()
  const sliderPromise = sliderProjectsFetch()
  const detailsPromise = sectionDetailsFetch()
  const [projects, sliderProjects, sectionDetails] = await Promise.all([projectPromise, sliderPromise, detailsPromise])
  return (
    <MasterLayout>
      <TracingBeam className="pl-6 md:pl-0">
        <Projects
          sectionDetails={sectionDetails}
          sliderData={sliderProjects}
          projects={projects}
        />
      </TracingBeam>
    </MasterLayout>
  );
};

export default page;
