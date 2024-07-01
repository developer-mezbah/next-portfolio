export const revalidate = 0;
import BlogsTable from '@/DasComponent/Tables/BlogsTable'
import prisma from '@/utils/prisma';
// import { PrismaClient } from '@prisma/client';

async function getData(){
  // const prisma = new PrismaClient();
  const data = await prisma.blog.findMany({
    include: { profile: { select: { user_name: true } } },
  });
  return data
}

const page = async () => {
  const data = await getData()
  return (
    <div>
        <BlogsTable data={data}/>
    </div>
  )
}

export default page