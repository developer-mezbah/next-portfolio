export const revalidate = 0;
import AllImages from "@/DasComponent/Gallery/AllImages";
import PageTitle from "@/DasComponent/Others/PageTitle";
import { PrismaClient } from "@prisma/client";

async function getData() {
  const prisma = new PrismaClient();
  const categories = await prisma.gallery.findMany({});
  return { categories };
}

const page = async () => {
  const { categories } = await getData();
  return (
    <div>
      <PageTitle text={"All Images"} />
      <AllImages categories={categories} />
    </div>
  );
};

export default page;
