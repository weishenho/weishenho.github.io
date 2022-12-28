import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { Icon } from "@iconify/react";
import reactIcon from "@iconify/icons-logos/react";
import dotnetIcon from "@iconify/icons-logos/dotnet";
import pythonIcon from "@iconify/icons-logos/python";

export const experiences = [
  {
    company: "Time access international",
    title: "Senior Software Engineer",
    years: "01/2021 - 01/2023",
    mainTech: ["ReactJS"],
    link: "/experience/timeaccesshrms",
    work: "timeaccesshrms",
    icon: <Icon icon={reactIcon} />,
    technologies: [
      "React Native",
      "TailwindCSS",
      "ExpressJS",
      "PostgreSQL",
      "ExpressJS",
      "JSReport",
      "REST API",
      "Sequelize",
      "CASL",
      "NodeJS",
    ],
    projectName: "Human Resource Management System (HRMS)",
    imgs: [
      {
        src: "../images/hrms/1.png",
        heading: "",
        description: "",
      },
      {
        src: "../images/hrms/2.png",
        heading: "",
        description: "",
      },
      {
        src: "../images/hrms/6.png",
        heading: "Organisation Chart",
        description: "Built from scratch to meet design requirements",
      },
      {
        src: "../images/hrms/3.png",
        heading: "",
        description: "",
      },
      {
        src: "../images/hrms/4.png",
        heading: "",
        description: "",
      },
      {
        src: "../images/hrms/5.png",
        heading: "",
        description: "",
      },
    ],
    description:
      "Development of an entire HRMS that features almost eight key modules: Personnel, Time Attendance, Payroll, Leaves, Appraisal, Benefits, Claims, and Devices. I build the web and mobile(iOS/ Android) applications as the primary developer. The e-scheduling and HRMS grants, two psg government grants that were eventually approved, are another goal of the job.",
    contributionPoints: [
      "Develop the web app and mobile app with ReactJS and React Native",
      "Translate mock-ups/designs into the front-end",
      "Implement Restful Apis, reports generation, backend with Expressjs/NodeJs",
      "Fix production issues in AWS, Jenkins, Redis, etc.",
    ],

    detailsTech: [
      "ReactJS",
      "React Native",
      "Tailwind CSS",
      "Headless UI Components",
      "GPS & Google Maps",
      "Framer Motion",
      "ExpressJS (NodeJS)",
      "PostgreSQL",
      "Sequelize",
      "JSReport",
      "CASL",
      "Docker",
      "Jenkins",
      "AWS",
    ],
  },
  {
    company: "IHiS",
    title: "System Analyst",
    link: "/ihis",
    years: "09/2020 - 12/2020",
    mainTech: [".NET"],
    icon: <Icon icon={dotnetIcon} />,
    technologies: ["Allscripts"],
  },
  {
    company: "Plateable",
    title: "Mobile Developer",
    link: "/plateable",
    years: "04/2020 - 07/2020",
    mainTech: ["React Native"],
    icon: <Icon icon={reactIcon} />,
    technologies: ["JavaScript", "GraphQL", "Firebase"],
  },
  {
    company: "Smart Cookies",
    link: "/smartcookies",
    title: "Software Developer",
    years: "06/2019 - 04/2020",
    mainTech: ["React Native"],
    icon: <Icon icon={reactIcon} />,
    technologies: ["ReactJS", "JavaScript", "NodeJS", "Firebase"],
  },
  {
    company: "Amaris.AI",
    link: "/amaris",
    title: "Software Engineer",
    years: "06/2018 - 05/2019",
    mainTech: ["Python"],
    icon: <Icon icon={pythonIcon} />,

    technologies: [
      "ReactJS",
      "VueJS",
      "JavaScript",
      "Bootstrap",
      "Material",
      "Pandas",
      "Pytorch",
      "Tensorflow",
      "Numpy",
    ],
  },
  {
    company: "Avanade Asia",
    link: "/avanade",

    title: "Software Engineer",
    years: "06/2017 - 05/2018",
    mainTech: [".NET"],
    icon: <Icon icon={dotnetIcon} />,
    technologies: ["C#", "SQL", "JavaScript", "Sitecore"],
  },
];

const Experience = (props) => {
  const works = experiences.map(function (work, i) {
    const technologies = work.technologies;
    const mainTechnologies = work.mainTech;
    const icon = work.icon;

    const mainTech = mainTechnologies.map((technology, i) => {
      return (
        <div
          className="rounded-full text-xs bg-indigo-600 text-white font-sans font-medium py-1 px-2"
          key={i}
        >
          {technology}
        </div>
      );
    });
    const tech = technologies.map((technology, i) => {
      return (
        <div
          className="mx-[2px] my-[2px] rounded-full text-[11px] bg-indigo-600 text-white tracking-tight font-mono font-medium py-1 px-2"
          key={i}
        >
          {technology}
        </div>
      );
    });
    return (
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date={work.years}
        iconStyle={{
          background: "#F1F1F1",
          color: "#fff",
          textAlign: "center",
        }}
        icon={icon}
        key={i}
        dateClassName="timeline-date"
      >
        <div className="flex flex-row justify-between mb-2">
          <div>{mainTech}</div>
          <div>
            <a
              href={work.link || "/"}
              className="text-base font-semibold text-blue-500 underline hover:text-blue-300"
            >
              More Details
            </a>
          </div>
        </div>

        <h3 className="text-lg font-medium font-sans leading-tight">
          {work.title}
        </h3>
        <h4 className="text-base font-medium font-sans leading-tight">
          {work.company}
        </h4>
        <div className="flex flex-row flex-wrap -mx-[2px] mt-6">{tech}</div>
      </VerticalTimelineElement>
    );
  });

  return (
    <section id="resume" className="pb-5 bg-zinc-300">
      <h1 className="text-white text-lg font-bold text-center uppercase tracking-[3px] pb-[5%] pt-[5%]">
        <span className="text-gray-700">Experienece</span>
      </h1>

      <div className="col-md-8 mx-auto">
        <VerticalTimeline>
          {works}
          <VerticalTimelineElement
            iconStyle={{
              background: "#F1F1F1",
              color: "#fff",
              textAlign: "center",
            }}
            icon={
              <i className="fas fa-hourglass-start text-2xl mt-[25%] text-slate-500"></i>
            }
          />
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default Experience;
