import React from "react";
import rvtc from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiences } from "./ExpData";

const { VerticalTimeline, VerticalTimelineElement } = rvtc;

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
