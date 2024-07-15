export const revalidate = 0;
import About from "@/components/About/About";
import MasterLayout from "@/layout/MasterLayout";
import { aboutPromise, sectionDetailsPromise } from "@/utils/fetchData";



export async function generateMetadata() {
  
  const [data] = await Promise.all([aboutPromise])
  return {
    title: "About Me | Mezbah Uddin",
    description: data?.content,
    openGraph: {
      title: data?.title,
      images: [data?.img, data?.cv],
      description: data?.content,
    },
  };
}

const page = async () => {
  const [data, sectionDetails] = await Promise.all([aboutPromise, sectionDetailsPromise])
  return (
    <MasterLayout>
      <About data={data} sectionDetails={sectionDetails} />
    </MasterLayout>
  );
};

export default page;
