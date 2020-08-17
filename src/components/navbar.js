import React from "react";
import phoneIcon from "../img/phone-icon.png";
import Scroll from "react-scroll";

export const Navbar = () => {
  const ScrolLink = Scroll.Link;
  return (
    <nav className="main-nav">
      <ul>
        <li>
          <a href="/" className="nav-link">
            Главная
          </a>
        </li>
        <li>
          <ScrolLink
            to="partners"
            spy={true}
            smooth={true}
            duration={500}
            className="nav-link"
            activeClass="nav-link"
          >
            Партнеры
          </ScrolLink>
        </li>
        <li>
          <ScrolLink
            to="contact"
            spy={true}
            smooth={true}
            duration={500}
            className="nav-link"
            activeClass="nav-link"
          >
            Контакты
          </ScrolLink>
        </li>
        <li>
          <a href="tel:8-903-123-45-67" className="phone-link">
            8-903-123-45-67 <img src={phoneIcon} alt="" />{" "}
          </a>
        </li>
      </ul>
    </nav>
  );
};
