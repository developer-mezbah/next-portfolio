import Link from "next/link";
import { FiFacebook, FiGithub, FiLinkedin } from "react-icons/fi";
import { VscSend } from "react-icons/vsc";

const Hero = () => {
  return (
    <section className="home section" id="home">
      <div className="home_container cus_container cus_grid">
        <div className="home__content cus_grid">
          <div className="home__social pl-2">
            <Link href="#" className="home__social-icon">
              <FiGithub className="text-3xl" />
            </Link>
            <Link href="#" className="home__social-icon">
              <FiLinkedin className="text-3xl" />
            </Link>
            <Link href="#" className="home__social-icon">
              <FiFacebook className="text-3xl" />
            </Link>
          </div>
          <div className="home__img">
            <svg
              viewBox="0 0 500 500"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              width="100%"
              id="blobSvg"
              className="home__blob"
            >
              <mask id="mask0" mask-type="alpha">
                <path>
                  <animate
                    attributeName="d"
                    dur="10000ms"
                    repeatCount="indefinite"
                    values="M442,290.5Q419,331,411,386.5Q403,442,353.5,464Q304,486,254.5,466Q205,446,154.5,440Q104,434,81,388.5Q58,343,59.5,296.5Q61,250,76,211.5Q91,173,98.5,121.5Q106,70,154,54Q202,38,254,22.5Q306,7,343.5,46.5Q381,86,414.5,120.5Q448,155,456.5,202.5Q465,250,442,290.5Z;

                    M447,301.5Q465,353,426,387.5Q387,422,345,451Q303,480,252,473Q201,466,150.5,452.5Q100,439,87.5,386.5Q75,334,66,292Q57,250,42.5,196.5Q28,143,80.5,123.5Q133,104,170.5,85Q208,66,255.5,42.5Q303,19,338.5,57Q374,95,401,129.5Q428,164,428.5,207Q429,250,447,301.5Z;

                    M455,295Q436,340,416,386.5Q396,433,350,459Q304,485,255.5,462Q207,439,151,441.5Q95,444,82,390.5Q69,337,68,293.5Q67,250,53.5,199.5Q40,149,76.5,113.5Q113,78,154,42.5Q195,7,243.5,37.5Q292,68,348.5,61.5Q405,55,439,99Q473,143,473.5,196.5Q474,250,455,295Z;
                    
                    
                    M425,292Q424,334,394,363.5Q364,393,333,436Q302,479,251,474.5Q200,470,163.5,437.5Q127,405,96,372Q65,339,36,294.5Q7,250,26.5,201Q46,152,89.5,128Q133,104,164,57Q195,10,248,18Q301,26,351.5,42.5Q402,59,433.5,102.5Q465,146,445.5,198Q426,250,425,292Z;

    

                    M442,290.5Q419,331,411,386.5Q403,442,353.5,464Q304,486,254.5,466Q205,446,154.5,440Q104,434,81,388.5Q58,343,59.5,296.5Q61,250,76,211.5Q91,173,98.5,121.5Q106,70,154,54Q202,38,254,22.5Q306,7,343.5,46.5Q381,86,414.5,120.5Q448,155,456.5,202.5Q465,250,442,290.5Z;"
                  ></animate>
                </path>
              </mask>
              <g mask="url(#mask0)">
                <path>
                  <animate
                    attributeName="d"
                    dur="10000ms"
                    repeatCount="indefinite"
                    values="M442,290.5Q419,331,411,386.5Q403,442,353.5,464Q304,486,254.5,466Q205,446,154.5,440Q104,434,81,388.5Q58,343,59.5,296.5Q61,250,76,211.5Q91,173,98.5,121.5Q106,70,154,54Q202,38,254,22.5Q306,7,343.5,46.5Q381,86,414.5,120.5Q448,155,456.5,202.5Q465,250,442,290.5Z;
  
                M447,301.5Q465,353,426,387.5Q387,422,345,451Q303,480,252,473Q201,466,150.5,452.5Q100,439,87.5,386.5Q75,334,66,292Q57,250,42.5,196.5Q28,143,80.5,123.5Q133,104,170.5,85Q208,66,255.5,42.5Q303,19,338.5,57Q374,95,401,129.5Q428,164,428.5,207Q429,250,447,301.5Z;
  
                M455,295Q436,340,416,386.5Q396,433,350,459Q304,485,255.5,462Q207,439,151,441.5Q95,444,82,390.5Q69,337,68,293.5Q67,250,53.5,199.5Q40,149,76.5,113.5Q113,78,154,42.5Q195,7,243.5,37.5Q292,68,348.5,61.5Q405,55,439,99Q473,143,473.5,196.5Q474,250,455,295Z;
                
                
                M425,292Q424,334,394,363.5Q364,393,333,436Q302,479,251,474.5Q200,470,163.5,437.5Q127,405,96,372Q65,339,36,294.5Q7,250,26.5,201Q46,152,89.5,128Q133,104,164,57Q195,10,248,18Q301,26,351.5,42.5Q402,59,433.5,102.5Q465,146,445.5,198Q426,250,425,292Z;
  

  
                M442,290.5Q419,331,411,386.5Q403,442,353.5,464Q304,486,254.5,466Q205,446,154.5,440Q104,434,81,388.5Q58,343,59.5,296.5Q61,250,76,211.5Q91,173,98.5,121.5Q106,70,154,54Q202,38,254,22.5Q306,7,343.5,46.5Q381,86,414.5,120.5Q448,155,456.5,202.5Q465,250,442,290.5Z;"
                  >
                    {/* Add 1st and last value same for loop animation*/}
                  </animate>
                </path>
                <image
                  className="home__blob-img"
                  x={12}
                  y={30}
                  href="/images/perfil.png"
                />
              </g>
            </svg>
          </div>
          <div className="home__data fadeLeft">
            {/* <h1 className="home__title">Hi, I'am Mezbah</h1> */}
            <h1 className="text-3xl py-3">My name is Mezbah uddin</h1>
            <h3 className="home__subtitle">Full Stack web Developer</h3>
            <p className="home__description">
              High level experience in web design, development and knowledge,
              producing quality work.
            </p>
            <Link href="/contact" className="button button--flex">
              Contact Me
              <VscSend className="button__icon" />
            </Link>
          </div>
        </div>
        <div className="home__scroll">
          <a href="#about" className="home__scroll-button button--flex">
            <i className="uil uil-mouse-alt home__scroll-mouse" />
            <span className="home__scroll-name">Scroll Down</span>
            <i className="uil uil-arrow-down home__scroll-arrow" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
