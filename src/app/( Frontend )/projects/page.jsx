export const revalidate = 0;
import { TracingBeam } from "@/components/Others/TracingBeam";
import Projects from "@/components/Projects/Projects";
import MasterLayout from "@/layout/MasterLayout";
import {
  projectsFetch,
  sectionDetailsPromise,
  sliderProjectsFetch,
} from "@/utils/fetchData";

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

const page = async () => {
  const [projects, sliderProjects, sectionDetails] = await Promise.all([
    projectsFetch,
    sliderProjectsFetch,
    sectionDetailsPromise,
  ]);
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
