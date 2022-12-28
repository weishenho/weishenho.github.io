import React from "react";
// import Carousel from "react-bootstrap/Carousel";
import { useLocation } from "react-router-dom";

const Avanade = (props) => {
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
                <li>Involve in projects such as Custom’s NTP and JTC</li>
                <li>Utilize Sitecore CMS for front-end development</li>
                <li>Implement front-end logic with javascript with jQuery</li>
                <li>Implement change requests</li>
                <li>
                  Write complex SQL querys and stored-prods based on
                  requirements
                </li>
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
            <div className="d-flex">C#/.Net</div>
            <div className="d-flex">SQL</div>
            <div className="d-flex">SiteCore</div>
            <div className="d-flex">Javascript</div>
            <div className="d-flex">jQuery</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Avanade;
