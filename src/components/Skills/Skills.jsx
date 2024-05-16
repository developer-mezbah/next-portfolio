"use client";
import { PiBracketsCurlyBold } from "react-icons/pi";
import { BsHddNetwork } from "react-icons/bs";
import { FaSwatchbook } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";
import { useEffect } from "react";
import parse from "html-react-parser";

const Skills = ({ data,sectionDetails }) => {
  console.log(sectionDetails);
  useEffect(() => {
    // Dynamic Width Change from html element value
    function dynamicSkillsWidth() {
      const skillsNumber = document.querySelectorAll(".skills__number");
      const skills__percentage = document.querySelectorAll(
        ".skills__percentage"
      );
      skillsNumber.forEach((item, index) => {
        const getWidth = item.childNodes[0].nodeValue;

        const convertInt = parseInt(getWidth);
        for (let i = 0; i <= convertInt; i++) {
          skills__percentage[index].style.width = "0%";
          skills__percentage[index].style.transition = "0s";
        }
        setInterval(function () {
          for (let i = 0; i <= convertInt; i++) {
            skills__percentage[index].style.transition = "3s ease-in-out";
            skills__percentage[index].style.width = i + "%";
          }
        }, 1);
      });
    }
    dynamicSkillsWidth();
    /* Validate if constant exists */

    /*==================== REMOVE MENU MOBILE ====================*/

    /*==================== ACCORDION SKILLS ====================*/
    const skillsContent = document.getElementsByClassName("skills__content"),
      skillsHeader = document.querySelectorAll(".skills__header");

    skillsHeader.forEach((el) => {
      el.addEventListener("click", function () {
        let itemClass = this.parentNode.className;
        for (let i = 0; i < skillsContent.length; i++) {
          skillsContent[i].className = "skills__content skills__close";
        }
        if (itemClass === "skills__content skills__close") {
          this.parentNode.className = "skills__content skills__open";
        }
      });
    });

    skillsHeader.forEach((el) => {
      el.addEventListener("click", dynamicSkillsWidth);
    });
  }, []);
  return (
    <section className="skills section anime" id="skills">
      <h2 className="section__title">{ sectionDetails?.skills_title || "Skills"}</h2>
      <span className="section__subtitle">{ sectionDetails?.skills_subtitle || "My Technical level"}</span>
      <div className="skills__container cus_container cus_grid">
        {/* Skils Part 1 */}
        {data?.map((item, index) => (
          <div key={item.id} className={`skills__content ${index ==0 ? "skills__open" : "skills__close"}`}>
            <div className="skills__header">
              {/* <PiBracketsCurlyBold className="skills__icon" /> */}
              <span className="skills__icon">{parse(item?.svg)}</span>
              <div>
                <h1 className="skills__titles">{item?.title}</h1>
                <span className="skills__subtitle">{item?.subTitle}</span>
              </div>
              <FaAngleDown className="skills__arrow" />
            </div>
            <div className="skills__list cus_grid">
              {
                item?.skill_items.map(skill => (
                  <div key={skill.id} className="skills__data">
                <div className="skills__titles">
                  <h3 className="skills__name">{skill?.name}</h3>
                  <span className="skills__number">{skill?.percent}%</span>
                </div>
                <div className="skills__bar">
                  <span className="skills__percentage skills__html" />
                </div>
              </div>
                ))
              }
{/*               
              <div className="skills__data">
                <div className="skills__titles">
                  <h3 className="skills__name">CSS</h3>
                  <span className="skills__number">80%</span>
                </div>
                <div className="skills__bar">
                  <span className="skills__percentage skills__css" />
                </div>
              </div>
              <div className="skills__data">
                <div className="skills__titles">
                  <h3 className="skills__name">JavaScript</h3>
                  <span className="skills__number">50%</span>
                </div>
                <div className="skills__bar">
                  <span className="skills__percentage skills__javascript" />
                </div>
              </div>
              <div className="skills__data">
                <div className="skills__titles">
                  <h3 className="skills__name">React</h3>
                  <span className="skills__number">85%</span>
                </div>
                <div className="skills__bar">
                  <span className="skills__percentage skills__react" />
                </div>
              </div>
              <div className="skills__data">
                <div className="skills__titles">
                  <h3 className="skills__name">Next.js</h3>
                  <span className="skills__number">50%</span>
                </div>
                <div className="skills__bar">
                  <span className="skills__percentage skills__react" />
                </div>
              </div> */}
            </div>
          </div>
        ))}
        {/* <div className="skills__content skills__close">
          <div className="skills__header">
            <BsHddNetwork className="skills__icon" />
            <div>
              <h1 className="skills__titles">Backend developer</h1>
              <span className="skills__subtitle">More than 2 Years</span>
            </div>
            <FaAngleDown className="skills__arrow" />
          </div>
          <div className="skills__list cus_grid">
            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Mongo DB</h3>
                <span className="skills__number">90%</span>
              </div>
              <div className="skills__bar">
                <span className="skills__percentage skills__mongo" />
              </div>
            </div>
            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Express</h3>
                <span className="skills__number">80%</span>
              </div>
              <div className="skills__bar">
                <span className="skills__percentage skills__express" />
              </div>
            </div>
            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Next.js</h3>
                <span className="skills__number">60%</span>
              </div>
              <div className="skills__bar">
                <span className="skills__percentage skills__react" />
              </div>
            </div>
            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Node</h3>
                <span className="skills__number">85%</span>
              </div>
              <div className="skills__bar">
                <span className="skills__percentage skills__node" />
              </div>
            </div>
          </div>
        </div> */}
        {/* <div className="skills__content skills__close">
          <div className="skills__header">
            <FaSwatchbook className="skills__icon" />
            <div>
              <h1 className="skills__titles">Other Things</h1>
              <span className="skills__subtitle">More than 1 Years</span>
            </div>
            <FaAngleDown className="skills__arrow" />
          </div>
          <div className="skills__list cus_grid">
            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">RTK Redux tool kit</h3>
                <span className="skills__number">80%</span>
              </div>
              <div className="skills__bar">
                <span className="skills__percentage skills__figma" />
              </div>
            </div>
            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Socket.io</h3>
                <span className="skills__number">50%</span>
              </div>
              <div className="skills__bar">
                <span className="skills__percentage skills__sketch" />
              </div>
            </div>
            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">PhotoShop</h3>
                <span className="skills__number">20%</span>
              </div>
              <div className="skills__bar">
                <span className="skills__percentage skills__photoshop" />
              </div>
            </div>
            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Figma</h3>
                <span className="skills__number">35%</span>
              </div>
              <div className="skills__bar">
                <span className="skills__percentage skills__illustrator" />
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Skills;
