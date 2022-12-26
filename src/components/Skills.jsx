import React, { Component } from "react";

const SKILLS = [
  {
    name: "Python",
    class: "devicon-python-plain",
    level: "95",
  },
  {
    name: "ReactJS",
    class: "devicon-react-original",
    level: "95",
  },
  {
    name: "React Native",
    class: "devicon-react-original",
    level: "95",
  },
  {
    name: "ExpressJS",
    class: "devicon-express-original",
    level: "70",
  },
  {
    name: "JavaScript",
    class: "devicon-javascript-plain",
    level: "70",
  },
  {
    name: "TypeScript",
    class: "devicon-typescript-plain",
    level: "90",
  },

  {
    name: "Tailwind CSS",
    class: "devicon-tailwindcss-plain",
    level: "95",
  },
  {
    name: "Bootstrap",
    class: "devicon-bootstrap-plain",
    level: "85",
  },

  {
    name: "PostgreSQL",
    class: "devicon-postgresql-plain",
    level: "60",
  },
  {
    name: "MySql",
    class: "devicon-mysql-plain",
    level: "60",
  },
  {
    name: "C#",
    class: "devicon-csharp-plain",
    level: "65",
  },
];

const Skills = () => {
  var sectionName = "SKILLS";
  var skills = SKILLS.map(function (skills, i) {
    return (
      <li className="mx-3" key={i}>
        <span>
          <div className="text-center skills-tile ">
            <i className={skills.class + " text-[220%]"}>
              <p className="text-center text-[30%] mt-1">{skills.name}</p>
            </i>
          </div>
        </span>
      </li>
    );
  });
  return (
    <section id="skills">
      <h1 className="text-white text-lg font-bold text-center uppercase tracking-[3px] pb-[5%] pt-[5%]">
        <span className="text-white">{sectionName}</span>
      </h1>

      <div className="text-center">
        <ul className="flex flex-row flex-wrap gap-4  justify-center text-white">
          {skills}
        </ul>
      </div>
    </section>
  );
};

export default Skills;
