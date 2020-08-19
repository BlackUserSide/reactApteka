import React from "react";

import axios from "axios";

import "./App.sass";
import { Header } from "./components/header";
import Logo from "./img/Logo.png";
import { MainContent } from "./components/mainContent";
import { FirstSection } from "./components/firstSection";
import { SecondSection } from "./components/secondSection";
import { ThirdSection } from "./components/thirdSection";
import { FourthSection } from "./components/fourthSection";
import { FormSection } from "./components/formSection";
import { PartnersSection } from "./components/partnersSection";
import { Footer } from "./components/footer";
import { ParnterColumn } from "./components/parnterColumn";
import { Element } from "react-scroll";
export const App = () => {
  let screen = document.body.clientWidth;
  screen = Number(screen);
  let content = null;
  if (screen < 1010) {
    content = <ParnterColumn />;
  } else {
    content = <PartnersSection />;
  }
  const onSumbit = (data) => {
    const projectName = "PMI";
    const mail = "nesmserg@gmail.com";
    const form = "callback";
    const url = `/mail.php`;
    axios
      .post(url, {
        project_name: projectName,
        admin_email: mail,
        form_subject: form,
        name: data.name,
        phone: data.phone,
        mail: data.mail,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <div className="main-app-content">
        <Header id="main" logo={Logo} />
        <MainContent />
        <Header id="content" logo={Logo} />
        <Element id="home" name="home">
          <FirstSection />
          <SecondSection />
          <ThirdSection />
          <FourthSection />
          <FormSection onSumbit={onSumbit} />
        </Element>

        <Element id="partners" name="partners">
          {content}
        </Element>
        <Element id="contact" name="contact">
          <Footer logo={Logo} />
        </Element>
      </div>
    </>
  );
};
