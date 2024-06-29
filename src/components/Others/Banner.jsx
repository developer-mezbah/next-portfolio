import { PrismaClient } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { VscSend } from "react-icons/vsc";

async function getData() {
  const prisma = new PrismaClient();
  const data = await prisma.Discount_project.findFirst({});
  return data;
}

const Banner = async () => {
  const data = await getData();
  return (
    <section className="project section mb-10">
      <div className="">
        <div className="project__container cus_container cus_grid">
          <div data-aos="fade-right" className="project__data">
            <h2 className="project__title anime">{data?.title}</h2>
            <p className="project__description anime">{data?.sub_title}</p>
            <Link
              href="/contact"
              className="button button--flex button--white anime"
            >
              Contact Me
              <VscSend className="button__icon project__icon" />
            </Link>
          </div>
          <Image
            data-aos="fade-left"
            width={400}
            height={400}
            src={data?.img}
            alt={(data?.title, data?.sub_title)}
            className="project__img anime"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
