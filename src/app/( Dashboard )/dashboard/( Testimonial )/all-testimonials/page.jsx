export const revalidate = 0;
import TestimonialsTable from "@/DasComponent/Tables/TestimonialsTable";
import { PrismaClient } from "@prisma/client";

async function getData() {
  const prisma = new PrismaClient();
  const data = await prisma.testimonial.findMany({
    orderBy: { id: "desc" },
  });
  return data;
}
const page = async () => {
  const data = await getData();
  return (
    <div>
      <TestimonialsTable data={data} />
    </div>
  );
};

export default page;
