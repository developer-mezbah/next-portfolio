"use client";

import { useEffect, useState } from "react";
import "./Tabs.css";
import ProjectCard from "../Projects/ProjectCard";
import client_api from "@/utils/api_fetch_fun";
import { Player } from "@lottiefiles/react-lottie-player";

const Tabs = ({ data }) => {
  const [loading, setLoading] = useState(false);
  const [projects, setProjects] = useState(data || []);
  const [tabs, setTabs] = useState([]);
  
  useEffect(() => {
    setLoading(true);
    fetch("/api/public-api/project-categories")
      .then((res) => res.json())
      .then((data) => {
        setTabs(data?.data);
        setLoading(false);
      });
  }, []);
  const dataFetchByCat = async (catID) => {
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
            <li onClick={() => {
              setLoading(true)
              setProjects(data)
              setLoading(false)
            }}
            className="active">All</li>
            {tabs?.map((item) => (
              <li onClick={() => dataFetchByCat(item?.id)} key={item?.id}>
                {item.cat_name}
              </li>
            ))}
          </ul>
        </div>
        {!loading && data ? <div className="tab-body grid md:grid-cols-2 gap-5">
          {projects.length != 0 ? projects?.slice(0, 4).map((project) => (
            <ProjectCard key={project.id} data={project} />
          )): <p>There is no project here!</p>}
        </div>: <div style={style}>
        <Player
          autoplay
          loop
          src="/loading.json"
          style={{ height: "300px", width: "300px" }}
        ></Player>
      </div>}
      </div>
    </div>
  );
};

export default Tabs;
