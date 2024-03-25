export const revalidate = 0;
import BlogCard from "@/components/Blogs/BlogCard";
import { TracingBeam } from "@/components/Others/TracingBeam";
import MasterLayout from "@/layout/MasterLayout";
import { PrismaClient } from "@prisma/client";

async function getData() {
  let prisma = new PrismaClient();
  const data = await prisma.blog.findMany({
    include: { profile: { select: { user_name: true, img: true } } },
  });
  return data;
}
const page = async () => {
  const data = await getData();
  return (
    <MasterLayout>
      <TracingBeam className="pl-6 md:pl-0">
        <div className="cus_container">
          <h2 className="section__title anime">Blogs</h2>
          <span className="section__subtitle anime">Most recent Work</span>
          <div className="grid grid-cols-1 sm:gap-10 md:grid-cols-2">
            {data?.map((blog, index) => (
              <BlogCard
                key={blog.id}
                index={index}
                image={blog.img}
                title={blog.title}
                author={blog?.profile.user_name}
                authorUrl={blog?.profile.img}
                publishedDate={blog.createAt}
                body={blog.short_des}
                blogUrl={`/blogs/${blog?.title
                  .replace(/[^a-zA-Z0-9-.\s]/g, "")
                  .replace(/ /g, "-")}?id=${blog?.id}`}
              />
            ))}
          </div>
        </div>
      </TracingBeam>
    </MasterLayout>
  );
};

export default page;
