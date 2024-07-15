export const revalidate = 0;
import Contact from "@/components/Contact/Contact";
import MasterLayout from "@/layout/MasterLayout";
import { sectionDetailsPromise, web_infoPromise } from "@/utils/fetchData";
import React from "react";

// export async function generateMetadata() {
//   const data = await getData();
//   return {
//     title: "Contact with Me | Mezbah Uddin",
//     description: data?.web_info?.footer_description,
//     formatDetection: {
//       email: data?.web_info?.email,
//       address: data?.web_info?.location,
//       telephone: data?.web_info?.phone,
//     },
//   };
// }

const page = async () => {
  const [sectionDetails, web_info] = await Promise.all([
    sectionDetailsPromise,
    web_infoPromise,
  ]);
  return (
    <MasterLayout>
      <Contact sectionDetails={sectionDetails} contactData={web_info} />
    </MasterLayout>
  );
};

export default page;
