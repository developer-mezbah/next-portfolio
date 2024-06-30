export const revalidate = 0;
import Skills from "@/components/Skills/Skills";
import MasterLayout from "@/layout/MasterLayout";
// import { PrismaClient } from "@prisma/client";
import prisma from "@/utils/prisma";

async function getData() {
  try {
    // const prisma = new PrismaClient();
    const data = await prisma.skills.findMany({
      include: { skill_items: true },
    });
    
    const sectionDetails = await prisma.section_details.findFirst({});
    return {data,sectionDetails};
  } catch (error) {
    console.log(error);
  }
}
export function generateMetadata() {
  return {
    title: "Skills | Mezbah Uddin",
    description: "This is Skills page. There is lot of Skills like full stact web developer and good communication with everyone.",
  };
}
const page = async () => {
  const data = await getData();
  return (
    <MasterLayout>
      <Skills data={data?.data} sectionDetails={data?.sectionDetails} />
    </MasterLayout>
  );
};

export default page;
