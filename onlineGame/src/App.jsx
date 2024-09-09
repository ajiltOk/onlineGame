import React, { useState } from "react";
import Spinner from "./components/Spinner/Spinner";
import PlayerInfo from "./components/PlayerInfo/PlayerInfo";
import Loader from "./components/Loader/Loader";
import TournamentItem from "./components/TournamentItem/TournamentItem";
import "./App.less";

const App = () => {
  const [loader, useLoader] = useState(true);

  const tournaments = [
    {
      type: "NL 2-7 Triple Draw",
      name: "OFC Pineapple",
      date: "12:00 pm, 28 July",
      prizePool: 1000000,
      numberOfPlayers: 1000,
      maxNumberOfPlayers: 1000,
      status: "active",
      pushpin: true,
    },
    {
      type: "NL Holdem",
      name: "OFC Pineapple",
      date: "12:00 pm, 28 July",
      prizePool: 100,
      numberOfPlayers: 1,
      maxNumberOfPlayers: 6,
      status: "active",
      pushpin: true,
    },
    {
      type: "NL OFC/pineapple prg",
      name: "Hourly Freeroll",
      date: "12:00 pm, 28 July",
      prizePool: 1000,
      numberOfPlayers: 1,
      maxNumberOfPlayers: 10 + " 000",
      status: "canceled",
      pushpin: true,
      fastTime: true,
      freeRoll: true,
    },
    {
      type: "PL Omaha h/l",
      name: "Rapid Tournament",
      date: "12:00 pm, 28 July",
      prizePool: 1000000,
      numberOfPlayers: 0,
      maxNumberOfPlayers: 0,
      status: "canceled",
    },
    {
      type: "NL 6 cards omaha h/l",
      name: "PL Omaha Knockout",
      date: "12:00 pm, 28 July",
      prizePool: 146,
      numberOfPlayers: 0,
      maxNumberOfPlayers: 100,
      status: "canceled",
      rapid: true,
    },
    {
      type: "NL 2-7 Triple Draw",
      name: "OFC Pineapple",
      date: "12:00 pm, 28 July",
      prizePool: 1000000,
      numberOfPlayers: 1000,
      maxNumberOfPlayers: 1000,
      status: "active",
    },
  ];

  const info = {
    longUserName: "LongUserName",
    stars: 5,
    balance: "$100,500.00",
  };

  const removeLoader = () => {
    useLoader(false);
  };

  return (
    <div className="wrapper">
      <h1 className="game-title">Poker</h1>
      {loader && <Spinner className="spinner" />}
      <PlayerInfo info={info} />
      {loader && <Loader removeLoader={removeLoader} className="loader" />}
      {tournaments.map((tournament, index) => (
        <TournamentItem
          key={index}
          type={tournament.type}
          name={tournament.name}
          date={tournament.date}
          prizePool={tournament.prizePool}
          numberOfPlayers={tournament.numberOfPlayers}
          maxNumberOfPlayers={tournament.maxNumberOfPlayers}
          status={tournament.status}
          fastTime={tournament.fastTime}
          freeRoll={tournament.freeRoll}
          pushpin={tournament.pushpin}
          rapid={tournament.rapid}
        />
      ))}
    </div>
  );
};

export default App;
