import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import Banner from "@/components/Others/Banner";
import { PiMediumLogoFill } from "react-icons/pi";

const Footer = ({social}) => {
  return (
    <>
      <footer className="footer">
        <div className="footer__bg">
        <Banner/>
          <div className="footer__container cus_grid">
            <div>
              <h1 className="footer__title">Mezbah</h1>
              <span className="footer__subtitle">
                Next.js and MERN Full stack Developer
              </span>
            </div>
            <ul className="footer__links" style={{flexWrap: 'wrap'}}>
              <li>
                <Link href="/services" className="footer__link">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/projects" className="footer__link">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/contact" className="footer__link">
                  ContactMe
                </Link>
              </li>
            </ul>
            <div className="footer__socials">
              <Link href={social?.github} className="footer__social">
                <FaGithub/>
              </Link>
              <Link href={social?.linkedin} className="footer__social">
                <FaLinkedin/>
              </Link>
              <Link href={social?.facebook} className="footer__social">
                <FaFacebookSquare/>
              </Link>
              <Link href={social?.medium} className="footer__social">
              <PiMediumLogoFill />
              </Link>
            </div>
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
