import React from "react";
import TournamentBtn from "../TournamentBtn/TournamentBtn";
import "./TournamentItem.less";
import pushpinIcon from "../../assets/pushpin.png";
import time from "../../assets/time.png";
import players from "../../assets/players.png";
import cup from "../../assets/Path 2586.png";
import fastTimeIcon from "../../assets/icon fastTime.png";
import freeRollIcon from "../../assets/icon freeRoll.png";
import rapidIcon from "../../assets/icon rapid.png";

const TournamentItem = ({
  name,
  date,
  prizePool,
  type,
  numberOfPlayers,
  maxNumberOfPlayers,
  status,
  fastTime,
  freeRoll,
  pushpin,
  rapid,
}) => {
  return (
    <div className="tournament-item">
      <div className="tournament-reg">
        {status === "active" ? (
          <p className="tournament-reg-text">REGISTARING</p>
        ) : (
          <p className="tournament-canc-text">CANCELED</p>
        )}
      </div>
      <div
        className={`tournament-info ${
          status === "active" && numberOfPlayers < maxNumberOfPlayers
            ? "active-background"
            : status === "canceled"
            ? "background"
            : status === "active" && !pushpin
            ? "no-pushpin-background"
            : "background"
        }`}
      >
        <div className="first-block">
          <div className="description-block">
            <div className="type-block">
              {pushpin && (
                <img className="pushpin" src={pushpinIcon} alt="pushpin" />
              )}
              <p className="tournament-type">{type}</p>
              {fastTime && (
                <img className="fastTime" src={fastTimeIcon} alt="fastTime" />
              )}
              {freeRoll && (
                <img className="fastTime" src={freeRollIcon} alt="freeRoll" />
              )}
              {rapid && (
                <img className="fastTime" src={rapidIcon} alt="rapid" />
              )}
            </div>
            <h3
              className={`tournament-name ${
                numberOfPlayers < maxNumberOfPlayers && status === "active"
                  ? "active"
                  : rapid
                  ? "rapid"
                  : "tournament-name"
              }`}
            >
              {name}
            </h3>
          </div>
          <TournamentBtn status={status} />
        </div>
        <div className="second-block">
          <div className="date-block">
            <div className="time">
              <img src={time} alt="time" />
            </div>
            <p className="tournament-date">{date}</p>
          </div>
          <div className="tournament-count">
            <div className="players-block">
              <div className="players">
                <img src={players} alt="players" />
              </div>
              <p className="tournament-number-of-players">{numberOfPlayers}</p>
              <p className="tournament-max-number-of-players">
                /{maxNumberOfPlayers}
              </p>
            </div>
            <div className="cup-block">
              <div className="cup">
                <img src={cup} alt="cup" />
              </div>
              <p className="tournament-prize-pool">{prizePool}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TournamentItem;
