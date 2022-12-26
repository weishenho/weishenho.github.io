import React, { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Carousel } from "flowbite-react";

const ProjectDetailsModal = (props) => {
  // if (props.data) {
  const technologies = props.data.technologies;
  const images = props.data.images;
  const title = props.data.title;
  const description = props.data.description;
  const url = props.data.url;

  const tech = (technologies || []).map((icons, i) => {
    return (
      <li className="list-inline-item mx-4 my-2" key={i}>
        <span>
          <div className="text-center">
            <i className={icons.class} style={{ fontSize: "300%" }}>
              <p className="text-center" style={{ fontSize: "30%" }}>
                {icons.name}
              </p>
            </i>
          </div>
        </span>
      </li>
    );
  });

  const img = (images || []).map((elem, i) => {
    return <div key={i} data-src={elem} />;
  });

  const options = {
    activeItemPosition: 1,
    interval: 15000,

    indicators: {
      activeClasses: "bg-gray-800",
      inactiveClasses: "bg-gray-800/50 hover:bg-gray-800",
    },
  };
  return (
    <Transition appear show={props.show} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={props.onHide}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>
        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-3xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <span onClick={props.onHide} className="modal-close">
                  <i className="fas fa-times fa-3x close-icon"></i>
                </span>
                <div className="col-md-12">
                  <div
                    className={`${"col-md-10"} mx-auto`}
                    style={{ paddingBottom: "50px" }}
                  >
                    <div className="slider-tab">
                      <span
                        className="iconify slider-iconfiy"
                        data-icon="emojione:red-circle"
                        data-inline="false"
                        style={{ marginLeft: "5px" }}
                      ></span>{" "}
                      &nbsp;{" "}
                      <span
                        className="iconify slider-iconfiy"
                        data-icon="twemoji:yellow-circle"
                        data-inline="false"
                      ></span>{" "}
                      &nbsp;{" "}
                      <span
                        className="iconify slider-iconfiy"
                        data-icon="twemoji:green-circle"
                        data-inline="false"
                      ></span>
                    </div>
                    <div className="h-[660px]">
                      <Carousel {...options}>
                        {(images || []).map((elem, i) => {
                          return (
                            <div className="bg-slate-700 w-full pb-[60px]">
                              <img
                                key={i}
                                src={elem}
                                className="object-contain h-[600px] mx-auto"
                              />
                            </div>
                          );
                        })}
                      </Carousel>
                    </div>
                  </div>
                  <div className="col-md-10 mx-auto">
                    <h3 className="py-3 text-xl font-semibold">{title}</h3>
                    <p className="modal-description">{description}</p>
                    {url ? (
                      <h4 className="mb-4 font-semibold">
                        More details here:{" "}
                        <a
                          href={url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-medium text-emerald-600 hover:underline"
                        >
                          {url}
                          <i
                            className="fas fa-external-link-alt"
                            style={{ marginLeft: "10px" }}
                          ></i>
                        </a>
                      </h4>
                    ) : null}

                    <ul className="flex flex-row flex-wrap justify-center ">
                      {tech}
                    </ul>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default ProjectDetailsModal;
