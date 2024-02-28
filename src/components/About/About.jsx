import Image from "next/image";
import Link from "next/link";
import { FiDownload } from "react-icons/fi";
const About = () => {
  return (
    <>
      {/*==================== ABOUT ====================*/}
      <section className="about section anime" id="about">
        <h2 className="section__title">About Me</h2>
        <span className="section__subtitle">My introduction</span>
        <div className="about__container cus_container cus_grid">
          <Image width={500} height={500} src="/images/about.jpg" alt="" className="about__img" />
          <div className="about__data flex flex-col justify-center">
            <p className="about__description">
              I am a CSE student at CCN Polytechnic Institute in Bangladesh.I
              learned web development along with my studies. Web developer, with
              extensive knowledge and years of experience, working in web
              technologies with next.js and MERN, delivering quality work.
            </p>
            <div className="about__info">
              <div>
                <span className="about__info-title">
                  03+
                </span>
                <span className="about__info-name">
                  Years <br />
                  experience
                </span>
              </div>
              <div>
                <span className="about__info-title">
                  20+
                </span>
                <span className="about__info-name">
                  Completed <br />
                  project
                </span>
              </div>
              <div>
                <span className="about__info-title">
                  10+
                </span>
                <span className="about__info-name">
                  Companies <br />
                  worked
                </span>
              </div>
            </div>
          </div>
          <div className="about__buttons">
            <Link
              download=""
              href="assets/pdf/Alexa-Cv.pdf"
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
