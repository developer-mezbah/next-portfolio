import Hero from "@/components/Home/Hero";
import Qualification from "@/components/Others/Qualification";
import Testimonial from "@/components/Others/Testimonial";
import MasterLayout from "@/layout/MasterLayout";
import { testimonialData } from "@/utils/fakeData";


export default function Home() {
  return (
    <MasterLayout>
      <Hero/>
      <Qualification/>
      <Testimonial data={testimonialData}/>
    </MasterLayout>
  );
}
