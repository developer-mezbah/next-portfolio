import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import Banner from "@/components/Others/Banner";
import { PiMediumLogoFill } from "react-icons/pi";
import Image from "next/image";

const Footer = ({ social, data }) => {
  return (
    <>
      <footer className="footer">
        <div className="footer__bg">
          <Banner />
          <div className="footer__container cus_grid">
            <div>
              {/* <h1 className="footer__title">
              </h1> */}

              <Image
                width={500}
                height={500}
                alt={data?.footer_description}
                src={data?.footer_logo}
                className="w-[250px] mx-auto md:mx-1"
              />
            </div>
            <ul className="footer__links" style={{ flexWrap: "wrap" }}>
              <li>
                <Link href="/services" className="footer__link">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/projects" className="footer__link">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/blogs" className="footer__link">
                  Blogs
                </Link>
              </li>
              <li>
                <Link href="/contact" className="footer__link">
                  ContactMe
                </Link>
              </li>
              <li>
                <Link href="/dashboard" className="footer__link">
                  Go-Dashboard
                </Link>
              </li>
            </ul>
            <div className="footer__socials">
              <Link href={social?.github || "#"} className="footer__social">
                <FaGithub />
              </Link>
              <Link href={social?.linkedin || "#"} className="footer__social">
                <FaLinkedin />
              </Link>
              <Link href={social?.facebook || "#"} className="footer__social">
                <FaFacebookSquare />
              </Link>
              <Link href={social?.medium || "#"} className="footer__social">
                <PiMediumLogoFill />
              </Link>
            </div>
          </div>

          <div className="footer__container">
            <span className="mt-3 block">
            {data?.footer_description}
            </span>
          </div>
          <p className="footer__copy">
            © developer.mezbah. All right reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
