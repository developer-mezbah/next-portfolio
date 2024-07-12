export const revalidate = 0;
import Hero from "@/components/Home/Hero";
import Qualification from "@/components/Others/Qualification";
import Testimonial from "@/components/Others/Testimonial";
import ParallaxText from "@/components/SkillLibraries/SkillLibraries";
import TabSections from "@/components/Tabs/TabSections";
import MasterLayout from "@/layout/MasterLayout";
import Visitor from "@/utils/visitor";



export default function Home() {
  return (
    <MasterLayout>
      <Hero />
      <TabSections/>
      <div className="w-screen md:py-20 py-10 rotate-[3deg]">
        <ParallaxText baseVelocity={-5} reverse={false} />
        <ParallaxText baseVelocity={5} reverse={true} />
      </div>
      <Qualification/>
      <Testimonial/>
      <Visitor/>
    </MasterLayout>
  );
}
