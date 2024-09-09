import "./PlayerInfo.less";
import star from "../../assets/Vector.png";
import user from "../../assets/Ellipse 464.png";
import BalanceBtn from "../BalanceBtn/BalanceBtn";

const PlayerInfo = ({ info }) => {
  return (
    <div className="player-info">
      <div className="player-name-block">
        <h2 className="player-name">{info.longUserName}</h2>
        <div className="stars-block">
          {Array.from({ length: info.stars }, (_, index) => (
            <img key={index} className="star" src={star} alt="star" />
          ))}
        </div>
      </div>
      <div className="user">
        <img src={user} alt="user" />
      </div>
      <BalanceBtn balance={info.balance} />
    </div>
  );
};

export default PlayerInfo;
