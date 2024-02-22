import { LiaPhoneVolumeSolid } from "react-icons/lia";
import { CiLocationOn } from "react-icons/ci";
import { SiAmazonsimpleemailservice } from "react-icons/si";
import Link from "next/link";
const Contact = () => {
  return (
    <section className="contact section anime" id="contact">
      <h2 className="section__title">Contact Me</h2>
      <span className="section__subtitle">Get in Touch</span>
      <div className="contact__container cus_container cus_grid">
        <div className="anime">
          <Link href={"tel:+880 1707954201"}>
            <div className="contact__information">
              <LiaPhoneVolumeSolid className="contact__icon" />
              <div>
                <h3 className="contact__title">Call Me</h3>
                <span className="contact__subtitle">+880 1707954201</span>
              </div>
            </div>
          </Link>
          <Link href={"mailto:developer.mezbah@gmail.com"}>
            <div className="contact__information cursor-pointer">
              <SiAmazonsimpleemailservice className="contact__icon" />
              <div>
                <h3 className="contact__title">Email</h3>
                <span className="contact__subtitle">
                  developer.mezbah@gmail.com
                </span>
              </div>
            </div>
          </Link>
          <div className="contact__information">
            <CiLocationOn className="contact__icon" />
            <div>
              <h3 className="contact__title">Location</h3>
              <span className="contact__subtitle">BD - Dhaka, Comilla</span>
            </div>
          </div>
        </div>
        <form action="" className="contact__form cus_grid">
          <div className="contact__inputs cus_grid">
            <div className="contact__content anime" target="fadeRight">
              <label htmlFor="" className="contact__label">
                Name
              </label>
              <input type="text" className="contact__input" />
            </div>
            <div className="contact__content anime" target="fadeLeft">
              <label htmlFor="" className="contact__label">
                Email
              </label>
              <input type="email" className="contact__input" />
            </div>
          </div>
          <div className="contact__content anime" target="zoomIn">
            <label htmlFor="" className="contact__label">
              Project
            </label>
            <input type="text" className="contact__input" />
          </div>
          <div className="contact__content anime" target="zoomInUp">
            <label htmlFor="" className="contact__label">
              Project
            </label>
            <textarea
              name=""
              id=""
              cols={30}
              rows={7}
              className="contact__input"
              defaultValue={""}
            />
          </div>
          <div>
            <a href="#" className="button button--flex">
              Send Message
              <i className="uil uil-message button__icon rightArrow" />
            </a>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
