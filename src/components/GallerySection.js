import React from "react";
import mee from "../img/mee.jpeg";
import mee2 from "../img/mee2.jpg";
import mee3 from "../img/mee3.jpg";
import mee4 from "../img/mee4.jpg";
import mee5 from "../img/mee5.jpg";
import mee6 from "../img/mee6.jpg";
import mee7 from "../img/mee7.jpg";
import mee8 from "../img/mee8.jpeg";
import mee9 from "../img/mee9.jpg";
import mee10 from "../img/mee10.jpg";
import mee11 from "../img/mee11.jpg";
import mee12 from "../img/mee12.jpg";
import mee13 from "../img/mee13.jpg";
import mee14 from "../img/mee14.jpg";

import styled from "styled-components";
import Masonry from "react-masonry-css";

const GallerySection = () => {
  const breakPoints = {
    default: 3,
    800: 2,
    700: 2,
    500: 1,
  };
  return (
    <Masonry
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column"
      breakpointCols={breakPoints}
    >
      <div className="grid-item">
        <img className="img1" src={mee} alt="" />
      </div>
      <div className="grid-item2">
        <img className="img2" src={mee2} alt="" />
      </div>
      <div className="grid-item">
        <img className="img3" src={mee3} alt="" />
      </div>
      <div className="grid-item2">
        <img className="img4" src={mee4} alt="" />
      </div>
      {
        <div className="grid-item">
          <img className="img5" src={mee5} alt="" />
        </div>
      }
      {
        <div className="grid-item2">
          <img className="img6" src={mee6} alt="" />
        </div>
      }
      <div className="grid-item">
        <img className="img7" src={mee7} alt="" />
      </div>
      {/* <div className="grid-item2">
        <img className="img8" src={mee8} alt="" />
      </div> */}

      <div className="grid-item">
        <img className="img9" src={mee14} alt="" />
      </div>

      <div className="grid-item2">
        <img className="img10" src={mee10} alt="" />
      </div>

      <div className="grid-item">
        <img className="img11" src={mee11} alt="" />
      </div>

      <div className="grid-item2">
        <img className="img12" src={mee12} alt="" />
      </div>

      <div className="grid-item">
        <img className="img13" src={mee13} alt="" />
      </div>

      {/* <div className="grid-item2">
        <img className="img14" src={mee14} alt="" />
      </div> */}
    </Masonry>
  );
};

export default GallerySection;
