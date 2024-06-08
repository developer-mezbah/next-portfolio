export const revalidate = 0;
import Hero from "@/components/Home/Hero";
import Qualification from "@/components/Others/Qualification";
import Testimonial from "@/components/Others/Testimonial";
import ParallaxText from "@/components/SkillLibraries/SkillLibraries";
import Tabs from "@/components/Tabs/Tabs";
import MasterLayout from "@/layout/MasterLayout";
import { PrismaClient } from "@prisma/client";



export default function Home() {
  return (
    <MasterLayout>
      <Hero />
      <Tabs />
      <div className="w-screen md:py-20 py-10 rotate-[4deg]">
        <ParallaxText baseVelocity={-5} reverse={false} />
        <ParallaxText baseVelocity={5} reverse={true} />
      </div>
      <Qualification/>
      <Testimonial/>
    </MasterLayout>
  );
}
