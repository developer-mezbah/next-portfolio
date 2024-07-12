import React from "react";
import Tabs from "./Tabs";
import prisma from "@/utils/prisma";

async function getData() {
  try {
    const tabs = await prisma.Projects_category.findMany({});
    return tabs;
  } catch (error) {
    console.log(error);
  }
}

const TabSections = async () => {
  const data = await getData();
  return <Tabs tabs={data} />;
};

export default TabSections;
