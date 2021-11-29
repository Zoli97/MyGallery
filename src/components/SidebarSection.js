import React from "react";
import { ReactDOM } from "react-dom";
import { motion } from "framer-motion";

import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
} from "react-pro-sidebar";
import { Link } from "react-router-dom";

const SidebarSection = () => {
  const SidebarStyle = {
    height: "100%",
    width: "20%",
    position: "absolute",
    top: "0",
    left: "0",
    bottom: "0",
  };

  const Header = {
    fontSize: "clamp(3rem, 5vw, 5rem)",
    position: "absolute",
    top: "120px",

    fontWeight: "800",
  };

  const myMenu = {
    position: "relative",
  };

  const content = {
    position: "absolute",
    top: "200px",
    listStyle: "none",
  };

  const MyMenuItem = {
    width: "220px",
    height: "auto",
    borderTop: "solid black 1px",
    position: "relative",
    top: "100px",
    textlign: "center",
    fontSize: "28px",
    letterSpacing: "0px",
    lineHeight: "1em",
    textTransform: "uppercase",
    color: "#000",
    textDecoration: "none",
    padding: "32px 0",
    cursor: "pointer",
  };

  const parg = {
    textAlign: "center",
    fontSize: "clamp(2rem, 2vw, 3rem)",
  };

  const paragraph = {
    text: "The TZE",
  };

  const item1_variants = {
    hidden: {
      opacity: 0,
    },

    visible: {
      opacity: 1,
      transition: {
        duration: 1.8,
      },
    },
  };

  const item2_variants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 2.4,
        delay: 1,
      },
    },
  };

  const item3_variants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 2.8,
        delay: 1.2,
      },
    },
  };

  const item4_variants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 3,
        delay: 1.4,
      },
    },
  };

  const sideBar_variants = {
    hidden: {
      x: -300,
      opacity: 0,
    },

    visible: {
      x: -20,
      opacity: 1,
      transition: {
        delay: 1.1,
        type: "spring",
        stiffness: 180,
        when: "beforeChildren",
      },
    },
  };

  function MySidebarContent(props) {
    return (
      <motion.div
        variants={sideBar_variants}
        initial="hidden"
        animate="visible"
      >
        <Link to="/">
          <MenuItem>
            <div style={MyMenuItem}>
              <motion.p style={parg} variants={item1_variants}>
                Home
              </motion.p>
            </div>
          </MenuItem>
        </Link>

        <Link to="/about">
          <MenuItem>
            <div style={MyMenuItem}>
              <motion.p style={parg} variants={item2_variants}>
                About{" "}
              </motion.p>
            </div>
          </MenuItem>
        </Link>

        <Link to="/contact">
          <MenuItem>
            <div style={MyMenuItem}>
              <motion.p style={parg} variants={item3_variants}>
                Contact{" "}
              </motion.p>
            </div>
          </MenuItem>
        </Link>
        <MenuItem>
          <div style={MyMenuItem}>
            <motion.p style={parg} variants={item4_variants}>
              {paragraph.text}
            </motion.p>
          </div>
        </MenuItem>

        <MenuItem>
          <div style={MyMenuItem}></div>
        </MenuItem>
      </motion.div>
    );
  }
  return (
    <div>
      <ProSidebar style={SidebarStyle}>
        <Menu style={myMenu}>
          <SidebarHeader style={Header}>Erwin</SidebarHeader>
          <SidebarContent style={content}>
            <MySidebarContent />
          </SidebarContent>
        </Menu>
      </ProSidebar>
    </div>
  );
};

export default SidebarSection;
