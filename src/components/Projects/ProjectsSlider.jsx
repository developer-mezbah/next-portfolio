"use client";
import Image from "next/image";
import Link from "next/link";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { VscSend } from "react-icons/vsc";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import parse from "html-react-parser";

const ProjectsSlider = ({ data }) => {
  return (
    <Swiper
      cssMode={true}
      loop={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      navigation={{
        nextEl: ".swiper-button-prev",
        prevEl: ".swiper-button-next",
      }}
      pagination={{
        clickable: true,
      }}
      modules={[Navigation, Pagination, Autoplay]}
      className="project_slider md:h-[310px]"
    >
      {data?.map((slide) => (
        <SwiperSlide
          key={slide.id}
          className="md:px-16 pb-10"
          style={{ background: "var(--hue-color)" }}
        >
          <div className="md:flex justify-between gap-6 items-center mx-auto block w-full text-center md:text-left">
            <Link
              href={
                `/project-details/${slide?.title
                  .replace(/[^a-zA-Z0-9-.\s]/g, "")
                  .replace(/ /g, "-")}?id=${slide?.id}` || "#"
              }
              className="md:w-[90%] w-full"
            >
              <Image
                className="rounded-lg sm:h-[220px] md:w-full mx-auto mb-5"
                width={400}
                height={280}
                src={slide?.banner_img}
                alt={slide?.title}
              />
            </Link>
            <div className="w-full md:space-y-5 overflow-hidden">
              <Link
                href={
                  `/project-details/${slide?.title
                    .replace(/[^a-zA-Z0-9-.\s]/g, "")
                    .replace(/ /g, "-")}?id=${slide?.id}` || "#"
                }
              >
                <h2 className="portfolio__title">
                  {slide?.title?.slice(0, 100)}
                </h2>
              </Link>
              <div className="portfolio__description portfolio__description-2">
                {parse(slide?.description?.slice(0, 150))}
              </div>
              <Link
                href={slide?.preview_url || "#"}
                className="button button--flex button--small portfolio__button cursor-pointer my-3"
              >
                preview
                <VscSend className="button__icon" />
              </Link>
            </div>
          </div>
        </SwiperSlide>
      ))}
      <div className="absolute w-full top-[100px] z-50 flex justify-between items-center">
        <div className="swiper-button-next cursor-pointer overflow-hidden text-sm">
          <IoIosArrowBack className="swiper-portfolio-icon" />
        </div>
        <div className="swiper-button-prev cursor-pointer">
          <IoIosArrowForward className="swiper-portfolio-icon" />
        </div>
      </div>
    </Swiper>
  );
};

export default ProjectsSlider;
