"use client";
import React, { useEffect } from "react";
import { CiGrid31 } from "react-icons/ci";
import { FaLaptopCode } from "react-icons/fa";
import { GiSandsOfTime } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

const Services = () => {
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
      <h2 className="section__title anime" target="fadeUp">
        Services
      </h2>
      <span className="section__subtitle anime" target="fadeUp">
        What i offer
      </span>
      <div className="services__container cus_container cus_grid">
        {/*==================== SERVICES 1 ====================*/}
        <div className="services__content anime" target="fadeRight">
          <div>
            <CiGrid31 className="services__icon" />
            <h3 className="services__title">
              Ui/Ux <br />
              Desighner
            </h3>
          </div>
          <span className="button button--flex button--small button--link services__button">
            View More
            <i className="uil uil-arrow-right button__icon" />
          </span>
          <div className="services__modal">
            <div className="services__modal-content">
              <h4 className="services__modal-title">
                Ui/Ux <br />
                Desighner
              </h4>
              <IoMdClose className="services cus_grid services__modal-close" />
              <ul className="services__modal-services cus_grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon" />
                  <p>I develop The user Interface.</p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon" />
                  <p>Web page development.</p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon" />
                  <p>I create ux element interactions.</p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon" />
                  <p>I position your company brand.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/*==================== SERVICES 2 ====================*/}
        <div className="services__content anime" target="fadeDown">
          <div>
            <FaLaptopCode className="services__icon" />
            <h3 className="services__title">
              Fronted <br />
              Developer
            </h3>
          </div>
          <span className="button button--flex button--small button--link services__button">
            View More
            <i className="uil uil-arrow-right button__icon" />
          </span>
          <div className="services__modal">
            <div className="services__modal-content">
              <h4 className="services__modal-title">
                Fronted <br />
                Developer
              </h4>
              <IoMdClose className="services cus_grid services__modal-close" />
              <ul className="services__modal-services cus_grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon" />
                  <p>I develop The user Interface.</p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon" />
                  <p>Web page development.</p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon" />
                  <p>I create ux element interactions.</p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon" />
                  <p>I position your company brand.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/*==================== SERVICES 3 ====================*/}
        <div className="services__content anime" target="fadeLeft">
          <div>
            <GiSandsOfTime className="services__icon" />
            <h3 className="services__title">
              Branding <br />
              Desighner
            </h3>
          </div>
          <span className="button button--flex button--small button--link services__button">
            View More
            <i className="uil uil-arrow-right button__icon" />
          </span>
          <div className="services__modal">
            <div className="services__modal-content">
              <h4 className="services__modal-title">
                Branding <br />
                Desighner
              </h4>
              <IoMdClose className="services cus_grid services__modal-close" />
              <ul className="services__modal-services cus_grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon" />
                  <p>I develop The user Interface.</p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon" />
                  <p>Web page development.</p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon" />
                  <p>I create ux element interactions.</p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon" />
                  <p>I position your company brand.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
