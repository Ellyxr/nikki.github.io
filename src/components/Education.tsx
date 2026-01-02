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
            className="text-sm bg-slate-100 m-1 p-1 border-1 border-slate-300 rounded-md hover:border-blue-600 hover:text-blue-600"
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
            className="text-sm bg-slate-100 m-1 p-1 border-1 border-slate-300 rounded-md hover:border-blue-600 hover:text-blue-600"
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
      className="snap-section flex flex-row mt-16 mb-24 text-left"
    >
      <div className="flex flex-col w-1/2 gap-2">
        <p className="text-2xl font-medium underline decoration-blue-500"> Education</p>

        {/* "EducationWrapper" */}
        <div className="flex flex-col">
          <div className="flex flex-row">
            <p className="text-lg"> National University - Laguna</p>
          </div>
          <div>
            <p className="text-md text-slate-500"> Information Technology</p>
          </div>
        </div>

        <div className="flex flex-col">
          <div className="flex flex-row">
            <p className="text-lg"> Certiport</p>
          </div>
          <div>
            <p className="text-md text-slate-500"> IT Specialist - Databases</p>
          </div>
        </div>
      </div>
      <div className="w-1/2 text-2xl flex flex-col gap-2">
        <p className="text-2xl font-medium underline decoration-blue-500">Skills and Toolkit</p>
        <div className="flex flex-row bg-slate-50 border-1 border-slate-200 p-2 rounded-md flex-wrap hover:border-1 hover:border-blue-600 hover:shadow-sm inset-shadow-2xs">
          <div className="flex flex-row">
            {" "}
            <img
              src="src\assets\design.svg"
              alt="art icon"
              className="w-[8%]"
            ></img>
            <p className="text-lg"> Design </p>
          </div>

          <DesignToolkit />
        </div>
        <div className="flex flex-row bg-slate-50 border-1 border-slate-200 p-2 rounded-md flex-wrap hover:border-1 hover:border-blue-600 hover:shadow-sm inset-shadow-2xs">
          <div className="flex flex-row">
            <img
              src="src\assets\tech.svg"
              alt="tech icon"
              className="w-[8%]"
            ></img>
            <p className="text-lg"> Tech </p>
          </div>

          <TechToolKit />
        </div>
      </div>
    </section>
  );
}
