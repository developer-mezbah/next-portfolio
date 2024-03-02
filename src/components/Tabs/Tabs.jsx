"use client";

import { useEffect, useState } from "react";
import "./Tabs.css";
import ProjectCard from "../Projects/ProjectCard";
import { projects } from "@/utils/fakeData";

const Tabs = () => {
  const [tabsProjects, setTabsProjects] = useState(projects.slice(0, 4) || []);
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
  }, []);
  return (
    <div className="cus_container">
      <div className="tabs-section">
        <div className="tab-header">
          <ul className="tab-items">
            <li onClick={() => setTabsProjects(projects.slice(0, 4))} className="active">React.JS</li>
            <li onClick={() => setTabsProjects(projects.slice(4, 8))}>Next.JS</li>
            <li>Dashboard</li>
            <li>E-commerce</li>
            <li>Portfolio</li>
          </ul>
        </div>
        <div className="tab-body grid md:grid-cols-2 gap-5">
          {tabsProjects?.map((project) => (
            <ProjectCard key={project.id} data={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tabs;
