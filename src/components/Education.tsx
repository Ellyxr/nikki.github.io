import tech from "../assets/tech.svg";
import design from "../assets/design.svg";

export default function Education() {
  const techSkills = [
    "React",
    "Javascript",
    "TailwindCSS",
    "SCSS",
    "HTML5",
    "CSS",
    "Git",
    "Express.js",
    "Typescript",
  ];
  const designTools = ["Figma", "Canva", "Affinity", "Photoshop"];

  const DesignToolkit = () => {
    return (
      <ul className="flex flex-wrap">
        {designTools.map((item, index) => (
          <span
            key={index}
            className="text-sm bg-slate-50 m-1 p-1 border-1 border-slate-300 rounded-md hover:border-blue-600 hover:text-blue-600 hover:shadow-md hover:inset-shadow-sm cursor-default"
          >
            {item}
          </span>
        ))}
      </ul>
    );
  };
 
  const TechToolKit = () => {
    return (
      <ul className="flex flex-wrap">
        {techSkills.map((item, index) => (
          <span
            key={index}
            className="text-sm bg-slate-50 m-1 p-1 border-1 border-slate-300 rounded-md hover:border-blue-600 hover:text-blue-600 hover:shadow-md hover:inset-shadow-sm cursor-default"
          >
            {item}
          </span>
        ))}
      </ul>
    );
  };
  return (
    <section
      id="education"
      className="snap-section flex max-md:flex-col max-md:text-center flex-row mt-16 mb-12 text-left"
    >
      <div className="flex flex-col w-1/2 gap-2 max-md:w-1/1 max-md:text-center max-md:mb-8">
        <p className="text-4xl font-medium underline decoration-blue-500 font-alagard">
          {" "}
          Education
        </p>

        {/* "EducationWrapper" */}
        <div className="flex flex-col">
          <div className="flex flex-row max-md:justify-center">
            <p className="text-xl font-spacegrotesk">
              {" "}
              National University - Laguna
            </p>
          </div>
          <div>
            <p className="text-lg text-slate-500 ">
              {" "}
              Information Technology
            </p>
          </div>
        </div>

        <div className="flex flex-col">
          <div className="flex flex-row max-md:justify-center">
            <p className="text-xl font-spacegrotesk"> Certiport</p>
          </div>
          <div>
            <p className="text-lg text-slate-500 "> IT Specialist - Databases</p>
          </div>
        </div>
      </div>
      {/* "SkilslWrapper" */}
      <div className="w-1/2 max-md:w-1/1 max-md:justify-center text-2xl flex flex-col gap-2">
        <p className="text-4xl font-medium underline decoration-blue-500 font-alagard max-md:text-center max-md:justify-center">
          Skills and Toolkit
        </p>
        <div className=" flex flex-row bg-slate-50 border-1 border-slate-200 p-2 rounded-md flex-wrap hover:border-1 hover:border-blue-600 hover:shadow-sm inset-shadow-2xs">
          <div className="flex flex-row">
            {" "}
            <img src={design} alt="art icon" className="w-[8%]"></img>
            <p className="text-xl font-spacegrotesk font-medium"> Design </p>
          </div>

          <DesignToolkit />
        </div>
        <div className=" flex flex-row bg-slate-50 border-1 border-slate-200 p-2 rounded-md flex-wrap hover:border-1 hover:border-blue-600 hover:shadow-sm inset-shadow-2xs">
          <div className="flex flex-row">
            <img src={tech} alt="tech icon" className="w-[8%]"></img>
            <p className="text-xl font-spacegrotesk font-medium"> Tech </p>
          </div>

          <TechToolKit />
        </div>
      </div>
    </section>
  );
}
