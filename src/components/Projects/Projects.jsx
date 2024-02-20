"use client";
import React, { useEffect } from "react";
const Projects = () => {
  return (
    <section className="portfolio section" id="portfolio">
      <h2 className="section__title anime">Portfolio</h2>
      <span className="section__subtitle anime">Most recent Work</span>
      <div className="portfolio__container cus_container swiper-container">
        <div className="swiper-wrapper">
          {/*==================== PORTFOLIO 1 ====================*/}
          <div className="portfolio__content cus_grid swiper-slide">
            <img
              src="assets/img/portfolio1.jpg"
              alt=""
              className="portfolio__img"
            />
            <div className="portfolio__data">
              <h3 className="portfolio__title">Modern Website</h3>
              <p className="portfolio__description">
                Website adaptable to all devices, with ui components and
                animated interactions.
              </p>
              <a
                href="#"
                className="button button--flex button--small portfolio__button"
              >
                Demo
                <i className="uil uil-arrow-right button__icon" />
              </a>
            </div>
          </div>
          {/*==================== PORTFOLIO 2 ====================*/}
          <div className="portfolio__content grid swiper-slide">
            <img
              src="assets/img/portfolio2.jpg"
              alt=""
              className="portfolio__img"
            />
            <div className="portfolio__data">
              <h3 className="portfolio__title">Brand Design</h3>
              <p className="portfolio__description">
                Website adaptable to all devices, with ui components and
                animated interactions.
              </p>
              <a
                href="#"
                className="button button--flex button--small portfolio__button"
              >
                Demo
                <i className="uil uil-arrow-right button__icon" />
              </a>
            </div>
          </div>
          {/*==================== PORTFOLIO 3 ====================*/}
          <div className="portfolio__content grid swiper-slide">
            <img
              src="assets/img/portfolio3.jpg"
              alt=""
              className="portfolio__img"
            />
            <div className="portfolio__data">
              <h3 className="portfolio__title">Online Store</h3>
              <p className="portfolio__description">
                Website adaptable to all devices, with ui components and
                animated interactions.
              </p>
              <a
                href="#"
                className="button button--flex button--small portfolio__button"
              >
                Demo
                <i className="uil uil-arrow-right button__icon" />
              </a>
            </div>
          </div>
        </div>
        {/* Add Arrows */}
        <div className="swiper-button-next">
          <i className="uil uil-angle-right-b swiper-portfolio-icon" />
        </div>
        <div className="swiper-button-prev">
          <i className="uil uil-angle-left-b swiper-portfolio-icon" />
        </div>
        {/* Swipper pagination */}
        <div className="swiper-pagination" />
      </div>
    </section>
  );
};

export default Projects;
