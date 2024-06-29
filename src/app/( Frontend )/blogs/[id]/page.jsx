export const revalidate = 0; 
import BlogDetails from "@/components/Blogs/BlogDetails";
import MasterLayout from "@/layout/MasterLayout";
import { PrismaClient } from "@prisma/client";

async function getData(id) {
  let prisma = new PrismaClient();
  let commentsData = await prisma.comment.findMany({
    where: { blogId: parseInt(id) },
  });
  let blog = await prisma.blog.findMany({
    where: { id: parseInt(id) },
    include: {
      profile: {
        select: {
          user_name: true,
          age: true,
          mobile: true,
          img: true,
          email: true,
        },
      },
    },
  });
  return { blog, commentsData };
}

const SingleBlog = async (props) => {
  let id = await props.searchParams["id"];
  const data = await getData(id);
  return (
    <MasterLayout>
      <BlogDetails
        comments={data?.commentsData}
        blogId={id}
        data={data?.blog[0]}
      />
    </MasterLayout>
  );
};

export default SingleBlog;
