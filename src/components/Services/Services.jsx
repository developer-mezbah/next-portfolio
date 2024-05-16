"use client";
import React, { useEffect } from "react";
import { CiGrid31 } from "react-icons/ci";
import { FaLaptopCode } from "react-icons/fa";
import { GiSandsOfTime } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { FiCheckCircle } from "react-icons/fi";
import { CgArrowLongRightC } from "react-icons/cg";
import parse from "html-react-parser";

const Services = ({ data,sectionDetails }) => {
  useEffect(() => {
    /*==================== SERVICES MODAL ====================*/
    const modalViews = document.querySelectorAll(".services__modal"),
      modalBtns = document.querySelectorAll(".services__button"),
      modalCloses = document.querySelectorAll(".services__modal-close");
    let modal = function (modalClick) {
      modalViews[modalClick].classList.add("active-modal");
    };
    modalBtns.forEach((modalBtn, i) => {
      modalBtn.addEventListener("click", () => {
        modal(i);
      });
    });
    modalCloses.forEach((modalClose) => {
      modalClose.addEventListener("click", () => {
        modalViews.forEach((modalView) => {
          modalView.classList.remove("active-modal");
        });
      });
    });
  }, []);

  return (
    <section className="services section" id="services">
      <h2 className="section__title">{ sectionDetails?.services_title || "Services"}</h2>
      <span className="section__subtitle">{ sectionDetails?.services_subtitle || "What i offer."}</span>
      <div className="services__container cus_container cus_grid md:px-3">
        {data?.map((item) => (
          <div key={item.id} className="services__content">
            <div>
              <span className="services__icon">{parse(item?.svg)}</span>
              <h3 className="services__title">
                {item?.title}
              </h3>
            </div>
            <span className="button button--flex button--small button--link services__button">
              View More
              <CgArrowLongRightC className="button__icon" />
            </span>
            <div className="services__modal">
              <div className="services__modal-content">
                <h4 className="services__modal-title">{item?.title}</h4>
                <IoMdClose className="services cus_grid services__modal-close" />
                <ul className="services__modal-services cus_grid">
                  {item?.service_items?.map((service) => (
                    <li key={service?.id} className="services__modal-service">
                      <FiCheckCircle className="services__modal-icon mt-1" />
                      <p>{service?.name}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
