import React from "react";
// import Carousel from "react-bootstrap/Carousel";
import { useLocation } from "react-router-dom";

const Amaris = (props) => {
  const location = useLocation();
  const data = location.state;

  return (
    <div className="container">
      <div className="row">
        <div className="col job-title">
          <p>
            {data.company} ({data.years})
          </p>
        </div>
      </div>
      <div className="row mb-3">
        <div className="col ">
          <div style={{ display: "block" }} className="mx-auto">
            <div className="prjName">Software Engineer</div>
          </div>
        </div>
      </div>

      <div className="row mb-5 job-desc">
        <div className="col-8">
          <div className="d-flex flex-column">
            <div
              className="d-flex"
              style={{
                fontSize: 20,
                fontWeight: "bold",
                letterSpacing: ".1em",
              }}
            >
              RESPONSIBILITIES / CONTRIBUTION
            </div>
            <div className="d-flex">
              <ul>
                <li>
                  Work alongside data scientists to build applications that
                  interact with their ML models/bots.
                </li>
                <li>
                  Develop Web frontend for various AI projects using VueJS.
                </li>
                <li>
                  Build Financial Dashboards to facilitate alternative data
                  analysis
                </li>
                <li>
                  Automate processing and aggregation of large amounts of
                  financial data and with python, which was previously done
                  manually.
                </li>
                <li>Setup and test open-source ML projects</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-4">
          <div className="d-flex flex-column">
            <div
              className="d-flex"
              style={{
                fontSize: 20,
                fontWeight: "bold",
                letterSpacing: ".1em",
              }}
            >
              TECHNOLOGIES
            </div>
            <div className="d-flex">Python</div>
            <div className="d-flex">Pandas</div>
            <div className="d-flex">Numpy</div>
            <div className="d-flex">Pytorch</div>
            <div className="d-flex">Tensorflow</div>
            <div className="d-flex">OpenCV</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Amaris;
