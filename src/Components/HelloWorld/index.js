import React from "react";
import './index.css';
import image from '../../assets/images/hello.svg'

const HelloWorld = () => {
  return (
    <div className="hello-world">
      Hello World <span className="hello-world__tech">Welcome to Skypee!</span>
      <img src={image} style={{width: 500, height: 500}}></img>
    </div>
  );
};

export default HelloWorld;