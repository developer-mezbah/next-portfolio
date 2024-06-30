export const revalidate = 0;
import About from "@/components/About/About";
import MasterLayout from "@/layout/MasterLayout";
import { PrismaClient } from "@prisma/client";

async function getData() {
  try {
    const prisma = new PrismaClient();
    const data = await prisma.About_me.findFirst({});
    const sectionDetails = await prisma.section_details.findFirst({});
    return { data, sectionDetails };
  } catch (error) {
    console.log(error);
  }
}

export async function generateMetadata(props) {
  const data = await getData();
  return {
    title: "About Me | Mezbah Uddin",
    description: data?.data?.content,
    openGraph: {
      title: data?.data?.title,
      images: [data?.data?.img, data?.data?.cv],
      description: data?.data?.content,
    },
  };
}

const page = async () => {
  const data = await getData();
  return (
    <MasterLayout>
      <About data={data?.data} sectionDetails={data?.sectionDetails} />
    </MasterLayout>
  );
};

export default page;
