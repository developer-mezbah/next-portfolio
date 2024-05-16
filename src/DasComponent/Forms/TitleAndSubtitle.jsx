"use client";
import React, { useState } from "react";
import FormTitle from "../Others/FormTitle";
import SubmitButton from "../Others/SubmitButton";
import client_api from "@/utils/api_fetch_fun";
import { SuccessToast } from "@/utils/FormHelper";

const TitleAndSubtitle = ({ sectionData }) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(sectionData || {});
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    setLoading(true);
    const qualification_title = form.qualification_title.value;
    const qualification_subtitle = form.qualification_subtitle.value;
    const testimonial_title = form.testimonial_title.value;
    const testimonial_subtitle = form.testimonial_subtitle.value;
    const about_me_title = form.about_me_title.value;
    const about_me_subtitle = form.about_me_subtitle.value;
    const skills_title = form.skills_title.value;
    const skills_subtitle = form.skills_subtitle.value;
    const services_title = form.services_title.value;
    const services_subtitle = form.services_subtitle.value;
    const popular_projects_title = form.popular_projects_title.value;
    const popular_projects_subtitle = form.popular_projects_subtitle.value;
    const all_projects_title = form.all_projects_title.value;
    const all_projects_subtitle = form.all_projects_subtitle.value;
    const contact_me_title = form.contact_me_title.value;
    const contact_me_subtitle = form.contact_me_subtitle.value;
    const blogs_title = form.blogs_title.value;
    const blogs_subtitle = form.blogs_subtitle.value;
    const formData = {
      qualification_title,
      qualification_subtitle,
      testimonial_title,
      testimonial_subtitle,
      about_me_title,
      about_me_subtitle,
      skills_title,
      skills_subtitle,
      services_title,
      services_subtitle,
      popular_projects_title,
      popular_projects_subtitle,
      all_projects_title,
      all_projects_subtitle,
      contact_me_title,
      contact_me_subtitle,
      blogs_title,
      blogs_subtitle,
    };
    client_api
      .update("/api/dashboard/section-details", formData)
      .then((result) => {
        if (result.status === "success") {
          SuccessToast("Data Updated.");
          setLoading(false);
        }
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };
  return (
    <div>
      <div className="dashboard-form-bg flex flex-col">
        <form onSubmit={handleSubmit} className="px-10 pb-10">
          <div className="-ml-10">
            <FormTitle text={"Qualification"} />
          </div>
          <div className="grid gap-6 mb-6 md:grid-cols-2">
            <div>
              <label htmlFor="q-title" className="dashboard-label">
                Title
              </label>
              <input
                type="text"
                id="q-title"
                className="dashboard-input"
                placeholder="Qualification Title"
                name="qualification_title"
                defaultValue={data?.qualification_title}
              />
            </div>
            <div>
              <label htmlFor="qSubtitle" className="dashboard-label">
                SubTitle
              </label>
              <textarea
                type="text"
                id="qSubtitle"
                className="dashboard-input"
                placeholder="Qulification subtitle"
                name="qualification_subtitle"
                defaultValue={data?.qualification_subtitle}
              />
            </div>
          </div>
          {/* Testimonial */}
          <div className="-ml-10">
            <FormTitle text={"Testimonial"} />
          </div>
          <div className="grid gap-6 mb-6 md:grid-cols-2">
            <div>
              <label htmlFor="Testimonial-title" className="dashboard-label">
                Title
              </label>
              <input
                type="text"
                id="Testimonial-title"
                className="dashboard-input"
                placeholder="Testimonial Title"
                name="testimonial_title"
                defaultValue={data?.testimonial_title}
              />
            </div>
            <div>
              <label htmlFor="TestimonialSubtitle" className="dashboard-label">
                SubTitle
              </label>
              <textarea
                type="text"
                id="TestimonialSubtitle"
                className="dashboard-input"
                placeholder="Testimonial subtitle"
                name="testimonial_subtitle"
                defaultValue={data?.testimonial_subtitle}
              />
            </div>
          </div>

          {/* About Me */}
          <div className="-ml-10">
            <FormTitle text={"About Me"} />
          </div>
          <div className="grid gap-6 mb-6 md:grid-cols-2">
            <div>
              <label htmlFor="About-Me-title" className="dashboard-label">
                Title
              </label>
              <input
                type="text"
                id="About-Me-title"
                className="dashboard-input"
                placeholder="About Me Title"
                name="about_me_title"
                defaultValue={data?.about_me_title}
              />
            </div>
            <div>
              <label htmlFor="about-MeSubtitle" className="dashboard-label">
                SubTitle
              </label>
              <textarea
                type="text"
                id="about-MeSubtitle"
                className="dashboard-input"
                placeholder="About Me subtitle"
                name="about_me_subtitle"
                defaultValue={data?.about_me_subtitle}
              />
            </div>
          </div>
          {/* Skills */}
          <div className="-ml-10">
            <FormTitle text={"Skills"} />
          </div>
          <div className="grid gap-6 mb-6 md:grid-cols-2">
            <div>
              <label htmlFor="Skills-title" className="dashboard-label">
                Title
              </label>
              <input
                type="text"
                id="Skills-title"
                className="dashboard-input"
                placeholder="Skills Title"
                name="skills_title"
                defaultValue={data?.skills_title}
              />
            </div>
            <div>
              <label htmlFor="SkillsSubtitle" className="dashboard-label">
                SubTitle
              </label>
              <textarea
                type="text"
                id="SkillsSubtitle"
                className="dashboard-input"
                placeholder="Skills subtitle"
                name="skills_subtitle"
                defaultValue={data?.skills_subtitle}
              />
            </div>
          </div>
          {/* Services */}
          <div className="-ml-10">
            <FormTitle text={"Services"} />
          </div>
          <div className="grid gap-6 mb-6 md:grid-cols-2">
            <div>
              <label htmlFor="Services-title" className="dashboard-label">
                Title
              </label>
              <input
                type="text"
                id="Services-title"
                className="dashboard-input"
                placeholder="Services Title"
                name="services_title"
                defaultValue={data?.services_title}
              />
            </div>
            <div>
              <label htmlFor="ServicesSubtitle" className="dashboard-label">
                SubTitle
              </label>
              <textarea
                type="text"
                id="ServicesSubtitle"
                className="dashboard-input"
                placeholder="Services subtitle"
                name="services_subtitle"
                defaultValue={data?.services_subtitle}
              />
            </div>
          </div>
          {/* Popular Projects */}
          <div className="-ml-10">
            <FormTitle text={"Popular Projects"} />
          </div>
          <div className="grid gap-6 mb-6 md:grid-cols-2">
            <div>
              <label
                htmlFor="Popular-Projects-title"
                className="dashboard-label"
              >
                Title
              </label>
              <input
                type="text"
                id="Popular-Projects-title"
                className="dashboard-input"
                placeholder="Popular Projects Title"
                name="popular_projects_title"
                defaultValue={data?.popular_projects_title}
              />
            </div>
            <div>
              <label
                htmlFor="PopularProjectsSubtitle"
                className="dashboard-label"
              >
                SubTitle
              </label>
              <textarea
                type="text"
                id="PopularProjectsSubtitle"
                className="dashboard-input"
                placeholder="Popular Projects subtitle"
                name="popular_projects_subtitle"
                defaultValue={data?.popular_projects_subtitle}
              />
            </div>
          </div>
          {/* All Projects */}
          <div className="-ml-10">
            <FormTitle text={"All Projects"} />
          </div>
          <div className="grid gap-6 mb-6 md:grid-cols-2">
            <div>
              <label htmlFor="all-projects-title" className="dashboard-label">
                Title
              </label>
              <input
                type="text"
                id="all-projects-title"
                className="dashboard-input"
                placeholder="All Projects Title"
                name="all_projects_title"
                defaultValue={data?.all_projects_title}
              />
            </div>
            <div>
              <label htmlFor="AllProjectsSubtitle" className="dashboard-label">
                SubTitle
              </label>
              <textarea
                type="text"
                id="AllProjectsSubtitle"
                className="dashboard-input"
                placeholder="Popular Projects subtitle"
                name="all_projects_subtitle"
                defaultValue={data?.all_projects_subtitle}
              />
            </div>
          </div>
          {/* Contact Me */}
          <div className="-ml-10">
            <FormTitle text={"Contact Me"} />
          </div>
          <div className="grid gap-6 mb-6 md:grid-cols-2">
            <div>
              <label htmlFor="contact-me-title" className="dashboard-label">
                Title
              </label>
              <input
                type="text"
                id="contact-me-title"
                className="dashboard-input"
                placeholder="Contact Me Title"
                name="contact_me_title"
                defaultValue={data?.contact_me_title}
              />
            </div>
            <div>
              <label htmlFor="ContactMeSubtitle" className="dashboard-label">
                SubTitle
              </label>
              <textarea
                type="text"
                id="ContactMeSubtitle"
                className="dashboard-input"
                placeholder="Contact Me subtitle"
                name="contact_me_subtitle"
                defaultValue={data?.contact_me_subtitle}
              />
            </div>
          </div>
          {/* Blogs */}
          <div className="-ml-10">
            <FormTitle text={"Blogs"} />
          </div>
          <div className="grid gap-6 mb-6 md:grid-cols-2">
            <div>
              <label htmlFor="Blogs-title" className="dashboard-label">
                Title
              </label>
              <input
                type="text"
                id="Blogs-title"
                className="dashboard-input"
                placeholder="Blogs Title"
                name="blogs_title"
                defaultValue={data?.blogs_title}
              />
            </div>
            <div>
              <label htmlFor="BlogsSubtitle" className="dashboard-label">
                SubTitle
              </label>
              <textarea
                type="text"
                id="BlogsSubtitle"
                className="dashboard-input"
                placeholder="Blogs subtitle"
                name="blogs_subtitle"
                defaultValue={data?.blogs_subtitle}
              />
            </div>
          </div>
          <SubmitButton text={"Submit"} submit={loading} />
        </form>
      </div>
    </div>
  );
};

export default TitleAndSubtitle;
