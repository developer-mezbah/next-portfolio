export const revalidate = 0;
import ProjectsTable from "@/DasComponent/Tables/ProjectsTable";
// import { PrismaClient } from "@prisma/client";
import React from "react";
import prisma from "@/utils/prisma";

async function getData() {
  // const prisma = new PrismaClient();
  const data = await prisma.projects.findMany({
    orderBy: {id: 'desc'},
    include: {for_developer: true, key_feature: true,profile: {select: {user_name: true, img: true}}}
  });
  const categories = await prisma.projects_category.findMany({})
  return {data, categories};
}

const page = async () => {
  const data = await getData();
  return (
    <div>
      <ProjectsTable data={data?.data} categories={data?.categories}/>
    </div>
  );
};

export default page;
