export const revalidate = 0;
import AllImages from "@/DasComponent/Gallery/AllImages";
import PageTitle from "@/DasComponent/Others/PageTitle";
import prisma from "@/utils/prisma";

async function getData() {
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
