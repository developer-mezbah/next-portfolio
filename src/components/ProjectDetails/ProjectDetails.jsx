import { FaCheckCircle } from "react-icons/fa";
import ProjectDetailsBanner from "./ProjectDetailsBanner";
import ProjectsSlider from "../Projects/ProjectsSlider";
import { projectSlider } from "@/utils/fakeData";
import ProjectFeatures from "./ProjectFeatures";
const ProjectDetails = ({ data }) => {
  console.log(data);
  return (
    <div className="cus_container space-y-5">
      <h1 className="text-2xl" style={{ color: "var(--first-color)" }}>
        {/* Tailwick - Tailwind CSS Admin & Dashboard Template */}
        {data?.title}
      </h1>
      <div className="flex gap-5 flex-wrap">
        <div className="flex gap-1 items-center">
          By{" "}
          <span style={{ color: "var(--first-color)" }}>
            {data?.profile?.user_name}
          </span>
        </div>
        <div className="flex gap-1 items-center text-green-600">
          Recently Updated <FaCheckCircle />
        </div>
        <div className="flex gap-1 items-center text-green-600">
          Well Documented
          <FaCheckCircle />
        </div>
      </div>
      <div className="md:flex md:w-full pb-5 gap-6 m-auto block sm:w-3/4">
        <div className="w-full">
          <ProjectDetailsBanner data={data} />
        </div>
        <div
          className="md:w-2/4 mt-6 rounded-xl p-6"
          style={{
            border: "2px solid var(--first-color)",
            height: "max-content",
          }}
        >
          <div className="flex items-center justify-between text-xl">
            <h3>Regular Price</h3>{" "}
            <span>
              {data.price ? <sup>${data?.price}</sup> : <sup>FREE</sup>}
            </span>
          </div>
          <hr
            className="outline-none my-2"
            style={{ border: "1px solid var(--first-color)", opacity: "0.5" }}
          />
          <span
            className="uppercase text-white px-2 py-1 rounded-lg text-sm"
            style={{ background: "var(--first-color)" }}
          >
            Love this item?
          </span>
          <h2 className="text-lg mt-2">
            Enjoy all the benefits of an Elements subscription.
          </h2>
          <ul className="mt-2">
            <li className="flex items-center gap-2">
              <FaCheckCircle style={{ color: "var(--first-color)" }} />
              Millions of creative assets
            </li>
            <li className="flex items-center gap-2">
              <FaCheckCircle style={{ color: "var(--first-color)" }} />
              Unlimited downloads
            </li>
            <li className="flex items-center gap-2">
              <FaCheckCircle style={{ color: "var(--first-color)" }} />
              Simple commercial licensing
            </li>
            <li className="flex items-center gap-2">
              <FaCheckCircle style={{ color: "var(--first-color)" }} />
              Cancel any time
            </li>
          </ul>
          <button className="button button--flex w-full mt-5">
            Subscribe to Download
          </button>
        </div>
      </div>

      <ProjectFeatures
        keyFeatures={data?.key_feature}
        forDeveloper={data?.for_developer}
      />

      <hr
        className="outline-none my-3"
        style={{ border: "2px solid var(--first-color)" }}
      />
      <div className="py-5">
        <h1
          className="text-2xl inline-block"
          style={{ color: "var(--first-color)" }}
        >
          Related Projects
          <hr
            className="outline-none my-5"
            style={{ border: "2px solid var(--first-color)", opacity: "0.5" }}
          />
        </h1>
        <ProjectsSlider data={projectSlider} />
      </div>
    </div>
  );
};

export default ProjectDetails;
