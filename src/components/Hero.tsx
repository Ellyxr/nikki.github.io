import tech from "../assets/tech.svg";
import design from "../assets/design.svg";
import { useState, useEffect } from "react";
import Popover from "./Popover";

interface HeroProps {
  onProjectTypeClick: (type: string) => void;
}

const stars = "******************************".split("");

function GetTime() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [date, setDate] = useState(new Date().toLocaleDateString());
  const [day, setDay] = useState(new Date().getDay());
  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
      setDate(new Date().toLocaleDateString());
      setDay(new Date().getDay());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <span className="text-white font-bold font-spacegrotesk">
      {dayNames[day]}, {date} at {time}
    </span>
  );
}

{
  /** HERO SECTION */
}
export default function Hero({ onProjectTypeClick }: HeroProps) {
  return (
    <section id="hero" className="snap-section min-h-dvh max-md:flex-col">
      <div className="flex flex-wrap overflow-hidden">
        <span className="text-blue-700 text-8xl hover:text-slate-900 cursor-default">
          {stars.map((char, i) => (
            <span
              key={i}
              className="text-blue-700 text-8xl hover:text-slate-900 cursor-none ease-in transition-colors duration-100"
              style={{ transitionDelay: `${i * 1}ms` }}
            >
              {char}
            </span>
          ))}
        </span>
        <br></br>
      </div>
      <div className="flex lg:flex-col max-md:flex-col md:flex-col mt-12 ">
        <div className="flex-row flex max-lg:flex-col">
          <div className="max-md:w-3/3 sm:w-3/3 max-md:p-1 sm:p-1 max-md:text-center flex-2 flex-col w-2/3 text-left">
            <p className="text-6xl font-spacegrotesk">
              <span className="">Nichole</span> is a{" "}
              <span className="font-alagard hover:text-blue-600 cursor-none duration-100 ease-in">
                {" "}
                Frontend Developer
              </span>{" "}
              and{" "}
              <span className="font-alagard hover:text-blue-600 cursor-none duration-100 ease-in">
                Designer
              </span>{" "}
              from the <span className="">Philippines</span> .
            </p>
            <br></br>
            <p className="max-md:w-4/4 sm:w-3/4 max-md:p-6 max-md:p-6 max-md:text-center text-2xl w-3/4">
              {" "}
              She enjoys volunteering, creating passion projects to make life
              easier, and watching devlogs.{" "}
            </p>
          </div>
          <div className="sm:max-md:p-2 flex flex-1 flex-col justify-center place-center max-lg:m-24">
            <section className="lg:w-[70%] max-lg:min-w-[100%] max-lg:justify-center ">
             {/*  LAPTOP POPOVER */}
              <Popover
                content={
                  <div className="text-sm max-w-xs absolute z-10 bg-blue-100 flex ">
                   {/*  <p className="font-semibold">Development Project</p>
                    <p>Web, mobile, or system development requests.</p> */}
                  </div>
                }
              >
                <button
                  className="flex justify-end max-lg:justify-end"
                  onClick={() => onProjectTypeClick("dev")}
                >
                  <img
                    src={tech}
                    alt="Laptop icon"
                    className="rotate-330 w-1/2 max-lg:w-1/3 cursor-pointer"
                  />
                </button>
              </Popover>

              <button
                className="flex justify-start max-lg:justify-start max-lg:ml-20"
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

        {/** Footer */}
        <div className="flex flex-col mt-12">
          <div className="flex flex-row gap-4">
            <p className="font-spacegrotesk font-bold text-slate-600">
              {" "}
              My Time{" "}
            </p>
            <iframe
              src="https://free.timeanddate.com/clock/ia8chj68/n145/fn6/fs18/fcfff/tc22d/ftb/bls0/brs0/bts4/btc00b/tt0/tw1/tm2/ta1"
              frameBorder={0}
              width={325}
              height={28}
              style={{ pointerEvents: "none" }}
            />
            <p className="font-spacegrotesk font-bold text-slate-600">
              {" "}
              Your Time{" "}
            </p>
            <div className="bg-[#2222DD]  border-t-4 border-b-2 border-indigo-800 pl-4 pr-4 cursor-default">
              {" "}
              <GetTime />{" "}
            </div>
          </div>
          {/**         cursor trail hover change cursor when hovering
          certain items checkmark affirmation when clicking buttons gentle ease
          progress bar when scrolling */}
        </div>
      </div>
    </section>
  );
}
