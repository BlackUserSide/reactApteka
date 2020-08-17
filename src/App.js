import React from "react";
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
  return (
    <>
      <div className="main-app-content">
        <Header id="main" logo={Logo} />
        <MainContent />
        <Header id="content" logo={Logo} />
        <FirstSection />
        <SecondSection />
        <ThirdSection />
        <FourthSection />
        <FormSection />
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
