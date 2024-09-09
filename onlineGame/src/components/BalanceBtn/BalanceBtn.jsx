import React, { useState } from "react";
import "./BalanceBtn.less";
import unvisible from "../../assets/icon unvisible.png";
import visible from "../../assets/icon visible.png";

const BalanceBtn = ({ balance }) => {
  const [isHidden, setIsHidden] = useState(true);

  const toggleVisibility = () => {
    setIsHidden(!isHidden);
  };

  return (
    <>
      {isHidden ? (
        <button className="hidden" onClick={toggleVisibility}>
          <div className="icon">
            <img src={visible} alt="visible" />
          </div>
          <p className="text">Show balance</p>
        </button>
      ) : (
        <div className="button-block-visible">
          <button className="visible" onClick={toggleVisibility}>
            <img src={unvisible} alt="unvisible" />
          </button>
          <p className="balance">{balance}</p>
        </div>
      )}
    </>
  );
};

export default BalanceBtn;
