import React from "react";
// import Carousel from "react-bootstrap/Carousel";
import { useLocation } from "react-router-dom";

const Plateable = (props) => {
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
            <div className="prjName">System Analyst</div>
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
                  Liaise with internal and external stakeholders to identify
                  system requirements
                </li>
                <li>Implement Change requests based on user requirements</li>
                <li>Build the mobile app based on the mock up designs</li>
                <li>Support users on change control and system updates</li>
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
            <div className="d-flex">Allscripts Software</div>
            <div className="d-flex">C#/.Net</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plateable;
