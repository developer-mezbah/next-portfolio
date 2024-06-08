export const revalidate = 0;
import BlogDetails from "@/components/Blogs/BlogDetails";
import MasterLayout from "@/layout/MasterLayout";
import { PrismaClient } from "@prisma/client";


async function getData(id) {
  let prisma = new PrismaClient();
  let commentsData = await prisma.comment.findMany({
    where: { blogId: id },
  });
  let blog = await prisma.blog.findMany({
    where: { id },
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
  return { commentsData, blog };
}

const SingleBlog = async () => {
  // let id = await parseInt(props.searchParams["id"]);
  const data = await getData(1);
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
