import React from "react";
import { Navbar } from "./navbar";
import { ContactFooter } from "./contactFooter";

export const Footer = ({ logo }) => {
  return (
    <footer className="site-footer">
      <div className="logo-wrapper">
        <img src={logo} alt="" />
      </div>
      <div className="nav-bar-wrapper">
        <Navbar />
      </div>
      <ContactFooter />
    </footer>
  );
};
