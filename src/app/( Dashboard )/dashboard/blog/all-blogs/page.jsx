export const revalidate = 0;
import BlogsTable from '@/DasComponent/Tables/BlogsTable'
import prisma from '@/utils/prisma';

async function getData(){
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