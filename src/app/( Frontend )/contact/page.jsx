export const revalidate = 0;
import Contact from "@/components/Contact/Contact";
import MasterLayout from "@/layout/MasterLayout";
import { PrismaClient } from "@prisma/client";
import React from "react";

async function getData() {
  try {
    const prisma = new PrismaClient();
    const sectionDetails = await prisma.section_details.findFirst({});
    return sectionDetails;
  } catch (error) {
    console.log(error);
  }
}
const page = async () => {
  const data = await getData();
  return (
    <MasterLayout>
      <Contact sectionDetails={data} />
    </MasterLayout>
  );
};

export default page;
