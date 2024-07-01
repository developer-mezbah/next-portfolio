export const revalidate = 0;
import Contact from "@/components/Contact/Contact";
import MasterLayout from "@/layout/MasterLayout";
import React from "react";
import prisma from "@/utils/prisma";

async function getData() {
  try {
    const sectionDetails = await prisma.section_details.findFirst({});
    const web_info = await prisma.Web_information.findFirst({});
    return { sectionDetails, web_info };
  } catch (error) {
    console.log(error);
  }
}

export async function generateMetadata() {
  const data = await getData();
  return {
    title: "Contact with Me | Mezbah Uddin",
    description: data?.web_info?.footer_description,
    formatDetection: {
      email: data?.web_info?.email,
      address: data?.web_info?.location,
      telephone: data?.web_info?.phone,
    },
  };
}

const page = async () => {
  const data = await getData();
  return (
    <MasterLayout>
      <Contact
        sectionDetails={data?.sectionDetails}
        contactData={data?.web_info}
      />
    </MasterLayout>
  );
};

export default page;
