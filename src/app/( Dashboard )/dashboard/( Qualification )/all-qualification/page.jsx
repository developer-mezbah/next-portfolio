export const revalidate = 0;
import QualificationTable from "@/DasComponent/Tables/QualificationTable";
// import { PrismaClient } from "@prisma/client";
import prisma from "@/utils/prisma";

async function getData() {
  // const prisma = new PrismaClient();
  const data = await prisma.Qualification.findMany({});
  return data;
}

const page = async () => {
  const data = await getData();
  return (
    <div>
      <QualificationTable data={data} />
    </div>
  );
};

export default page;
