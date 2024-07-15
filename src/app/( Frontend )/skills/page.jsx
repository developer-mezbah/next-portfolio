export const revalidate = 0;
import Skills from "@/components/Skills/Skills";
import MasterLayout from "@/layout/MasterLayout";
import { sectionDetailsPromise, skillPromise } from "@/utils/fetchData";
import prisma from "@/utils/prisma";

export function generateMetadata() {
  return {
    title: "Skills | Mezbah Uddin",
    description:
      "This is Skills page. There is lot of Skills like full stact web developer and good communication with everyone.",
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
