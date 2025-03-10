"use client";

import client_api from "@/utils/api_fetch_fun";
import { Player } from "@lottiefiles/react-lottie-player";
import { useEffect, useState } from "react";
import ProjectCard from "../Projects/ProjectCard";
import "./Tabs.css";

const Tabs = ({ tabs }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [projects, setProjects] = useState(data || []);
  useEffect(() => {
    setLoading(true);
    fetch("/api/public-api/home-client/all-projects")
      .then((res) => res.json())
      .then((data) => {
        setData(data?.data);
        setProjects(data?.data);
        setLoading(false);
      });
  }, []);
  const dataFetchByCat = async (catID) => {
    console.log(catID);
    
    setLoading(true);
    await client_api
      .get(`/api/public-api/projects-by-category?id=${catID}`)
      .then((data) => {
        setProjects(data?.data);
        setLoading(false);
      });
  };

  const style = {
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
  useEffect(() => {
    const tabItems = document.querySelectorAll(".tab-items li");
    tabItems.forEach((tab) => {
      tab.addEventListener("click", () => {
        tabItems.forEach((removeActive) => {
          removeActive.classList.remove("active");
        });
        tab.classList.add("active");
      });
    });
  }, [tabs]);

  return (
    <div className="cus_container">
      <div className="tabs-section">
        <div className="tab-header">
          <ul className="tab-items">
            <li
            key="sdkfj"
              onClick={() => {
                setLoading(true);
                setProjects(data);
                setLoading(false);
              }}
              className="active"
              // data-aos="fade-right"
              // data-aos-delay="200"
            >
              <span>All</span>
            </li>
            {tabs?.map((item, index) => {
              const delayTime = 200 + 100 * index;
              return (
                  <li
                    // data-aos="fade-right"
                    // data-aos-delay={delayTime}
                    onClick={() => dataFetchByCat(item?.id)}
                    key={index}
                  >
                    <span>{item.cat_name}</span>
                  </li>
              )
            })}
          </ul>
        </div>
        {!loading && data ? (
          <div className="tab-body grid md:grid-cols-2 gap-5 mt-6">
            {projects.length != 0 ? (
              projects?.slice(0, 4).map((project, index) => (
                <div
                  key={index}
                  data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
                  data-aos-easing="linear"
                  data-aos-duration="300"
                >
                  <ProjectCard data={project} />
                </div>
              ))
            ) : (
              <p key="asdf324">There is no project here!</p>
            )}
          </div>
        ) : (
          <div style={style}>
            <Player
              autoplay
              loop
              src="/loading.json"
              style={{ height: "300px", width: "300px" }}
            ></Player>
          </div>
        )}
      </div>
    </div>
  );
};

export default Tabs;
