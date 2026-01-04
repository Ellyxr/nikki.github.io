import tech from "../assets/tech.svg";
import design from "../assets/design.svg";

interface HeroProps {
  onProjectTypeClick: (type: string) => void;
}

export default function Hero({ onProjectTypeClick }: HeroProps) {

  return (
    <section id="hero" className="snap-section h-dvh ">
      <div className="flex flex-wrap overflow-hidden">
      <span className="text-blue-700 text-8xl">
        {"******************************"}
        </span>
        <br></br>
        {"‎ "}
      </div>
      <div className="flex flex-row mt-16">
        <div className="flex-2 flex-col w-2/3 text-left">
          <p className="text-6xl font-spacegrotesk">
            <span className="">Nichole</span> is a <span className="font-alagard"> Frontend Developer</span> and <span className="font-alagard">Designer</span> from the <span className="">Philippines</span> .
          </p>
          <br></br>
          <p className="text-2xl w-3/4 font-spacegrotesk">
            {" "}
            She enjoys volunteering, creating passion projects to make life
            easier, and watching devlogs.{" "}
          </p>
        </div>
        <div className="flex-1 flex flex-col justify-center place-center">
          <section className="w-[70%] ">
            <button 
              className="flex justify-end"
              onClick={() => onProjectTypeClick("dev")}
            >
              <img
                src={tech}
                alt="Laptop icon"
                className="rotate-330 w-1/2 cursor-pointer"
              ></img>
            </button>
            <button
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
