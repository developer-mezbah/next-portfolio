export const revalidate = 0;
import Hero from "@/components/Home/Hero";
import Qualification from "@/components/Others/Qualification";
import Testimonial from "@/components/Others/Testimonial";
import ParallaxText from "@/components/SkillLibraries/SkillLibraries";
import Tabs from "@/components/Tabs/Tabs";
import MasterLayout from "@/layout/MasterLayout";
import { testimonialData } from "@/utils/fakeData";
import { PrismaClient } from "@prisma/client";

async function getData() {
  const prisma = new PrismaClient();
  let hero_data = await prisma.hero.findFirst({});

  return { hero_data };
}

export default async function Home() {
  const data = await getData();
  return (
    <MasterLayout>
      <Hero data={data.hero_data} />
      <Tabs />
      <div className="w-screen md:py-20 py-10 rotate-[3deg]">
        <ParallaxText baseVelocity={-5}>
          Next.js prisma mongodb mysql
        </ParallaxText>
        <ParallaxText baseVelocity={5}>
          Next.js prisma mongodb mysql
        </ParallaxText>
      </div>
      <Qualification />
      <Testimonial data={testimonialData} />
    </MasterLayout>
  );
}
