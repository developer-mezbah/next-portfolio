export const revalidate = 0;
import QualificationTable from "@/DasComponent/Tables/QualificationTable";
import prisma from "@/utils/prisma";

async function getData() {
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
