import React from "react";
import Carousel from "react-bootstrap/Carousel";
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
            <div className="prjName">Plateable Vendor App</div>
            <Carousel variant="dark">
              <Carousel.Item>
                <img
                  className="d-block "
                  src="images/plateable/1.jpeg"
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h3></h3>
                  <p></p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block"
                  src="images/plateable/2.jpeg"
                  alt="Second slide"
                />
                <Carousel.Caption>
                  <h3></h3>
                  <p></p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block"
                  src="images/plateable/3.jpeg"
                  alt="Third slide"
                />
                <Carousel.Caption>
                  <h3></h3>
                  <p></p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block"
                  src="images/plateable/4.jpeg"
                  alt="Third slide"
                />
                <Carousel.Caption>
                  <h3></h3>
                  <p></p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </div>
      <div className="row">
        <p className="job-desc">
          In order to capitalize on the closed circuit situation, where people
          are urged to stay at home and outdoor movement is constrained,
          Plateable, a food delivery startup, was founded during the pandemic.
          The app's ability to accept orders from numerous restaurants and
          regardless of distance on the island is one of its distinctive selling
          points. For delivery services, the app communicates with lalamove;
          integration is accomplished via API. I was the primary developer for
          the react native based mobile vendor app. The app must adhere to the
          UIUX design guidelines and use graphql to integrate with the backend.
          Additionally, it was finished in less than three months. <br />
          More info about the app here:
          <br />
          <a href="https://appadvice.com/app/plateable-vendor-app/1526287725">
            https://appadvice.com/app/plateable-vendor-app/1526287725
          </a>
        </p>
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
                  Develop food delivery app with React Native and Apollo GraphQL
                </li>
                <li>
                  Integrate with google maps for tracking of delivery driver
                </li>
                <li>Build the mobile app based on the mock up designs</li>
                <li>Liaise with backend developer for seamless integration.</li>
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
            <div className="d-flex">React Native</div>
            <div className="d-flex">Google Maps</div>
            <div className="d-flex">Apollo GraphQL</div>
            <div className="d-flex">Firebase</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plateable;
