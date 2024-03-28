export const revalidate = 0;
import ProjectCategoryForm from "@/DasComponent/Forms/ProjectCategoryForm";
import { PrismaClient } from "@prisma/client";

async function getData() {
  const prisma = new PrismaClient();
  const categories = await prisma.projects_category.findMany({});
  return { categories };
}
const page = async () => {
  const { categories } = await getData();
  return (
    <div>
      <ProjectCategoryForm data={categories} />
    </div>
  );
};

export default page;
