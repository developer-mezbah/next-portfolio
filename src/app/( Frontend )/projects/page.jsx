"use client";
import Projects from "@/components/Projects/Projects";
import MasterLayout from "@/layout/MasterLayout";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";


import { Navigation, Pagination,Autoplay, } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";
import { VscSend } from "react-icons/vsc";

const page = () => {
  return (
    <MasterLayout>
      <div className="cus_container relative py-10">
        <h2 class="section__title anime">Portfolio</h2>
        <span class="section__subtitle anime">Most recent Work</span>
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
          className="project_slider"
        >
          <SwiperSlide className="px-16 pb-10">
            <div className="flex justify-between gap-6">
              <div className="w-[90%]">
                <Image
                  className="rounded-lg"
                  width={400}
                  height={400}
                  src={"/images/portfolio1.jpg"}
                  alt=""
                />
              </div>
              <div className="w-full">
                <h2 className="portfolio__title">mezbah uddin</h2>
                <p className="portfolio__description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
                  omnis, placeat dolorum tempore ratione reiciendis!
                </p>
                <Link
                  href={"#"}
                  className="button button--flex button--small portfolio__button"
                >
                  Demo
                  <VscSend className="button__icon" />
                </Link>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <div className="absolute w-full bottom-0 h-full z-50 flex justify-between items-center">
            <div className="swiper-button-next cursor-pointer overflow-hidden text-sm">
              <IoIosArrowBack className="swiper-portfolio-icon" />
            </div>
            <div className="swiper-button-prev cursor-pointer">
              <IoIosArrowForward className="swiper-portfolio-icon" />
            </div>
          </div>
        </Swiper>
      </div>
    </MasterLayout>
  );
};

export default page;
