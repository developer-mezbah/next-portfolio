import AllProjects from "./AllProjects";
import ProjectsSlider from "./ProjectsSlider";

const Projects = ({ sliderData, projects,sectionDetails }) => {
  return (
    <div>
      <div className="cus_container relative py-10 overflow-hidden">
        <h2 className="section__title anime">{ sectionDetails?.popular_projects_title || "Popular Projects"}</h2>
        <span className="section__subtitle anime">{ sectionDetails?.popular_projects_subtitle || "Most recent Work"}</span>
        <ProjectsSlider data={sliderData} />
      </div>

      <AllProjects data={projects} sectionDetails={sectionDetails}/>
    </div>
  );
};

export default Projects;
