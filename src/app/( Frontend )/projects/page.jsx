export const revalidate = 0;
import { TracingBeam } from "@/components/Others/TracingBeam";
import Projects from "@/components/Projects/Projects";
import MasterLayout from "@/layout/MasterLayout";
import {
  projectsFetch,
  sectionDetailsPromise,
  sliderProjectsFetch,
} from "@/utils/fetchData";

export async function generateMetadata() {
  const [projects] = await Promise.all([projectsFetch]);
  return {
    title: "Projects | Mezbah Uddin",
    description:
      "Explore the portfolio of Mezbah Uddin, a skilled full stack web developer. Discover innovative web applications developed using React, Next.js, Node.js, Express, MongoDB, and Firebase. From responsive designs to advanced admin dashboards, Mezbah's projects highlight a commitment to quality and functionality.",
    openGraph: {
      images: [
        projects[0]?.banner_img,
        projects[1]?.banner_img,
        projects[2]?.banner_img,
        projects[3]?.banner_img,
        projects[4]?.banner_img,
      ],
    },
  };
}

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
