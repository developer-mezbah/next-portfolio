export const revalidate = 0;
import BlogCard from "@/components/Blogs/BlogCard";
import { TracingBeam } from "@/components/Others/TracingBeam";
import MasterLayout from "@/layout/MasterLayout";
import { allBlogPromise, sectionDetailsPromise } from "@/utils/fetchData";

export async function generateMetadata() {
  const [data] = await Promise.all([allBlogPromise]);
  return {
    title: "Blogs | Mezbah Uddin",
    description:
      "This is Blog page. Stay updated with the latest insights and trends in web development on Mezbah Uddin's blog. Explore articles on full stack development, React, Next.js, Node.js, Express, MongoDB, Firebase, and more. Gain valuable tips, tutorials, and industry news from a professional developer.",
    openGraph: {
      images: [
        data[0]?.img,
        data[1]?.img,
        data[2]?.img,
        data[3]?.img,
      ],
    },
  };
}

const page = async () => {
  const [sectionDetails, data] = await Promise.all([
    sectionDetailsPromise,
    allBlogPromise,
  ]);
  return (
    <MasterLayout>
      <TracingBeam className="pl-6 md:pl-0">
        <div className="cus_container">
          <h2 className="section__title anime">
            {sectionDetails?.blogs_title || "Blogs"}
          </h2>
          <span className="section__subtitle anime">
            {sectionDetails?.blogs_subtitle || "Most recent Work"}
          </span>
          <div className="grid grid-cols-1 sm:gap-10 md:grid-cols-2">
            {data?.map((blog, index) => (
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
                  blogUrl={`/blog-details/${blog?.title
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
