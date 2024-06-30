export const revalidate = 0;
import BlogCard from "@/components/Blogs/BlogCard";
import { TracingBeam } from "@/components/Others/TracingBeam";
import MasterLayout from "@/layout/MasterLayout";
// import { PrismaClient } from "@prisma/client";
import prisma from "@/utils/prisma";

async function getData() {
  // let prisma = new PrismaClient();
  const data = await prisma.blog.findMany({
    include: { profile: { select: { user_name: true, img: true } } },
  });
  const sectionDetails = await prisma.section_details.findFirst({});
  return { data, sectionDetails };
}

export async function generateMetadata(props) {
  const data = await getData();
  return {
    title: "Blogs | Mezbah Uddin",
    description: "This is Blog page. I am Mezbah Uddin, a dedicated and passionate full stack web developer with a keen eye for detail and a commitment to creating seamless, user-friendly web experiences. With expertise in both front-end and back-end technologies, I specialize in building robust, scalable, and dynamic web applications. My proficiency spans across HTML, CSS, JavaScript, and various back-end frameworks, enabling me to deliver comprehensive solutions tailored to meet diverse client needs. I thrive in collaborative environments, continuously seeking opportunities to innovate and enhance the digital landscape through cutting-edge web development practices.",
    openGraph: {
      title: data?.data[0]?.title,
      images: [data?.data[0]?.img,data?.data[1]?.img,data?.data[2]?.img,data?.data[3]?.img],
      description: data?.data[0]?.short_des,
    },
  };
}


const page = async () => {
  const data = await getData();
  return (
    <MasterLayout>
      <TracingBeam className="pl-6 md:pl-0">
        <div className="cus_container">
          <h2 className="section__title anime">
            {data?.sectionDetails?.blogs_title || "Blogs"}
          </h2>
          <span className="section__subtitle anime">
            {data?.sectionDetails?.blogs_subtitle || "Most recent Work"}
          </span>
          <div className="grid grid-cols-1 sm:gap-10 md:grid-cols-2">
            {data?.data?.map((blog, index) => (
              <div
                data-aos={index % 2 === 0 ? "fade-down" : "fade-up"}
                data-aos-easing="linear"
                data-aos-duration="300"
                key={blog.id}
              >
                <BlogCard
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
              </div>
            ))}
          </div>
        </div>
      </TracingBeam>
    </MasterLayout>
  );
};

export default page;
