export const revalidate = 0;
import Hero from "@/components/Home/Hero";
import Qualification from "@/components/Others/Qualification";
import Testimonial from "@/components/Others/Testimonial";
import ParallaxText from "@/components/SkillLibraries/SkillLibraries";
import Tabs from "@/components/Tabs/Tabs";
import MasterLayout from "@/layout/MasterLayout";
import { PrismaClient } from "@prisma/client";

async function getData() {
  try {
    const prisma = new PrismaClient();
    // let hero_data = await prisma.hero.findFirst({});
    // let educationQualify = await prisma.qualification.findMany({
    //   where: { role: "Education" },
    // });
    // let workQualify = await prisma.qualification.findMany({
    //   where: { role: "Work" },
    //   orderBy: {id: "desc"}
    // });
    // const marque = await prisma.marquee.findFirst({});
    // const testimonial = await prisma.Testimonial.findMany({
    //   orderBy: { id: "desc" },
    // });
    
    // const social = await prisma.Social_media.findFirst({});
    // const allProjects = await prisma.projects.findMany({
    //   take: 4,
    //   orderBy: {id: 'desc'},
    // });
    
    // const sectionDetails = await prisma.section_details.findFirst({});

    return { educationQualify,workQualify,marque,testimonial,social,allProjects,sectionDetails };
  } catch (error) {
    console.log(error);
  }
}

export default async function Home() {
  const data = await getData();
  return (
    <MasterLayout>
      <Hero social={data?.social}/>
      <Tabs data={data?.allProjects}/>
      <div className="w-screen md:py-20 py-10 rotate-[3deg]">
        <ParallaxText baseVelocity={-5}>
        {data?.marque?.reverse_title}
        </ParallaxText>
        <ParallaxText baseVelocity={5}>
        {data?.marque?.title}
        </ParallaxText>
      </div>
      <Qualification sectionDetails={data?.sectionDetails} educationQualify={data?.educationQualify} workQualify={data?.workQualify}/>
      <Testimonial sectionDetails={data?.sectionDetails} data={data?.testimonial} />
    </MasterLayout>
  );
}
