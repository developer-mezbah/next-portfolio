export const revalidate = 0;
import Services from "@/components/Services/Services";
import MasterLayout from "@/layout/MasterLayout";
// import { PrismaClient } from "@prisma/client";
import prisma from "@/utils/prisma";

async function getData() {
  try {
    // const prisma = new PrismaClient();
    const data = await prisma.services.findMany({
      include: { service_items: true },
    });
    
    const sectionDetails = await prisma.section_details.findFirst({});
    return {data, sectionDetails};
  } catch (error) {
    console.log(error);
  }
}


export function generateMetadata() {
  return {
    title: "Services | Mezbah Uddin",
    description: "This is Services page. There is lot of services for free.",
  };
}

const page = async () => {
  const data = await getData();
  return (
    <MasterLayout>
      <Services data={data?.data} sectionDetails={data?.sectionDetails} />
    </MasterLayout>
  );
};

export default page;
