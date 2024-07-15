export const revalidate = 0;
import About from "@/components/About/About";
import MasterLayout from "@/layout/MasterLayout";
import { aboutPromise, sectionDetailsPromise } from "@/utils/fetchData";



// export async function generateMetadata(props) {
//   const data = await getData();
//   return {
//     title: "About Me | Mezbah Uddin",
//     description: data?.data?.content,
//     openGraph: {
//       title: data?.data?.title,
//       images: [data?.data?.img, data?.data?.cv],
//       description: data?.data?.content,
//     },
//   };
// }

const page = async () => {
  const [data, sectionDetails] = await Promise.all([aboutPromise, sectionDetailsPromise])
  return (
    <MasterLayout>
      <About data={data} sectionDetails={sectionDetails} />
    </MasterLayout>
  );
};

export default page;
