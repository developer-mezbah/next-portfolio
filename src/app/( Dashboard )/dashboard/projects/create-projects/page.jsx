export const revalidate = 0;
import ProjectsForm from '@/DasComponent/Forms/ProjectsForm'
import { PrismaClient } from '@prisma/client';

async function getData(){
  const prisma = new PrismaClient();
  const categories = await prisma.projects_category.findMany({})
  return {categories}
}

const page = async () => {
  const data = await getData();
  return (
    <div>
      <ProjectsForm categories={data?.categories}/>
    </div>
  )
}

export default page