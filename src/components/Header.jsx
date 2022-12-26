import React, { Component } from "react";

const Header = () => {
  const setTheme = () => {
    var dataThemeAttribute = "data-theme";
    var body = document.body;
    var newTheme =
      body.getAttribute(dataThemeAttribute) === "dark" ? "light" : "dark";
    body.setAttribute(dataThemeAttribute, newTheme);
  };

  return (
    <header id="home" className="absolute top-0 left-0 right-0 bg-zinc-200">
      <div className="container mx-auto flex flex-row justify-end py-4 items-center space-x-4 ">
        <a
          href="/"
          className="text-lg tracking-widest font-bold text-slate-500  hover:text-slate-400"
        >
          Home
        </a>

      </div>
    </header>
  );
};

export default Header;
