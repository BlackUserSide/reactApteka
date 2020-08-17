import React from "react";
import { Navbar } from "./navbar";

export const Header = ({ logo, id }) => {
  return (
    <header className="main-header" id={id}>
      <div className="logo-wrapper">
        <img src={logo} alt="" />
      </div>
      <div className="nav-bar-wrapper">
        <Navbar />
      </div>
    </header>
  );
};
