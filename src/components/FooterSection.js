import ReactDOM from "react-dom";
import React from "react";
import { motion } from "framer-motion";

const getList = {
  textItem1: "Facebook",
  textItem2: "Instagram",
  textItem3: "Linkedin",
  textItem4: "#GitHub",
  textItem5: "Youtube",
  textItem6: "Signal",
};

const container = {
  width: "100%",
  height: "30vh",
  margin: "25px 10px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "28px",
};

const Ul = {
  listStyleType: "none",
};

const li = {
  cursor: "pointer",
};

const MyBtn = {
  width: "80px",
  height: "40px",
  border: "1px solid black",
  cursor: "pointer",
  background: "none",
};
const FooterSection = () => {
  return (
    <div className="container" style={container}>
      <div className="childContainer">
        <ul style={Ul}>
          <motion.li style={li}>
            <motion.button
              whileHover={{
                scale: 1.2,
                originZ: 8,
                color: "#001233",
                type: "spring",
              }}
              style={MyBtn}
            >
              {getList.textItem1}{" "}
            </motion.button>{" "}
          </motion.li>{" "}
          <li style={li}>
            <motion.button
              whileHover={{
                scale: 1.2,
                originZ: 8,
                color: "#001233",
                type: "spring",
              }}
              style={MyBtn}
            >
              {getList.textItem2}{" "}
            </motion.button>{" "}
          </li>{" "}
          <li style={li}>
            <motion.button
              whileHover={{
                scale: 1.2,
                originZ: 8,
                color: "#001233",
                type: "spring",
              }}
              style={MyBtn}
            >
              {" "}
              {getList.textItem3}{" "}
            </motion.button>{" "}
          </li>{" "}
          <li style={li}>
            <motion.button
              whileHover={{
                scale: 1.2,
                originZ: 8,
                color: "#001233",
                type: "spring",
              }}
              style={MyBtn}
            >
              {" "}
              {getList.textItem4}{" "}
            </motion.button>{" "}
          </li>{" "}
          <li style={li}>
            <motion.button
              whileHover={{
                scale: 1.2,
                originZ: 8,
                color: "#001233",
                type: "spring",
              }}
              style={MyBtn}
            >
              {" "}
              {getList.textItem5}{" "}
            </motion.button>{" "}
          </li>{" "}
          <li style={li}>
            <motion.button
              whileHover={{
                scale: 1.2,
                originZ: 8,
                color: "#001233",
                type: "spring",
              }}
              style={MyBtn}
            >
              {getList.textItem6}{" "}
            </motion.button>{" "}
          </li>{" "}
        </ul>{" "}
      </div>{" "}
    </div>
  );
};

export default FooterSection;
