import Projects from "@/components/Projects/Projects";
import MasterLayout from "@/layout/MasterLayout";
import { projectSlider, projects } from "@/utils/fakeData";

const page = () => {
  return (
    <MasterLayout>
      <Projects sliderData={projectSlider} projects={projects}/>
    </MasterLayout>
  );
};

export default page;
