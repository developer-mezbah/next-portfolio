import Hero from "@/components/Home/Hero";
import Qualification from "@/components/Others/Qualification";
import Testimonial from "@/components/Others/Testimonial";
import ParallaxText from "@/components/SkillLibraries/SkillLibraries";
import Tabs from "@/components/Tabs/Tabs";
import MasterLayout from "@/layout/MasterLayout";
import { testimonialData } from "@/utils/fakeData";

export default function Home() {
  return (
    <MasterLayout>
      <Hero />
      <Tabs/>
      <div className="w-screen md:py-20 py-10 rotate-[3deg]">
        <ParallaxText baseVelocity={-5}>Next.js prisma mongodb mysql</ParallaxText>
        <ParallaxText baseVelocity={5}>Next.js prisma mongodb mysql</ParallaxText>
      </div>
      <Qualification />
      <Testimonial data={testimonialData} />
    </MasterLayout>
  );
}
