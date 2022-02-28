import React from "react";

const Gallery2Section = () => {
  return (
    <div className="grid-imgs2">
      <div className="img-wrapper">
        <img className="blur" src="https://picsum.photos/600?random=1" alt="" />
        <div className="content fade">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
          consequatur unde aut aspernatur labore ipsum inventore assumenda
          provident similique dolore.
        </div>
      </div>
      <div className="img-wrapper">
        <img
          className="zoom blur"
          src="https://picsum.photos/600?random=3"
          alt=""
        />
        <div className="content fade ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
          consequatur unde aut aspernatur labore ipsum inventore assumenda
          provident similique dolore.
        </div>
      </div>
      <div className="img-wrapper">
        <img className="blur" src="https://picsum.photos/600?random=5" alt="" />
        <div className="content slide-left">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
          consequatur unde aut aspernatur labore ipsum inventore assumenda
          provident similique dolore.
        </div>
      </div>
      <div className="img-wrapper">
        <img
          className="blur"
          src="https://picsum.photos/600?random=6tens"
          alt=""
        />
        <div className="content slide-right">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
          consequatur unde aut aspernatur labore ipsum inventore assumenda
          provident similique dolore.
        </div>
      </div>
    </div>
  );
};

export default Gallery2Section;
