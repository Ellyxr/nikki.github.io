import { dev } from "./DevContainer";
import { design } from "./DesignContainer";
import { useState, useEffect } from "react";

interface ProjectTypeProps {
  initialActiveType: string;
}

export const ProjectType = ({ initialActiveType }: ProjectTypeProps) => {
  const [activeType, setActiveType] = useState(initialActiveType);

  useEffect(() => {
    if (initialActiveType && initialActiveType !== activeType) {
      setActiveType(initialActiveType);
    }
  }, [initialActiveType]);

  const toggleProjects = () => {
    setActiveType((prev) => (prev === "dev" ? "design" : "dev"));
  };

  return (
    <section>
      <div>
        {" "}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            toggleProjects();
          }}
          className="cursor-pointer border-slate-200 rounded-md p-1 flex justify-end text-blue-600  font-semibold text-xl font-alagard"
        >
          {activeType === "dev" ? "Dev" : "Design"}
        </a>
      </div>

      <div>{activeType === "dev" ? <DevContainer /> : <DesignContainer />}</div>
    </section>
  );
};

const DevContainer = () => {
  return (
    <section className="gap-4 flex flex-col h-dvw h-full">
      {dev.map((n) => (
        <div key={n.id} className="flex flex-row max-md:flex-col-reverse">
          <div className="flex flex-col w-2/4 justify-end p-2 max-md:w-4/4">
            <h2 className="font-alagard text-4xl hover:text-blue-700">{n.title}</h2>
            <p className="text-md w-3/4 mb-2 font-spacegrotesk">{n.description}</p>
            <div className="flex flex-wrap">
            {n.tools.map((tool, index) => (
              <span key={index} className="text-sm bg-slate-50 m-1 p-1 border-1 border-slate-300 rounded-md hover:border-blue-600 hover:text-blue-600 hover:shadow-md hover:inset-shadow-sm cursor-default">
                {tool}
              </span>
            ))}
            </div>
          </div>

          <div className="w-2/4 max-md:w-4/4">
            <div className="bg-slate-50 rounded-md border-2 border-slate-100 shadow-sm hover:shadow-md hover:border-blue-600 justify-center flex overflow-hidden object-cover">

              <img src={n.media} alt={n.title} className=""></img>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

const DesignContainer = () => {
  return (
    <section className="gap-4 flex flex-col p-2 h-dvw h-full">
      {design.map((n) => (
        <div key={n.id} className="flex flex-row max-md:flex-col-reverse">
          <div className="flex flex-col w-2/4 justify-end p-2 max-md:w-4/4">
            <h2 className="font-alagard text-4xl hover:text-blue-700">{n.title}</h2>
            <p className="text-sm font-spacegrotesk">{n.description}</p>
            <div className="flex flex-wrap">
            {n.tools.map((tool, index) => (
              <span key={index} className="text-sm bg-slate-50 m-1 p-1 border-1 border-slate-300 rounded-md hover:border-blue-600 hover:text-blue-600 cursor-default">
                {tool}
              </span>
            ))}
            </div>
          </div>

          <div className="w-2/4  max-md:w-4/4">
            <div className="bg-slate-50 rounded-md border-1 border-slate-100 shadow-sm hover:shadow-md hover:border-blue-600">
              {" "}
              <img src={n.media} alt={n.title} className="w-2/4"></img>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

interface ProjectsProps {
  activeType: string;
}

export default function Projects({ activeType }: ProjectsProps) {
  return (
    <div id="projects" className="flex flex-col p-2 mt-8 gap-4 ">
      <section className="flex flex-row justify-between  max-md:flex-col">
        <p className="max-md:text-center text-left text-4xl font-medium underline decoration-blue-500 font-alagard">
          {" "}
          Projects{" "}
        </p>
        <a className="text-slate-500 rounded-md p-1 hover:text-blue-600 hover:border-blue-600">
          {" "}
          This portfolio was made using React.js, Typescript, and TailwindCSS.
        </a>
      </section>
      <section className="flex flex-row text-left ">
        <div className="flex flex-row">
          <ProjectType initialActiveType={activeType} />
        </div>
      </section>
    </div>
  );
}
