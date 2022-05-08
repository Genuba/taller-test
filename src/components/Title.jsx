import React from "react";
import "./styles/Title.css";

const Title = (props) => {
  return (
    <div className="all-header">
      <img className="myfoto" src={props.image} alt="" />
      <div id="email-info">
        <h3>{props.identifier}</h3>
        <h1>{props.value}</h1>
      </div>
    </div>
  );
};

export default Title;
