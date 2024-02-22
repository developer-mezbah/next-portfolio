import BlogCard from "@/components/Blogs/BlogCard";
import MasterLayout from "@/layout/MasterLayout";
import { BlogsData } from "@/utils/fakeData";
import React from "react";

const page = () => {
  return (
    <MasterLayout>
      <div className="cus_container">
        <h2 className="section__title anime">Blogs</h2>
        <span className="section__subtitle anime">Most recent Work</span>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          {BlogsData.map((blog, index) => (
            <BlogCard
              key={blog.id}
              index={index}
              image={blog.image}
              title={blog.title}
              author={blog.author}
              authorUrl={blog.authorUrl}
              publishedDate={blog.publishedDate}
              body={blog.body}
              blogUrl={blog.blogUrl}
            />
          ))}
        </div>
      </div>
    </MasterLayout>
  );
};

export default page;
