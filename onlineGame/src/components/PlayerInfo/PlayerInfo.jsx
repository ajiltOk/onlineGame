import "./PlayerInfo.less";

const PlayerInfo = ({ info }) => {
  return (
    <div className="player-info">
      <div>
        <p>{info.longUserName}</p>
        <img src="../../assets/Vector.png" alt="stars" />
      </div>
      <div>
        <img src="../../assets/Ellipse 464.png" alt="user" />
      </div>
      <div>
        <img
          src="../../assets/Property 1=show, Property 2=normal.png"
          alt="logo"
        />
        <span>{info.balance}</span>
      </div>
    </div>
  );
};

export default PlayerInfo;
