export const revalidate = 0;
import ProjectCategoryForm from "@/DasComponent/Forms/ProjectCategoryForm";
import prisma from "@/utils/prisma";

async function getData() {
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
