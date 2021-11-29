import React from "react";
import { Parallax, Background } from "react-parallax";
import trees from "../img/trees.jpg";
import mood from "../img/mood.jpg";
import house from "../img/house.jpg";
import landscape from "../img/landscape.jpg";
import forest from "../img/forest.jpg";
import lake from "../img/lake.jpg";
import { motion } from "framer-motion";

const text = {
  width: "25%",
  height: "10vh",
  padding: 20,
  position: "absolute",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",

  background: "rgba(36, 36, 35, 0.8)",
};

const box = {
  textAlign: "center",
};

const parent = {
  height: "500px",
  marginTop: 20,
  marginBottom: 20,
  background: "#333533",
};

const text_content = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
};

const ParallaxEffect = () => {
  const text_variant = {
    hidden: {
      opacity: 0,
    },

    visible: {
      opacity: 1,
      transition: {
        duration: 1.4,
        delay: 0.6,
      },
    },
  };

  const text_variant2 = {
    hidden: {
      opacity: 0,
    },

    visible: {
      opacity: 1,
      transition: {
        duration: 2.4,
        delay: 1.2,
      },
    },
  };

  const text_variant3 = {
    hidden: {
      opacity: 0,
    },

    visible: {
      opacity: 1,
      transition: {
        duration: 3.6,
        delay: 1.9,
      },
    },
  };

  const text_variant4 = {
    hidden: {
      opacity: 0,
    },

    visible: {
      opacity: 1,
      transition: {
        duration: 4.2,
        delay: 2.8,
      },
    },
  };

  const text_variant5 = {
    hidden: {
      opacity: 0,
    },

    visible: {
      opacity: 1,
      transition: {
        duration: 5.2,
        delay: 3.2,
        duration: 2,
      },
    },
  };

  const textMotionLeft = {
    hidden: {
      opacity: 0,
      x: -400,
    },

    visible: {
      opacity: 1,
      x: -50,
      transition: {
        delay: 1.2,
        type: "spring",
        stiffness: "150",
      },
    },
  };

  const textMotionRight = {
    hidden: {
      opacity: 0,
      x: 400,
    },
    visible: {
      opacity: 1,
      x: -50,
      transition: { delay: 1.2, type: "spring", stiffness: "150" },
    },
  };

  return (
    <div style={box}>
      <Parallax strength={400} bgImage={trees}>
        <motion.div
          style={{ height: 500 }}
          variants={text_variant}
          initial="hidden"
          animate="visible"
        >
          <div style={text}>Lorem Ipsum</div>
        </motion.div>
      </Parallax>
      <Parallax strength={400}>
        <div className="parent" style={parent}>
          <motion.div
            variants={textMotionLeft}
            initial="hidden"
            animate="visible"
            className="text"
            style={text_content}
          >
            <p>Lorem Ipsum</p>
          </motion.div>
        </div>
      </Parallax>
      <Parallax strength={400} bgImage={mood}>
        <motion.div
          style={{ height: 500 }}
          variants={text_variant2}
          initial="hidden"
          animate="visible"
        >
          <div style={text}>Lorem Ipsum</div>
        </motion.div>
      </Parallax>

      <Parallax strength={400}>
        <div className="parent" style={parent}>
          <motion.div
            variants={textMotionRight}
            initial="hidden"
            animate="visible"
            className="text"
            style={text_content}
          >
            <p>Lorem Ipsum</p>
          </motion.div>
        </div>
      </Parallax>

      <Parallax strength={400} bgImage={house}>
        <motion.div
          style={{ height: 500 }}
          variants={text_variant3}
          initial="hidden"
          animate="visible"
        >
          <div style={text}>Lorem Ipsum</div>
        </motion.div>
      </Parallax>

      <Parallax strength={400}>
        <div className="parent" style={parent}>
          <motion.div className="text" style={text_content}>
            <p>Lorem Ipsum</p>
          </motion.div>
        </div>
      </Parallax>

      <Parallax strength={400} bgImage={landscape} blur={{ min: -2, max: 4 }}>
        <motion.div
          style={{ height: 500 }}
          variants={text_variant4}
          initial="hidden"
          animate="visible"
        >
          <div style={text}>Lorem Ipsum</div>
        </motion.div>
      </Parallax>

      <Parallax strength={400}>
        <div className="parent" style={parent}>
          <motion.div className="text" style={text_content}>
            <p>Lorem Ipsum</p>
          </motion.div>
        </div>
      </Parallax>

      <Parallax strength={400} bgImage={forest} strength={-100}>
        <motion.div
          style={{ height: 500 }}
          variants={text_variant5}
          initial="hidden"
          animate="visible"
        >
          <div style={text}>Lorem Ipsum</div>
        </motion.div>
      </Parallax>

      <Parallax strength={400}>
        <div className="parent" style={parent}>
          <motion.div className="text" style={text_content}>
            <p>Lorem Ipsum</p>
          </motion.div>
        </div>
      </Parallax>

      <Parallax strength={400} bgImage={lake}>
        <motion.div style={{ height: 500 }}>
          <div style={text}>Lorem Ipsum</div>
        </motion.div>
      </Parallax>
    </div>
  );
};

export default ParallaxEffect;
