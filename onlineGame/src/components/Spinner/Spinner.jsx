import React from "react";
import "./Spinner.less";

const Spinner = () => {
  return (
    <div className="lds-spinner">
      {Array.from({ length: 12 }, (_, index) => (
        <div key={index}></div>
      ))}
    </div>
  );
};

export default Spinner;
