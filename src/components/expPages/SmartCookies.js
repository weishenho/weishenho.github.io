import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { useLocation } from "react-router-dom";

const SmartCookies = (props) => {
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
      {/* <div className="row mb-3">
        <div className="col ">
          <div style={{ display: "block" }} className="mx-auto">
            <div className="prjName">Geofence App</div>
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
      <div className="row mb-3">
        <div className="col ">
          <div style={{ display: "block" }} className="mx-auto">
            <div className="prjName">School Parents Community App</div>
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
      </div> */}
      <div className="row">
        <p className="job-desc">
          <p>
            I worked on the backends and two mobile apps for this company. The
            apps include a geofence app to guarantee student safety inside the
            school and a parents' community app.
          </p>
          <p>
            Each student is given a bluetooth beacon card, which often transmits
            a signal. As a result, bluetooth receivers are installed in
            strategic locations across campus to track student mobility. These
            information are processed and store in firebase, therefore the app
            communicate with it and present the data in a insightful manner.
            <br></br>
            More info about the app here:<br></br>
            <a href="https://apps.apple.com/us/app/geofence-smart-cookies/id1479109613?platform=iphone">
              https://apps.apple.com/us/app/geofence-smart-cookies/id1479109613?platform=iphone
            </a>
            <br></br>
            <a href="https://appadvice.com/app/geofence-smart-cookies/1479109613">
              https://appadvice.com/app/geofence-smart-cookies/1479109613
            </a>
          </p>
          <p>
            The parents community app is for the parents of the school's
            students, as its name suggests. Its main objective is to display the
            school's forthcoming events. Hence, the app allows the event to be
            posted by authorised personnels.<br></br>
            More info about the app here:<br></br>
            <a href="https://apps.apple.com/us/app/stamford-parent-sg/id1249949678?platform=iphone">
              https://apps.apple.com/us/app/stamford-parent-sg/id1249949678?platform=iphone
            </a>
          </p>
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
                  Develop mobile apps with React Native, firebase & google
                  cloud.
                </li>
                <li>Develop geofence app with bluetooth beacons</li>
                <li>Build the mobile app based on the mock up designs</li>
                <li>
                  Build a customizable community app with news feed, events &
                  chat.
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
            <div className="d-flex">React Native + Web</div>
            <div className="d-flex">Firebase</div>
            <div className="d-flex">Cloud Functions</div>
            <div className="d-flex">Google Sheets</div>
            <div className="d-flex">Bluetooth beacons</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmartCookies;
