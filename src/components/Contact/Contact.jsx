"use client";
import { LiaPhoneVolumeSolid } from "react-icons/lia";
import { CiLocationOn } from "react-icons/ci";
import { SiAmazonsimpleemailservice } from "react-icons/si";
import Link from "next/link";
import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { IoSendSharp } from "react-icons/io5";
import toast from "react-hot-toast";

const Contact = ({ sectionDetails,contactData }) => {
  const [loader, setLoader] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();
    setLoader(true);
    const name = e.target.name.value;
    const email = e.target.email.value;
    const subject = e.target.subject.value;
    const message = e.target.message.value;
    console.log({ name, email, subject, message });
    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        {
          sendername: name,
          to: process.env.NEXT_PUBLIC_EMAILJS_TO_EMAIL,
          subject,
          message,
          email: email,
        },
        {
          publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
        }
      )
      .then(
        (response) => {
          if (response.status == 200) {
            setLoader(false);
            toast.success("Email send Successfull.");
            e.target.reset();
          }
          // console.log("SUCCESS!", response.status, response.text);
        },
        (err) => {
          setLoader(false);
          toast.error("FAILED...", err);
          console.log("FAILED...", err);
        }
      );
  };
  return (
    <section className="contact section anime" id="contact">
      <h2 className="section__title">
        {sectionDetails?.contact_me_title || "Contact Me"}
      </h2>
      <span className="section__subtitle">
        {sectionDetails?.contact_me_subtitle || "Get in Touch"}
      </span>
      <div className="contact__container cus_container cus_grid">
        <div
          className="anime"
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="300"
        >
          <Link href={"tel:+880 1707954201"}>
            <div className="contact__information">
              <LiaPhoneVolumeSolid className="contact__icon" />
              <div>
                <h3 className="contact__title">Call Me</h3>
                <span className="contact__subtitle">{contactData?.phone}</span>
              </div>
            </div>
          </Link>
          <Link href={"mailto:developer.mezbah@gmail.com"}>
            <div className="contact__information cursor-pointer">
              <SiAmazonsimpleemailservice className="contact__icon" />
              <div>
                <h3 className="contact__title">Email</h3>
                <span className="contact__subtitle">
                {contactData?.email}
                </span>
              </div>
            </div>
          </Link>
          <div className="contact__information">
            <CiLocationOn className="contact__icon" />
            <div>
              <h3 className="contact__title">Location</h3>
              <span className="contact__subtitle">{contactData?.location}</span>
            </div>
          </div>
        </div>
        <form
          onSubmit={sendEmail}
          className="contact__form cus_grid"
          data-aos="fade-left"
          data-aos-easing="linear"
          data-aos-duration="300"
        >
          <div className="contact__inputs cus_grid">
            <div className="contact__content anime" target="fadeRight">
              <label htmlFor="name" className="contact__label">
                Name
              </label>
              <input
                id="name"
                type="text"
                name="name"
                className="contact__input"
              />
            </div>
            <div className="contact__content anime" target="fadeLeft">
              <label htmlFor="email" className="contact__label">
                Email
              </label>
              <input
                type="email"
                name="email"
                className="contact__input"
                id="email"
              />
            </div>
          </div>
          <div className="contact__content anime" target="zoomIn">
            <label htmlFor="subject" className="contact__label">
              Project
            </label>
            <input
              id="subject"
              type="text"
              name="subject"
              className="contact__input"
            />
          </div>
          <div className="contact__content anime" target="zoomInUp">
            <label htmlFor="message" className="contact__label">
              Write your Message...
            </label>
            <textarea
              name="message"
              id="message"
              cols={30}
              rows={4}
              className="contact__input"
              defaultValue={""}
            />
          </div>
          <div>
            {loader ? (
              <button
                type="submit"
                disabled
                className="button button--flex group"
              >
                <span>Processing </span>
                <div role="status">
                  <svg
                    aria-hidden="true"
                    className="ml-3 w-8 h-5 text-gray-200 animate-spin dark:text-gray-600 fill-[#271627]"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="currentColor"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentFill"
                    />
                  </svg>
                  <span className="sr-only">Loading...</span>
                </div>
              </button>
            ) : (
              <button type="submit" className="button button--flex group">
                Send Message
                <IoSendSharp className="group-hover:scale-150 group-hover:text-accent transition-colors ml-2" />
              </button>
            )}
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
