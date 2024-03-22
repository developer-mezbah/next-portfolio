"use client";
import { useEffect } from "react";
import { FaGraduationCap } from "react-icons/fa6";
import { FaBriefcase } from "react-icons/fa";
import { FcCalendar } from "react-icons/fc";
import { motion } from "framer-motion";

const Qualification = ({ workQualify, educationQualify }) => {
  const workLastIndex = workQualify.slice(-1)[0]?.id;
  const educationLastIndex = educationQualify.slice(-1)[0]?.id;
  
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
            className="qualification__button button--flex qualification__active anime"
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
            <FaBriefcase className="qualification__icon" />
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
            {educationQualify?.map((education, index) => {
              const initNumber = index + 1;
              return (
                <div key={education.id} className="qualification__data">
                  {initNumber % 2 !== 0 && (
                    <>
                      <div>
                        <h3 className="qualification__title">
                          
                        {education.title}
                        </h3>
                        <span className="qualification__subtitle">
                          
                        {education.institute_name}
                        </span>

                        <div className="qualification__calender flex gap-2 justify-center">
                          <FcCalendar className="text-xl" />
                          {education.session}
                        </div>
                      </div>
                      <div>
                        <span className="qualification__rounder" />
                        {education.id !== educationLastIndex && (
                          <span className="qualification__line" />
                        )}
                      </div>
                    </>
                  )}
                  {initNumber % 2 == 0 && (
                    <>
                      <div />
                      <div>
                        <span className="qualification__rounder" />
                        {education.id !== educationLastIndex && (
                          <span className="qualification__line" />
                        )}
                      </div>
                      <div>
                        <h3 className="qualification__title">
                          {education.title}</h3>
                        <span className="qualification__subtitle">{education.institute_name}
                        </span>
                        <div className="qualification__calender flex gap-2 justify-center">
                          <FcCalendar className="text-xl" />
                          {education.session}
                        </div>
                      </div>
                    </>
                  )}
                </div>
              );
            })}
          </div>
          {/*==================== Qualification Content 2 ====================*/}
          <div className="qualification__content" data-content="" id="work">
            {workQualify?.map((work, index) => {
              const initNumber = index + 1;
              return (
                <div key={work.id} className="qualification__data">
                  {initNumber % 2 !== 0 && (
                    <>
                      <div>
                        <h3 className="qualification__title">
                          {work.title}
                        </h3>
                        <span className="qualification__subtitle">
                        {work.institute_name}
                        </span>

                        <div className="qualification__calender flex gap-2 justify-center">
                          <FcCalendar className="text-xl" />
                          {work.session}
                        </div>
                      </div>
                      <div>
                        <span className="qualification__rounder" />
                        {work.id !== workLastIndex && (
                          <span className="qualification__line" />
                        )}
                      </div>
                    </>
                  )}
                  {initNumber % 2 == 0 && (
                    <>
                      <div />
                      <div>
                        <span className="qualification__rounder" />
                        {work.id !== workLastIndex && (
                          <span className="qualification__line" />
                        )}
                      </div>
                      <div>
                        <h3 className="qualification__title">
                          {work.title}</h3>
                        <span className="qualification__subtitle">
                        {work.institute_name}
                        </span>

                        <div className="qualification__calender flex gap-2 justify-center">
                          <FcCalendar className="text-xl" />
                          {work.session}
                        </div>
                      </div>
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
