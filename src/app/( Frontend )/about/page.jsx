export const revalidate = 0;
import About from "@/components/About/About";
import MasterLayout from "@/layout/MasterLayout";
import { PrismaClient } from "@prisma/client";
import React from "react";

async function getData() {
  const prisma = new PrismaClient();
  const data = await prisma.About_me.findFirst({});
  return data
}

const page = async () => {
  const data = await getData();
  return (
    <MasterLayout>
      <About data={data}/>
    </MasterLayout>
  );
};

export default page;
