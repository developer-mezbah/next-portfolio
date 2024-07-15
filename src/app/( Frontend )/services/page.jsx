export const revalidate = 0;
import Services from "@/components/Services/Services";
import MasterLayout from "@/layout/MasterLayout";
import { sectionDetailsPromise, servicePromise } from "@/utils/fetchData";


export function generateMetadata() {
  return {
    title: "Services | Mezbah Uddin",
    description: "This is Services page. There is lot of services for free.",
  };
}

const page = async () => {
  const [data, sectionDetails] = await Promise.all([servicePromise, sectionDetailsPromise])
  return (
    <MasterLayout>
      <Services data={data} sectionDetails={sectionDetails} />
    </MasterLayout>
  );
};

export default page;
