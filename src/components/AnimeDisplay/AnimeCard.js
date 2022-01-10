import "../../styles/AnimeDisplay/AnimeCard.css";
import React from "react";

function AnimeCard({ cover, name, id, episodes }) {
  const [opacity_img, setOpacity] = React.useState("");
  const stylesImg = {
    opacity: opacity_img
  };
  const opactity_play = 1 - opacity_img;
  const stylesPlay = {
    opacity: opactity_play
  };
  const [color, setColor] = React.useState("");
  const stylesName = {
    color: color
  };
  const redirect = "/presentation/" + id;

  return (
    <a className="item" href={redirect}>
      <div
        style={stylesImg}
        onMouseEnter={() => setOpacity(0.5)}
        onMouseLeave={() => setOpacity(1)}
      >
        <span className="item-price">{episodes}</span>
        <img className="item-cover" src={cover} alt={`${name} cover`} />
      </div>
      <img
        onLoad={() => setOpacity(1)}
        style={stylesPlay}
        onMouseEnter={() => setOpacity(0.5)}
        onMouseLeave={() => setOpacity(1)}
        className="item-play"
        src="/play.png"
        alt=""
      />
      <p
        style={stylesName}
        onMouseEnter={() => setColor("blue")}
        onMouseLeave={() => setColor("")}
        className="item-name"
      >
        {name}
      </p>
    </a>
  );
}

export default AnimeCard;
