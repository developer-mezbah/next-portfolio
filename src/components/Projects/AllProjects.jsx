import React from "react";
import ProjectCard from "./ProjectCard";

const AllProjects = ({ data }) => {
  return (
    <div className="cus_container relative py-10 overflow-hidden">
      <h2 className="section__title anime">All Projects</h2>
      <span className="section__subtitle anime">Most recent Work</span>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 place-items-center">
        {data?.map((project) => (
          <ProjectCard key={project.id} data={project} />
        ))}
      </div>
    </div>
  );
};

export default AllProjects;
