import React from "react";

const DATA = {
  basic_info: {
    name: "Wei Shen",
    titles: ["Software Engineer"],
    social: [
      {
        name: "github",
        url: "https://github.com/weishenho",
        class: "fab fa-github",
      },
      {
        name: "linkedin",
        url: "https://www.linkedin.com/in/wei-shen-ho-91659115a",
        class: "fab fa-linkedin",
      },
    ],
    image: "myProfile.jpg",
  },
};

const Footer = () => {
  const networks = DATA.basic_info.social.map(function (network) {
    return (
      <span key={network.name} className="m-4">
        <a href={network.url} target="_blank" rel="noopener noreferrer">
          <i className={network.class}></i>
        </a>
      </span>
    );
  });

  return (
    <footer className="bg-zinc-800">
      <div className="container mx-auto">
        <div className="flex flex-row justify-between items-center">
          <div className=" social-links">{networks}</div>

          <div className="">
            <div className="copyright py-4 text-center">
              <div className="container">
                <small>Copyright &copy; {DATA.basic_info.name}</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
