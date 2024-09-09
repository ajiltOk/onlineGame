import React from "react";
import "./TournamentBtn.less";

const TournamentBtn = ({ status }) => {
  return (
    <>
      {status === "active" ? (
        <button className="button-active">JOIN TABLE</button>
      ) : (
        <button className="button-cancelled">CANCELLED</button>
      )}
    </>
  );
};

export default TournamentBtn;
