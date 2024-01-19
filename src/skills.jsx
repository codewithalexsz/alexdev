import "../build/output.css";
import "./animate.css";
// import { useState } from "react";
// import Theme from "./theme.jsx";

const skillsData = {
  Nextjs: {
    img: "/nextjs.svg",
    name: "Nextjs",
  },
  Javascript: {
    img: "/javascript.svg",
    name: "Javascript",
  },
  Tailwind: {
    img: "/tailwind.svg",
    name: "Tailwind Css",
  },
  Git: {
    img: "/git.svg",
    name: "Git",
  },
  Vitejs: {
    img: "/vitejs.svg",
    name: "Vite Js",
  },
  HTML: {
    img: "/html.svg",
    name: "HTML",
  },
  CSS: {
    img: "/css.svg",
    name: "CSS",
  },
  React: {
    img: "/react_native.svg",
    name: "React Native",
  },
};

function Skills() {
  return (
    <section className="mx-auto text-white grid justify-center my-14">
      <h1 className="text-5xl font-bold mb-12">Skills</h1>
      <div className="flex skills-container flex-wrap gap-4">
        {Object.keys(skillsData).map((skill, index) => (
          <div
            key={index}
            className="w-[150px] skill-item bg-gray-900 justify-center  h-[150px] p-[1rem] text-white border-[1px] rounded-lg flex flex-col items-center gap-4 shadow-xl"
          >
            <div>
              <img
                className="h-9 w-9"
                src={skillsData[skill].img}
                alt={skillsData[skill].name}
              />
            </div>
            <h3 className="font-semibold tracking-tight text-lg">
              {skillsData[skill].name}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
