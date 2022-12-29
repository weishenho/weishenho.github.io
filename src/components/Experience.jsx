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
    link: "/experience/ihis",
    work: "ihis",
    years: "09/2020 - 12/2020",
    mainTech: [".NET"],
    icon: <Icon icon={dotnetIcon} />,
    technologies: ["Allscripts"],
    projectName: "",
    contributionPoints: [
      "Liaise with internal and external stakeholders to identify system requirements",
      "Implement Change requests based on user requirements",
      "Build the mobile app based on the mock up designs",
      "Support users on change control and system updates.",
    ],
    detailsTech: ["C#/.Net", "SQL", "Allscripts  Software"],
  },
  {
    company: "Plateable",
    title: "Mobile Developer",
    link: "/experience/plateable",
    work: "plateable",
    years: "04/2020 - 07/2020",
    mainTech: ["React Native"],
    icon: <Icon icon={reactIcon} />,
    technologies: ["JavaScript", "GraphQL", "Firebase"],
    projectName: "Human Resource Management System (HRMS)",
    imgs: [
      {
        src: "../images/plateable/1.jpeg",
        heading: "",
        description: "",
      },
      {
        src: "../images/plateable/2.jpeg",
        heading: "",
        description: "",
      },
      {
        src: "../images/plateable/3.jpeg",
        heading: "",
        description: "",
      },
      {
        src: "../images/plateable/4.jpeg",
        heading: "",
        description: "",
      },
    ],
    description:
      "In order to capitalize on the closed circuit situation, where people are urged to stay at home and outdoor movement is constrained, Plateable, a food delivery startup, was founded during the pandemic. The app's ability to accept orders from numerous restaurants and regardless of distance on the island is one of its distinctive selling points. For delivery services, the app communicates with lalamove; integration is accomplished via API. I was the primary developer for the react native based mobile vendor app. The app must adhere to the UIUX design guidelines and use graphql to integrate with the backend. Additionally, it was finished in less than three months. \n More info about the app here: https://appadvice.com/app/plateable-vendor-app/1526287725",
    contributionPoints: [
      "Develop food delivery app with React Native and Apollo GraphQL",
      "Integrate with google maps for tracking of delivery driver",
      "Build the mobile app based on the mock up designs",
      "Liaise with backend developer for seamless integration.",
    ],
    detailsTech: ["React Native", "Google Maps", "Apollo GraphQL", "Firebase"],
  },
  {
    company: "Smart Cookies",
    link: "/experience/smartcookies",
    work: "smartcookies",
    title: "Software Developer",
    years: "06/2019 - 04/2020",
    mainTech: ["React Native"],
    icon: <Icon icon={reactIcon} />,
    technologies: ["ReactJS", "JavaScript", "NodeJS", "Firebase"],
    projectName: "Human Resource Management System (HRMS)",
    // imgs: [],
    description:
      "I worked on the backends and two mobile apps for this company. The apps include a geofence app to guarantee student safety inside the school and a parents' community app. Each student is given a bluetooth beacon card, which often transmits a signal. As a result, bluetooth receivers are installed in strategic locations across campus to track student mobility. These information are processed and store in firebase, therefore the app communicate with it and present the data in a insightful manner.\n More info about the app here:\n https://apps.apple.com/us/app/geofence-smart-cookies/id1479109613?platform=iphone\n https://appadvice.com/app/geofence-smart-cookies/1479109613\n \n The parents community app is for the parents of the school's students, as its name suggests. Its main objective is to display the school's forthcoming events. Hence, the app allows the event to be posted by authorised personnels.\n More info about the app here:\n https://apps.apple.com/us/app/stamford-parent-sg/id1249949678?platform=iphone\n",
    contributionPoints: [
      "Develop mobile apps with React Native, firebase & google cloud.",
      "Develop geofence app with bluetooth beacons",
      "Build the mobile app based on the mock up designs",
      "Build a customizable community app with news feed, events & chat",
    ],
    detailsTech: [
      "React Native",
      "Firebase",
      "Cloud Functions",
      "Google Sheets",
      "Bluetooth beacons",
    ],
  },
  {
    company: "Amaris.AI",
    link: "/experience/amaris",
    work: "amaris",
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
    projectName: "Human Resource Management System (HRMS)",
    imgs: [],
    description: "",
    contributionPoints: [
      "Work alongside data scientists to build applications that interact with their ML models/bots.",
      "Develop Web frontend for various AI projects using VueJS.",
      "Build Financial Dashboards to facilitate alternative data analysis",
      "Automate processing and aggregation of large amounts of financial data and with python, which was previously done manually.",
      "Setup and test open-source ML projects",
    ],
    detailsTech: [
      "Python",
      "Pandas",
      "Numpy",
      "Pytorch",
      "Tensorflow",
      "OpenCV",
      "Javascript",
    ],
  },
  {
    company: "Avanade Asia",
    link: "/experience/avanade",
    work: "avanade",
    title: "Software Engineer",
    years: "06/2017 - 05/2018",
    mainTech: [".NET"],
    icon: <Icon icon={dotnetIcon} />,
    technologies: ["C#", "SQL", "JavaScript", "Sitecore"],
    projectName: "Human Resource Management System (HRMS)",
    imgs: [],
    description: "",
    contributionPoints: [
      "Involve in projects such as Custom’s NTP and JTC",
      "Utilize Sitecore CMS for front-end development",
      "Implement front-end logic with javascript with jQuery",
      "Implement change requests",
      "Write complex SQL querys and stored-prods based on requirements",
    ],
    detailsTech: [
      "C#/.Net",
      "SQL",
      "SiteCore",
      "Javascript",
      "OpenCV",
      "jQuery",
    ],
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
