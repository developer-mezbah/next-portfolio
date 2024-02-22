import AllProjects from "./AllProjects";
import ProjectsSlider from "./ProjectsSlider";

const Projects = ({ sliderData, projects }) => {
  return (
    <div>
      <div className="cus_container relative py-10 overflow-hidden">
        <h2 className="section__title anime">Popular Projects</h2>
        <span className="section__subtitle anime">Most recent Work</span>
        <ProjectsSlider data={sliderData} />
      </div>

      <AllProjects data={projects} />
    </div>
  );
};

export default Projects;
