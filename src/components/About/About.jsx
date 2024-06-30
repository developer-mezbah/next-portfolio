import CountUpOnScroll from "@/utils/CountUpOnScroll";
import Image from "next/image";
import Link from "next/link";
import { FiDownload } from "react-icons/fi";
const About = ({data,sectionDetails}) => {
  return (
    <>
      {/*==================== ABOUT ====================*/}
      <section className="about section anime" id="about">
        <h2 className="section__title">{sectionDetails?.about_me_title || "About Me"}</h2>
        <span className="section__subtitle">{sectionDetails?.about_me_subtitle || "My introduction"}</span>
        <div className="about__container cus_container cus_grid">
          <Image data-aos="fade-right" width={500} height={500} src={data?.img || "/images/about.jpg"} alt={data?.content} className="about__img h-[300px] object-cover h-full" />
          <div data-aos="fade-left" className="about__data flex flex-col justify-center">
            <p className="about__description">
              {data?.content}
            </p>
            <div className="about__info">
              <div>
                <span className="about__info-title">
                  <CountUpOnScroll number={data?.expericed}/>
                </span>
                <span className="about__info-name">
                  Years <br />
                  experience
                </span>
              </div>
              <div>
                <span className="about__info-title">
                <CountUpOnScroll number={data?.projects}/>
                </span>
                <span className="about__info-name">
                  Completed <br />
                  project
                </span>
              </div>
              <div>
                <span className="about__info-title">
                <CountUpOnScroll number={data?.works}/>
                </span>
                <span className="about__info-name">
                  Companies <br />
                  worked
                </span>
              </div>
            </div>
          </div>
          <div className="about__buttons"  data-aos="fade-right">
            <Link
              download=""
              href={ data?.cv || "assets/pdf/Alexa-Cv.pdf"}
              className="button button--flex"
            >
              Download CV
              <FiDownload className="button__icon"/>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
