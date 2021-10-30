import React from "react";
import me from "../img/dualight3.jpg";
import flower from "../img/flower.jpg";
import flower2 from "../img/flower2.jpg";
import green2 from "../img/green2.jpg";
import ParallaxEffect from "./ParallaxBackground";

const AboutSection = () => {
  return (
    // navbar
    <div className="wrapper">
      <div className="container">
        <nav className="navbar">
          <div className="navbar-container">
            <div className="title"> by Zoli </div>{" "}
            <div className="site-type"> pOrToFoLiO </div>{" "}
            <div className="site-year"> 2021 </div>{" "}
          </div>{" "}
        </nav>
        {/* divider */}
        <div className="divider"></div>
        {/* header */}
        <div className="header">
          <div className="header-container">
            <h1>
              Tazlo Zoli
              <br />
              FrontEnd
              <br />
              &nbsp;Developer
            </h1>
          </div>
        </div>
        {/* image */}
        <div className="hero-image">
          <div className="hero-image-container">
            <img src={me} alt="" />
          </div>
        </div>
        {/* whitespace */}
        <div className="whitespace"></div>
        <div className="section-header">
          <div className="section-header-container">
            <div className="section-title">About</div>
            <div className="section-order">002</div>
          </div>
        </div>
        <div className="divider"></div>

        {/* about me */}
        <section className="about">
          <div className="about-container">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem minus
              nulla adipisci impedit eum culpa repellat tempore obcaecati
              aperiam fugiat. Maxime numquam omnis mollitia placeat?
            </p>

            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque,
              voluptatum adipisci. Earum amet quod laudantium officia tempora
              sapiente voluptatem dignissimos!
            </p>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id,
              facere.
            </p>
          </div>
        </section>

        <div className="whitespace"></div>

        {/*images  */}
        <div className="section-header">
          <div className="section-header-container">
            <div className="section-title">Photography</div>
            <div className="section-order">003</div>
          </div>
        </div>

        <div className="divider"></div>
        <ParallaxEffect />
      </div>{" "}
    </div>
  );
};

export default AboutSection;
