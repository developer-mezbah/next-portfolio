import HeroForm from "@/DasComponent/Forms/HeroForm";
import ParallaxEffect from "@/DasComponent/Forms/ParallaxEffect";
import Qulification from "@/DasComponent/Forms/Qulification";
import SocialLinks from "@/DasComponent/Forms/SocialLinks";
import FormTitle from "@/DasComponent/Others/FormTitle";
import PageTitle from "@/DasComponent/Others/PageTitle";
import SubmitButton from "@/DasComponent/Others/SubmitButton";

const page = () => {
  return (
    <div className="p-5 relative">
      <PageTitle text={"Home Page content Edit Section"} />
      <div className="space-y-5">
        <HeroForm/>
      </div>
    </div>
  );
};

export default page;
