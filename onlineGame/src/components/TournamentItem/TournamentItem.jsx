import React, { useState } from "react";
import "./TournamentItem.less";

const TournamentItem = ({ name, date, prizePool, title, numberOfPlayers }) => {
  return (
    <div className="tournament-item">
      <div className="tournament-reg">
        <p>Registering</p>
      </div>
      <div className="tournament-info">
        <div className="first-block">
          <div>
            <div className="title-block">
              <img src="../../assets/Union.png" alt="" />
              <p className="tournament-title">{title}</p>
            </div>
            <h2 className="tournament-name">{name}</h2>
          </div>
          <div>
            <img src="../../assets/Subtract.png" alt="" />
            <p className="tournament-date">Дата: {date}</p>
          </div>
        </div>
        <div className="second-block">
          <button className="register-button">Join table</button>
          <div className="tournament-count">
            <div>
              <img src="../../assets/players.png" alt="" />
              <p className="tournament-number-of-players">{numberOfPlayers}</p>
            </div>
            <div>
              <img src="../../assets/Path 2586.png" alt="" />
              <p className="tournament-prize-pool">{prizePool}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TournamentItem;
