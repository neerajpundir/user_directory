import React from "react";
import "./style.css";

const Loader = (props) => {
  const is_active = props.active;
  return (
    <div>
      <div className={"loading-overlay " + is_active}>
        <span className="fa fa-spinner fa-3x fa-spin"></span>
      </div>
    </div>
  );
};

export default Loader;
