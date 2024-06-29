"use client";
import { useEffect, useState } from "react";
import { FaGraduationCap } from "react-icons/fa6";
import { FaBriefcase } from "react-icons/fa";
import { FcCalendar } from "react-icons/fc";
import { motion } from "framer-motion";
import Loader from "@/utils/Loader";

const Qualification = () => {
  const [workQualify, setWorkQualify] = useState([]);
  const [educationQualify, setEducationQualify] = useState([]);
  const [sectionDetails, setSectionDetails] = useState();
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    setLoader(true);
    fetch("/api/public-api/home-client/qualification")
      .then((res) => res.json())
      .then((data) => {
        setLoader(false);
        setEducationQualify(data?.data?.educationQualify);
        setWorkQualify(data?.data?.workQualify);
        setSectionDetails(data?.data?.sectionDetails);
      });
  }, []);

  const workLastIndex = workQualify?.slice(-1)[0]?.id;
  const educationLastIndex = educationQualify?.slice(-1)[0]?.id;

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
  }, [loader]);
  return (
    <section className="qualification section">
      <h2 className="section__title anime">
        {sectionDetails?.qualification_title || "Qualification"}
      </h2>
      <span className="section__subtitle anime">
        {sectionDetails?.qualification_subtitle || "My personal journey"}
      </span>
      {loader ? (
        <Loader />
      ) : (
        <div className="qualification__container cus_container">
          <div data-aos="zoom-in-down" className="qualification__tabs">
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
                        <div data-aos="fade-down">
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
                        <div data-aos="fade-down">
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
                        <div data-aos="fade-down">
                          <span className="qualification__rounder" />
                          {education.id !== educationLastIndex && (
                            <span className="qualification__line" />
                          )}
                        </div>
                        <div data-aos="fade-down">
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
                        <div data-aos="fade-down">
                          <h3 className="qualification__title">{work.title}</h3>
                          <span className="qualification__subtitle">
                            {work.institute_name}
                          </span>

                          <div className="qualification__calender flex gap-2 justify-center">
                            <FcCalendar className="text-xl" />
                            {work.session}
                          </div>
                        </div>
                        <div data-aos="fade-down">
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
                        <div data-aos="fade-down">
                          <span className="qualification__rounder" />
                          {work.id !== workLastIndex && (
                            <span className="qualification__line" />
                          )}
                        </div>
                        <div data-aos="fade-down">
                          <h3 className="qualification__title">{work.title}</h3>
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
      )}
    </section>
  );
};

export default Qualification;
