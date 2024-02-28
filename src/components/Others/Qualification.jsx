"use client";
import { useEffect } from "react";
import { FaGraduationCap } from "react-icons/fa6";
import { FaBriefcase } from "react-icons/fa";
import { FcCalendar } from "react-icons/fc";

const Qualification = () => {
  useEffect(() => {
    const tabs = document.querySelectorAll("[data-target]"),
      tabContents = document.querySelectorAll("[data-content]");

    tabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        const target = document.querySelector(tab.dataset.target);
        tabContents.forEach((tabContent) => {
          tabContent.classList.remove("qualification__active");
        });
        target.classList.add("qualification__active");
        tabs.forEach((tab) => {
          tab.classList.remove("qualification__active");
        });
        tab.classList.add("qualification__active");
      });
    });
  }, []);
  return (
    <section className="qualification section">
      <h2 className="section__title anime">Qualification</h2>
      <span className="section__subtitle anime">My personal journey</span>
      <div className="qualification__container cus_container">
        <div className="qualification__tabs">
          <div
            className="qualification__button button--flex qualification__active anime delay-1000"
            data-target="#education"
          >
            <FaGraduationCap className="qualification__icon" />
            Education
          </div>
          <div
            className="qualification__button button--flex anime"
            data-target="#work"
            target="fadeLeft"
          >
            <FaBriefcase className="qualification__icon"/>
            Work
          </div>
        </div>
        <div className="qualification__sections">
          {/*==================== Qualification Content 1 ====================*/}
          <div
            className="qualification__content qualification__active"
            data-content=""
            id="education"
          >
            {/*==================== Qualification 1 ====================*/}
            <div className="qualification__data anime">
              <div>
                <h3 className="qualification__title">Computer Enginner</h3>
                <span className="qualification__subtitle">
                  Bangladesh Polytechnic Institute
                </span>
                <div className="qualification__calender flex gap-2 justify-center">
                  <FcCalendar className="text-xl"/>
                  2019 - 2023
                </div>
              </div>
              <div>
                <span className="qualification__rounder" />
                <span className="qualification__line" />
              </div>
            </div>
            {/*==================== Qualification 2 ====================*/}
            <div className="qualification__data anime">
              <div />
              <div>
                <span className="qualification__rounder" />
                <span className="qualification__line" />
              </div>
              <div>
                <h3 className="qualification__title">Web Design</h3>
                <span className="qualification__subtitle">
                  E-shikhon - Institute
                </span>
                <div className="qualification__calender flex gap-2 justify-center">
                  <FcCalendar className="text-xl"/>
                  2019 - 2023
                </div>
              </div>
            </div>
            {/*==================== Qualification 3 ====================*/}
            <div className="qualification__data anime">
              <div>
                <h3 className="qualification__title">Web Development</h3>
                <span className="qualification__subtitle">
                  E-shikhon - Institute
                </span>
                <div className="qualification__calender flex gap-2 justify-center">
                  <FcCalendar className="text-xl"/>
                  2019 - 2023
                </div>
              </div>
              <div>
                <span className="qualification__rounder" />
                <span className="qualification__line" />
              </div>
            </div>
            {/*==================== Qualification 4 ====================*/}
            <div className="qualification__data anime">
              <div />
              <div>
                <span className="qualification__rounder" />
                {/* <span className="qualification__line"></span> */}
              </div>
              <div>
                <h3 className="qualification__title">
                  Master MERN AND NEXT.JS
                </h3>
                <span className="qualification__subtitle">
                  Peru - Institute
                </span>
                <div className="qualification__calender flex gap-2 justify-center">
                  <FcCalendar className="text-xl"/>
                  2019 - 2023
                </div>
              </div>
            </div>
          </div>
          {/*==================== Qualification Content 2 ====================*/}
          <div className="qualification__content" data-content="" id="work">
            {/*==================== Qualification 1 ====================*/}
            <div className="qualification__data fadeUp">
              <div>
                <h3 className="qualification__title">C#</h3>
                <span className="qualification__subtitle">
                  CCN Polytecnic Institute
                </span>
                <div className="qualification__calender flex gap-2 justify-center">
                  <FcCalendar className="text-xl"/>
                  2019 - 2023
                </div>
              </div>
              <div>
                <span className="qualification__rounder" />
                <span className="qualification__line" />
              </div>
            </div>
            {/*==================== Qualification 2 ====================*/}
            <div className="qualification__data fadeUp">
              <div />
              <div>
                <span className="qualification__rounder" />
                <span className="qualification__line" />
              </div>
              <div>
                <h3 className="qualification__title">
                  Database management system
                </h3>
                <span className="qualification__subtitle">
                  CCN Polytecnic Institute
                </span>
                <div className="qualification__calender flex gap-2 justify-center">
                  <FcCalendar className="text-xl"/>
                  2019 - 2023
                </div>
              </div>
            </div>
            {/*==================== Qualification 3 ====================*/}
            <div className="qualification__data fadeDown">
              <div>
                <h3 className="qualification__title">Web Development</h3>
                <span className="qualification__subtitle">
                  BlackeyBaby - Institute
                </span>
                <div className="qualification__calender flex gap-2 justify-center">
                  <FcCalendar className="text-xl"/>
                  2019 - 2023
                </div>
              </div>
              <div>
                <span className="qualification__rounder" />
                {/* <span className="qualification__line"></span> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
