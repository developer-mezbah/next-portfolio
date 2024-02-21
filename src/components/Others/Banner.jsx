import Image from "next/image";
import Link from "next/link";
import React from "react";
import { VscSend } from "react-icons/vsc";

const Banner = () => {
  return (
    <section className="project section">
      <div className="project__bg">
        <div className="project__container cus_container cus_grid">
          <div className="project__data">
            <h2 className="project__title anime">You have a new project</h2>
            <p className="project__description anime">
              Contact me now and get a 30% discount on your new project.
            </p>
            <Link
              href="/contact"
              className="button button--flex button--white anime"
            >
              Contact Me
              <VscSend className="button__icon project__icon" />
            </Link>
          </div>
          <Image
            width={400}
            height={400}
            src="/images/project.png"
            alt=""
            className="project__img anime"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
