import { AnimeList } from "../../datas/AnimeList";
import "../../styles/Player/Player.css";
import Banner from "../App/Banner";
import Footer from "../App/Footer";

function handleClick({ actualAnime, nextIndex }) {
  window.location.pathname = "/player/" + actualAnime + "/" + nextIndex;
}

function Player() {
  let actualAnime = window.location.pathname
    .replace("/player/", "")
    .split("/")[0];
  let actualIndex = window.location.pathname
    .replace("/player/" + actualAnime + "/", "")
    .replaceAll("/", "");
  let link;
  let name;
  let animeListIndex;
  AnimeList.forEach((anime, index) => {
    if (anime.id === actualAnime) {
      animeListIndex = index;
      link = AnimeList[index].link[actualIndex].streaminglink;
      name = AnimeList[index].link[actualIndex].name;
    }
  });
  let nextIndex = Number(actualIndex) + 1;
  let buttonOpacity;
  if (!(AnimeList[animeListIndex].link[nextIndex] === undefined)) {
    buttonOpacity = 1;
  } else {
    buttonOpacity = 0;
  }
  const styleButton = {
    opacity: buttonOpacity
  };
  return (
    <div>
      <Banner>
        <img src="/logo.png" alt="AniMangaDatabase" className="logo" />
        <h1 className="title">AniMangaDatabase</h1>
      </Banner>
      <div className="layout-inner">
        <div id="all">
          <div className="player-header" class="center">
            <h2 className="player-header-title">{name}</h2>
            <button
              style={styleButton}
              className="player-header-button-next"
              type="button"
              onClick={() => handleClick({ actualAnime, nextIndex })}
            >
              Next Episode
            </button>
          </div>
          <iframe
            className="player-playerstream"
            width="560"
            height="315"
            title="player-iframe"
            src={link}
            frameBorder="0"
            allowFullScreen
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Player;
