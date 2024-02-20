import Projects from "@/components/Projects/Projects";
import MasterLayout from "@/layout/MasterLayout";
import { projectSlider } from "@/utils/fakeData";

const page = () => {
  return (
    <MasterLayout>
      <Projects data={projectSlider}/>
    </MasterLayout>
  );
};

export default page;
