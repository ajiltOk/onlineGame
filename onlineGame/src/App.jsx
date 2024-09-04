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
      title: "NL 2-7 Triple Draw",
      name: "OFC Pineapple",
      date: "12:00 pm, 28 July",
      prizePool: 1000000,
      numberOfPlayers: "1000/1000",
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
      <h1>Poker</h1>
      {loader && <Spinner />}
      <PlayerInfo info={info} />
      {loader && <Loader removeLoader={removeLoader} className="loader" />}
      {tournaments.map((tournament, index) => (
        <TournamentItem
          key={index}
          title={tournament.title}
          name={tournament.name}
          date={tournament.date}
          prizePool={tournament.prizePool}
          numberOfPlayers={tournament.numberOfPlayers}
        />
      ))}
    </div>
  );
};

export default App;
