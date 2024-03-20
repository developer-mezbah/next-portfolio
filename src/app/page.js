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
  try {
    const prisma = new PrismaClient();
    let hero_data = await prisma.hero.findFirst({});
    let educationQualify = await prisma.qualification.findMany({
      where: { role: "Education" },
    });
    let workQualify = await prisma.qualification.findMany({
      where: { role: "Work" },
      orderBy: {id: "desc"}
    });
    const marque = await prisma.marquee.findFirst({});
    return { hero_data, educationQualify,workQualify,marque };
  } catch (error) {
    console.log(error);
  }
}

export default async function Home() {
  const data = await getData();
  return (
    <MasterLayout>
      <Hero data={data?.hero_data} />
      <Tabs />
      <div className="w-screen md:py-20 py-10 rotate-[3deg]">
        <ParallaxText baseVelocity={-5}>
        {data.marque?.reverse_title}
        </ParallaxText>
        <ParallaxText baseVelocity={5}>
        {data.marque?.title}
        </ParallaxText>
      </div>
      <Qualification educationQualify={data?.educationQualify} workQualify={data?.workQualify}/>
      <Testimonial data={testimonialData} />
    </MasterLayout>
  );
}
