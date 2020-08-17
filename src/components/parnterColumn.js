import React from "react";
import img1 from "../img/partners/image 1.png";
import img2 from "../img/partners/image 2.png";
import img3 from "../img/partners/image 3.png";
import img4 from "../img/partners/image 4.png";
import img5 from "../img/partners/image 5.png";

export const ParnterColumn = () => {
  return (
    <div className="partner-column">
      <h1 className="h1">Наши партнеры</h1>
      <img src={img1} alt="" />
      <img src={img4} alt="" />
      <img src={img3} alt="" />
      <img src={img2} alt="" />
      <img src={img5} alt="" />
    </div>
  );
};
