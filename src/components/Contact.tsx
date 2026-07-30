import flower from "../assets/flower.svg";
import tech from "../assets/tech.svg";
import resume from "../assets/Quimpan_Resume June 2026.pdf";

const stars = "******************************".split("");

function downloadResume() {

    const link:HTMLAnchorElement = document.createElement("a");

    link.href = resume;
    link.setAttribute("download","Quimpan_Resume.pdf");
    link.style.display = "none";

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

}

export default function Contact() {
  return (
    <div className="text-left mt-8 mt-24">
      <section className="flex flex-row justify-between mb-4  max-md:flex-col max-md:text-center">
        <p className="font-alagard text-4xl font-medium underline decoration-blue-500 ">
          {" "}
          Contact Me
        </p>
        <p className="text-slate-500 w-1/2 max-md:w-1/1 text-left max-md:text-center max-md:p-2">
          {" "}
          I have the ambition to learn and buy groceries, let's work together
          and build something great{" "}
          <span className="font-semibold text-blue-500"> {"!"}</span>
        </p>
      </section>
      <section className="flex flex-row  max-md:flex-col max-md:text-center">
        <div className="w-1/2 max-md:w-1/1  flex p-2">
          <img src={flower} alt="Flower icon" className="w-1/3"></img>
          <img src={tech} alt="Laptop icon" className="w-1/3"></img>
          <img src={flower} alt="Flower icon" className="w-1/3"></img>
        </div>
        <div className="flex flex-col w-1/2 max-md:w-1/1  flex-wrap">
          {" "}
          <a className="font-medium underline decoration-blue-500 text-2xl font-spacegrotesk"> Email</a>
          <section className="flex flex-col">
            <a className="hover:text-blue-600"> nicholequimpan@gmail.com </a>
            <span></span>{" "}
            <a className="hover:text-blue-600"> Ellyxdesigned@gmail.com</a>
          </section>
          <a className="font-medium underline decoration-blue-500 hover:text-blue-600 text-2xl font-spacegrotesk">
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
          <a className="font-medium underline decoration-blue-500 hover:text-blue-600 text-2xl font-spacegrotesk">
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
          {/* <a className="font-medium underline decoration-blue-500 hover:text-blue-600 text-2xl font-spacegrotesk">
            {" "}
            Discord
          </a>
          <a
            className="hover:text-blue-600"
            href="https://discord.com/channels/@me"
            target="_blank"
          >
            {" "}
            /Gofigure
          </a> */}
          <a onClick={downloadResume} type="button" className="cursor-pointer hover:text-blue-600 font-medium hover:underline text-2xl font-spacegrotesk mt-2">
            {" "}
            Download My Resume
          </a>
        </div>
      </section>
      <div className="flex flex-wrap overflow-hidden">
                <br></br>
        {"‎ "}
      <span className="text-blue-700 text-8xl">
        {stars.map((char, i) => (
          <span key={i} className="text-blue-700 text-8xl hover:text-slate-900 cursor-default ease-in transition-colors duration-100"
              style={{ transitionDelay: `${i * 1}ms` }}>
            {char}  
          </span>
        ))}
        </span>

      </div>
    </div>
  );
}
