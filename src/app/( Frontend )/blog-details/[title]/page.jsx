export const revalidate = 0;
import BlogDetails from "@/components/Blogs/BlogDetails";
import MasterLayout from "@/layout/MasterLayout";
import prisma from "@/utils/prisma";
import { cache } from "react";


const getData = cache(async (id) => {
  let commentsData = await prisma.comment.findMany({
    where: { blogId: parseInt(id) },
  });
  let blog = await prisma.blog.findUnique({
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
});

export async function generateMetadata(props) {
  let id = await props.searchParams["id"];
  const data = await getData(id);
  return {
    title: data?.blog?.title,
    description: data?.blog?.short_des,
    keywords: [data?.blog?.keywords],
    openGraph: {
      images: [data?.blog?.img],
    },
  };
}

export default async function page(props) {
  let id = await props.searchParams["id"];
  const data = await getData(id);
  return (
    <MasterLayout>
      <BlogDetails
        comments={data?.commentsData}
        blogId={id}
        data={data?.blog}
      />
    </MasterLayout>
  );
}
