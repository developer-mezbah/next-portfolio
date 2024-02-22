import React from "react";

const ProjectFeatures = () => {
  return (
    <div>
      <hr
        className="outline-none my-5"
        style={{ border: "2px solid var(--first-color)" }}
      />
      <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-5 py-10">
        <div>
          <h2 className="text-xl">Key Features:</h2>
          <hr
            className="outline-none my-2"
            style={{ border: "1px solid var(--first-color)", opacity: "0.5" }}
          />
          <ul className="list-decimal pl-7">
            <li>Dark, Light with RTL Supported</li>
            <li>Multiple Layouts</li>
            <li>Easy to Customize with Tailwind.config</li>
            <li>Unlimited Template Possibilities</li>
            <li>Topbar & Sidebar with many color option support</li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl">For Developers:</h2>
          <hr
            className="outline-none my-2"
            style={{ border: "1px solid var(--first-color)", opacity: "0.5" }}
          />
          <ul className="list-decimal pl-7">
            <li>Tailwind CSS</li>
            <li>Yarn & NPM</li>
            <li>Next.js</li>
            <li>Firebase</li>
            <li>Scss</li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl">Browser Compatibility:</h2>
          <hr
            className="outline-none my-2"
            style={{ border: "1px solid var(--first-color)", opacity: "0.5" }}
          />
          <ul className="list-decimal pl-7">
            <li>Chrome (Windows, Mac, Linux)</li>
            <li>Firefox (Windows, Mac, Linux)</li>
            <li>Safari (Mac)</li>
            <li>Microsoft Edge</li>
            <li>And other WebKit browsers</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProjectFeatures;
