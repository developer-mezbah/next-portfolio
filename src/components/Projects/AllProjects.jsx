import React from "react";
import ProjectCard from "./ProjectCard";

const AllProjects = ({ data, sectionDetails }) => {
  return (
    <div className="cus_container relative md:py-10 py-5 overflow-hidden">
      <h2 className="section__title anime">
        {sectionDetails?.all_projects_title || "All Projects"}
      </h2>
      <p className="text-center">
        {sectionDetails?.all_projects_subtitle ||
          "Those is my personal Projects."}
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 place-items-center sm:px-7">
        {data?.map((project, index) => (
          <div
            key={project.id}
            data-aos={index % 2 === 0 ? "fade-down" : "fade-up"}
            data-aos-easing="linear"
            data-aos-duration="300"
          >
            <ProjectCard data={project} index={index} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllProjects;
