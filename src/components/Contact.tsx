import flower from "../assets/flower.svg";
import tech from "../assets/tech.svg";

export default function Contact() {
  return (
    <div className="text-left mt-8 mt-24">
      <section className="flex flex-row justify-between mb-4">
        <p className="text-lg font-medium underline decoration-blue-500">
          {" "}
          Contact Me
        </p>
        <p className="text-slate-500 w-1/2 text-left">
          {" "}
          I have the ambition to learn and buy groceries, let's work together
          and build something great{" "}
          <span className="font-semibold text-blue-500"> {"!"}</span>
        </p>
      </section>
      <section className="flex flex-row">
        <div className="w-1/2 flex p-2">
          <img src={flower} alt="Flower icon" className="w-1/3"></img>
          <img src={tech} alt="Laptop icon" className="w-1/3"></img>
          <img src={flower} alt="Flower icon" className="w-1/3"></img>
        </div>
        <div className="flex flex-col w-1/2 flex-wrap">
          {" "}
          <a className="font-medium underline decoration-blue-500"> Email</a>
          <section className="flex flex-col">
            <a className="hover:text-blue-600"> nicholequimpan@gmail.com </a>
            <span></span>{" "}
            <a className="hover:text-blue-600"> Ellyxdesigned@gmail.com</a>
          </section>
          <a className="font-medium underline decoration-blue-500 hover:text-blue-600">
            {" "}
            Github{" "}
          </a>
          <a
            className="hover:text-blue-600"
            href="https://github.com/Ellyxr"
            target="_blank"
          >
            {" "}
            /Ellyxr (home of my personal projs!)
          </a>
          <a
            className="hover:text-blue-600"
            href="https://github.com/quimpann"
            target="_blank"
          >
            {" "}
            /nicholequimpan
          </a>
          <a className="font-medium underline decoration-blue-500 hover:text-blue-600">
            {" "}
            Linkedin
          </a>
          <a
            className="hover:text-blue-600"
            href="https://www.linkedin.com/in/nichole-quimpan-6622882a8/"
            target="_blank"
          >
            {" "}
            /nichole-quimpan
          </a>
          <a className="hover:text-blue-600 font-medium hover:underline">
            {" "}
            Download My Resume
          </a>
        </div>
      </section>
      <div className="bg-blue-700 h-1/2 mt-12 hover:border-1 hover:border-blue-700 hover:bg-transparent">
        {"‎ "}
        <br></br>
        {"‎ "}
      </div>
    </div>
  );
}
