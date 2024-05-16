export const revalidate = 0;
import Skills from "@/components/Skills/Skills";
import MasterLayout from "@/layout/MasterLayout";
import { PrismaClient } from "@prisma/client";

async function getData() {
  try {
    const prisma = new PrismaClient();
    const data = await prisma.skills.findMany({
      include: { skill_items: true },
    });
    
    const sectionDetails = await prisma.section_details.findFirst({});
    return {data,sectionDetails};
  } catch (error) {
    console.log(error);
  }
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
