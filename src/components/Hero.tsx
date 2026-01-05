import tech from "../assets/tech.svg";
import design from "../assets/design.svg";

interface HeroProps {
  onProjectTypeClick: (type: string) => void;
}

export default function Hero({ onProjectTypeClick }: HeroProps) {

  return (
    <section id="hero" className="snap-section min-h-dvh max-sm:flex-col">
      <div className="flex flex-wrap overflow-hidden">
      <span className="text-blue-700 text-8xl">
        {"******************************"}
        </span>
        <br></br>
        {"‎ "}
      </div>
      <div className="flex lg:flex-row max-md:flex-col md:flex-col mt-16 ">
        <div className="max-md:w-3/3 sm:w-3/3 max-md:p-1 sm:p-1 max-md:text-center flex-2 flex-col w-2/3 text-left">
          <p className="text-6xl font-spacegrotesk">
            <span className="">Nichole</span> is a <span className="font-alagard"> Frontend Developer</span> and <span className="font-alagard">Designer</span> from the <span className="">Philippines</span> .
          </p>
          <br></br>
          <p className="max-md:w-4/4 sm:w-4/4 max-md:p-6 max-md:p-6 max-md:text-center text-2xl w-3/4 font-spacegrotesk">
            {" "}
            She enjoys volunteering, creating passion projects to make life
            easier, and watching devlogs.{" "}
          </p>
        </div>
        <div className="sm:max-md:p-2 flex flex-1 flex-col justify-center place-center max-lg:m-24">
          <section className="lg:w-[70%] max-lg:min-w-[100%] max-lg:justify-center ">
            <button 
              className="flex justify-end max-lg:justify-end"
              onClick={() => onProjectTypeClick("dev")}
            >
              <img
                src={tech}
                alt="Laptop icon"
                className="rotate-330 w-1/2 max-lg:w-1/3 cursor-pointer"
              ></img>
            </button>
            <button className="flex justify-start max-lg:justify-start max-lg:ml-20"
              onClick={() => onProjectTypeClick("design")}
            >
              <img
                src={design}
                alt="Design icon"
                className="rotate-10 w-1/2 cursor-pointer"
              ></img>
            </button>
          </section>
        </div>
      </div>
    </section>
  );
}
