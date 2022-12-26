import React, { Component } from "react";
// import ProjectDetailsModal from "./ProjectDetailsModal";

const PROJECTS = [
  {
    title: "SAGAN-with-relativistic",
    startDate: "2019",
    description:
      "Improve a GAN, a machine learning technique, to generate new images.\nA pytorch implmentation of SAGAN (https://arxiv.org/abs/1805.08318) with relativistic loss (https://arxiv.org/abs/1807.00734). The main difference here is that we replace the hinge loss used in the SAGAN with relativistic loss.",
    images: [
      "https://camo.githubusercontent.com/fab92924a9a4fa85b20714aecb1381bd0c0a81f0acfa473a13c20b989c662133/687474703a2f2f696d672e796f75747562652e636f6d2f76692f2d55704551347650556e672f302e6a7067",
    ],
    url: "https://github.com/weishenho/SAGAN-with-relativistic",
    technologies: [
      {
        class: "devicon-python-plain",
        name: "Python",
      },
      {
        class: "devicon-pytorch-plain",
        name: "PyTorch",
      },
    ],
  },
  {
    title: "Dino game bot",
    startDate: "2017",
    description:
      "Program and train a bot to play the chrome dino game on its own, without human intervention, using reinforcement learning",
    images: ["images/portfolio/dino/dino.PNG"],
    url: "https://youtu.be/GhMUf99G_Zo",
    technologies: [
      {
        class: "devicon-python-plain",
        name: "Python",
      },
      {
        class: "devicon-tensorflow-original",
        name: "Tensorflow",
      },
    ],
  },
  {
    title: "Antimicrobial Guidelines (CGH)",
    startDate: "2012",
    description:
      "This Android mobile app provides the most current antibiotic guidelines for health-care professionals employed at Changi General Hospital, Singapore. I gathered specifications from the CGH doctor in charge of the app and developed its main features. I also created a CRUD web application to update the data in the android app.",
    images: [
      "images/portfolio/cgh/1.jpg",
      "images/portfolio/cgh/2.jpg",
      "images/portfolio/cgh/3.jpg",
      "images/portfolio/cgh/4.jpg",
      "images/portfolio/cgh/5.jpg",
      "images/portfolio/cgh/6.jpg",
      "images/portfolio/cgh/7.jpg",
    ],
    url: "https://m.apkpure.com/antimicrobial-guidelines-cgh/com.sgh.antimicrobialo",
    technologies: [
      {
        class: "devicon-android-plain",
        name: "Android",
      },
      {
        class: "devicon-java-plain",
        name: "Java",
      },
      {
        class: "devicon-sqlite-plain",
        name: "SQLite",
      },
    ],
  },
];
class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deps: {},
      detailsModalShow: false,
    };
  }

  render() {
    let detailsModalShow = (data) => {
      this.setState({ detailsModalShow: true, deps: data });
    };

    let detailsModalClose = () => this.setState({ detailsModalShow: false });

    var sectionName = "projects";
    var projects = PROJECTS.map(function (projects) {
      return (
        <div
          key={projects.title}
          className="portfolio-item cursor-pointer"
          onClick={() => detailsModalShow(projects)}
        >
          <div>
            <img
              src={projects.images[0]}
              alt="projectImages"
              className="h-[230px] object-contain object-center mx-auto"
            />
            <span className="project-date">{projects.startDate}</span>
            <br />
            <p className="project-title mt-3 w-[80%] mx-auto">{projects.title}</p>
          </div>
        </div>
      );
    });

    return (
      <section id="portfolio">
        <h1 className="text-white text-lg font-bold text-center uppercase tracking-[3px] pb-[5%] pt-[5%]">
          <span className="text-gray-700">{sectionName}</span>
        </h1>

        <div className="mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-2 grid-flow-row">
          {projects}
        </div>

        {/* <ProjectDetailsModal
            show={this.state.detailsModalShow}
            onHide={detailsModalClose}
            data={this.state.deps}
          /> */}
      </section>
    );
  }
}

export default Projects;
