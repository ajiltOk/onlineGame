import React, { useState, useEffect } from "react";
import "./Loader.less";

const Loader = ({ removeLoader }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev < 100) {
          return prev + 1;
        } else if (prev === 100) {
          removeLoader();
        } else {
          clearInterval(interval);
          return prev;
        }
      });
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="progress-container">
      <div className="progress-bar" style={{ width: `${progress}%` }}></div>
      <div className="progress-percentage">{progress}%</div>
    </div>
  );
};

export default Loader;
