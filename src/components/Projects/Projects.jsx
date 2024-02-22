import AllProjects from "./AllProjects";
import ProjectsSlider from "./ProjectsSlider";

const Projects = ({ sliderData, projects }) => {
  return (
    <div>
      <ProjectsSlider data={sliderData} />

        <AllProjects data={projects} />
    </div>
  );
};

export default Projects;
