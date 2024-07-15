export const revalidate = 0;
import Services from "@/components/Services/Services";
import MasterLayout from "@/layout/MasterLayout";
import { sectionDetailsPromise, servicePromise } from "@/utils/fetchData";


export function generateMetadata() {
  return {
    title: "Services | Mezbah Uddin",
    description: "Discover the professional web development services offered by Mezbah Uddin. Specializing in full stack development with expertise in React, Next.js, Node.js, Express, and MongoDB. From custom web applications to responsive designs and secure admin dashboards, Mezbah provides tailored solutions to meet your business needs.",
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
