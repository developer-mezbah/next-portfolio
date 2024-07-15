export const revalidate = 0;
import Skills from "@/components/Skills/Skills";
import MasterLayout from "@/layout/MasterLayout";
import { sectionDetailsPromise, skillPromise } from "@/utils/fetchData";
import prisma from "@/utils/prisma";

export function generateMetadata() {
  return {
    title: "Skills | Mezbah Uddin",
    description:
      "Explore the diverse skill set of Mezbah Uddin, a proficient full stack web developer. With expertise in React, Next.js, Node.js, Express, MongoDB, and Firebase, Mezbah delivers robust and scalable web solutions. Discover capabilities in frontend and backend development, responsive design, and more.",
  };
}
const page = async () => {
  const [data, sectionDetails] = await Promise.all([
    skillPromise,
    sectionDetailsPromise,
  ]);
  return (
    <MasterLayout>
      <Skills data={data} sectionDetails={sectionDetails} />
    </MasterLayout>
  );
};

export default page;
