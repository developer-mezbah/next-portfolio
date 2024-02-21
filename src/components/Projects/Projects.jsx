"use client";
import Image from "next/image";
import Link from "next/link";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { VscSend } from "react-icons/vsc";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
const Projects = ({ data }) => {
  return (
    <div className="cus_container relative py-10 overflow-hidden">
      <h2 className="section__title anime">Portfolio</h2>
      <span className="section__subtitle anime">Most recent Work</span>
      <Swiper
        cssMode={true}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Navigation, Pagination, Autoplay]}
        className="project_slider h-[310px]"
      >
        {data?.map((slide) => (
          <SwiperSlide key={slide.id} className="px-16 pb-10">
            <div className="flex justify-between gap-6 items-center">
              <div className="w-[90%]">
                <Image
                  className="rounded-lg"
                  width={400}
                  height={280}
                  src={slide.img}
                  alt={slide.title}
                />
              </div>
              <div className="w-full space-y-5">
                <h2 className="portfolio__title">{slide.title}</h2>
                <p className="portfolio__description">{slide.description}</p>
                <Link
                  href={"#"}
                  className="button button--flex button--small portfolio__button"
                >
                  preview
                  <VscSend className="button__icon" />
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
        <div className="absolute w-full top-0 h-full z-50 flex justify-between items-center">
          <div className="swiper-button-next cursor-pointer overflow-hidden text-sm">
            <IoIosArrowBack className="swiper-portfolio-icon" />
          </div>
          <div className="swiper-button-prev cursor-pointer">
            <IoIosArrowForward className="swiper-portfolio-icon" />
          </div>
        </div>
      </Swiper>
    </div>
  );
};

export default Projects;
