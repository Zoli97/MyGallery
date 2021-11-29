import React from "react";
import GallerySection from "../components/GallerySection";
import SidebarSection from "../components/SidebarSection";

const Gallery = () => {
  const container = {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
  };
  return (
    <div className="content" style={container}>
      <SidebarSection />
      <div>
        <GallerySection />
      </div>{" "}
    </div>
  );
};

export default Gallery;
