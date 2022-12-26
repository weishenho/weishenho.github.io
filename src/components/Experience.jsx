import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Badge from "react-bootstrap/Badge";
import { Icon } from "@iconify/react";

import reactIcon from "@iconify/icons-logos/react";
import dotnetIcon from "@iconify/icons-logos/dotnet";
import pythonIcon from "@iconify/icons-logos/python";
import { Link } from "react-router-dom";

const experiences = [
  {
    company: "Time access international",
    title: "Senior Software Engineer",
    years: "01.2021 - 01.2023",
    mainTech: ["ReactJS"],
    link: "/timeaccesshrms",
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
  },
  {
    company: "IHiS",
    title: "System Analyst",
    link: "/ihis",
    years: "09.2020 - 12.2020",
    mainTech: [".NET"],
    icon: <Icon icon={dotnetIcon} />,
    technologies: ["Allscripts"],
  },
  {
    company: "Plateable",
    title: "Mobile Developer",
    link: "/plateable",
    years: "04.2020 - 07.2020",
    mainTech: ["React Native"],
    icon: <Icon icon={reactIcon} />,
    technologies: ["JavaScript", "GraphQL", "Firebase"],
  },
  {
    company: "Smart Cookies",
    link: "/smartcookies",
    title: "Software Developer",
    years: "06.2019 - 04.2020",
    mainTech: ["React Native"],
    icon: <Icon icon={reactIcon} />,
    technologies: ["ReactJS", "JavaScript", "NodeJS", "Firebase"],
  },
  {
    company: "Amaris.AI",
    link: "/amaris",
    title: "Software Engineer",
    years: "06.2018 - 05.2019",
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
    years: "06.2017 - 05.2018",
    mainTech: [".NET"],
    icon: <Icon icon={dotnetIcon} />,
    technologies: ["C#", "SQL", "JavaScript", "Sitecore"],
  },
];

const Experience = (props) => {

  var sectionName = "Experience";
  var works = experiences.map(function (work, i) {
    const technologies = work.technologies;
    const mainTechnologies = work.mainTech;
    const icon = work.icon;

    var mainTech = mainTechnologies.map((technology, i) => {
      return (
        <Badge pill className="main-badge mr-2 mb-2" key={i}>
          {technology}
        </Badge>
      );
    });
    var tech = technologies.map((technology, i) => {
      return (
        <Badge pill className="experience-badge mr-2 mb-2" key={i}>
          {technology}
        </Badge>
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
      // onTimelineElementClick={() => {
      //   console.log({ work });
      // }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <div style={{ textAlign: "left", marginBottom: "4px" }}>
            {mainTech}
          </div>
          <div style={{ textAlign: "left", marginBottom: "4px" }}>
            <Link
              to={work.link || "/"}
              state={{ years: work.years, company: work.company }}
              style={{ fontSize: 14, fontWeight: 500 }}
            >
              More Details
            </Link>
          </div>
        </div>

        <h3
          className="vertical-timeline-element-title"
          style={{ textAlign: "left" }}
        >
          {work.title}
        </h3>
        <h4
          className="vertical-timeline-element-subtitle"
          style={{ textAlign: "left" }}
        >
          {work.company}
        </h4>
        <div style={{ textAlign: "left", marginTop: "15px" }}>{tech}</div>
      </VerticalTimelineElement>
    );
  });


  return (
    <section id="resume" className="pb-5">
      <div className="col-md-12 mx-auto">
        <div className="col-md-12">
          <h1 className="section-title" style={{ color: "black" }}>
            <span className="text-black" style={{ textAlign: "center" }}>
              {sectionName}
            </span>
          </h1>
        </div>
      </div>
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
              <i className="fas fa-hourglass-start mx-auto experience-icon"></i>
            }

          />
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default Experience;
