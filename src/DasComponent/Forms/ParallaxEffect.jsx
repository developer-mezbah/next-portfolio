import FormTitle from "../Others/FormTitle";
import SubmitButton from "../Others/SubmitButton";

const ParallaxEffect = () => {
  const inputClass =
    "border text-sm rounded-lg block w-full p-2.5 bg-bgDark border-themeColor placeholder-gray-400 text-white focus:ring-themeColor focus:border-themeColor";
  const lableClass =
    "block mb-2 text-sm font-medium text-white";
  return (
    <div className="dashboard-form-bg flex flex-col mt-5">
      <FormTitle text={"parallax effect"} />
      <form className="px-10 pb-10">
        <div className="grid gap-6 mb-6 md:grid-cols-2">
          <div>
            <label htmlFor="brand-name" className={lableClass}>
              Brand Name
            </label>
            <textarea
              type="text"
              id="brand-name"
              className={inputClass}
              placeholder="Write brand name"
            />
          </div>
          <div>
            <label htmlFor="reverse-parlax" className={lableClass}>
              Reverse
            </label>
            <textarea
              type="text"
              id="reverse-parlax"
              className={inputClass}
              placeholder="Write brand name"
            />
          </div>
        </div>

        <SubmitButton text={"Submit"} submit={false} />
      </form>
    </div>
  );
};

export default ParallaxEffect;
