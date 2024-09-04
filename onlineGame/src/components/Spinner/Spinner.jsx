import React from "react";
import "./Spinner.less";

const Spinner = () => {
  return (
    <div className="spinner">
      {[...Array(12)].map((_, index) => (
        <div
          key={index}
          className="dot"
          style={{ animationDelay: `${index * 0.1}s` }}
        ></div>
      ))}
    </div>
  );
};

export default Spinner;
