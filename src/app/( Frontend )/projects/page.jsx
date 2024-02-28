import { TracingBeam } from "@/components/Others/TracingBeam";
import Projects from "@/components/Projects/Projects";
import MasterLayout from "@/layout/MasterLayout";
import { projectSlider, projects } from "@/utils/fakeData";

const page = () => {
  return (
    <MasterLayout>
      
    <TracingBeam className="pl-6 md:pl-0">
      <Projects sliderData={projectSlider} projects={projects}/>
      </TracingBeam>
    </MasterLayout>
  );
};

export default page;
