import React from "react";
import { Carousel } from "flowbite-react";

const HRMS = ({ data }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col job-title">
          <p>
            {data.company} {data.years ? `(${data.years})` : ""}
          </p>
        </div>
      </div>
      <div className="row mb-3">
        <div className="col ">
          <div style={{ display: "block" }} className="mx-auto">
            <div className="prjName">{data.projectName}</div>
            {Array.isArray(data.imgs) && data.imgs.length > 0 ? (
              <Carousel>
                {(data.imgs || []).map((elem, i) => {
                  return (
                    <div className="bg-slate-700 w-full pb-[60px]">
                      <img
                        key={elem.src}
                        src={elem.src}
                        className="object-contain h-[600px] mx-auto"
                      />
                    </div>
                  );
                })}
              </Carousel>
            ) : null}

            {/* <Carousel variant="dark" fade>
              <Carousel.Item style={{ height: 615 }}>
                <img
                  className="d-block "
                  style={{ height: 615, width: 320 }}
                  src="images/hrms/1.png"
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h3></h3>
                  <p></p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item style={{ height: 615 }}>
                <img
                  className="d-block"
                  style={{ height: 615, width: 320 }}
                  src="images/hrms/2.png"
                  alt="Second slide"
                />
                <Carousel.Caption>
                  <h3></h3>
                  <p></p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item style={{ height: 615 }}>
                <img
                  className="d-block"
                  src="images/hrms/6.png"
                  alt="Third slide"
                />
                <Carousel.Caption>
                  <h3>Organisation Chart</h3>
                  <p>Built from scratch to meet design requirements</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item style={{ height: 615 }}>
                <img
                  className="d-block"
                  src="images/hrms/3.png"
                  alt="Third slide"
                  style={{ width: "80%" }}
                />
                <Carousel.Caption>
                  <h3></h3>
                  <p></p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item style={{ height: 615 }}>
                <img
                  className="d-block"
                  src="images/hrms/4.png"
                  alt="Third slide"
                  style={{ width: "80%" }}
                />
                <Carousel.Caption>
                  <h3></h3>
                  <p></p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item style={{ height: 615 }}>
                <img
                  className="d-block"
                  src="images/hrms/5.png"
                  alt="Third slide"
                  style={{ width: "80%" }}
                />
                <Carousel.Caption>
                  <h3></h3>
                  <p></p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel> */}
          </div>
        </div>
      </div>
      <div className="row">{data.description ? data.description : null}</div>
      <div className="row mb-5 job-desc">
        <div className="col-8">
          {data.contributionPoints ? (
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
              <div className="d-flex">{data.contributionPoints}</div>
            </div>
          ) : null}
        </div>
        <div className="col-4">
          {(Array.isArray(data.detailsTech) && data.detailsTech.length) > 0 ? (
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
              {data.detailsTech.map((detail) => {
                return (
                  <div className="d-flex" key={detail}>
                    {detail}
                  </div>
                );
              })}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default HRMS;