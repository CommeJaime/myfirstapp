import { AnimeList } from "../../datas/AnimeList";
import "../../styles/Presentation/EpisodeList.css";

function EpisodeList({ animeListindex }) {
  return (
    <div className="episode-list-div">
      <h2 className="episode-list-title">Liste des épisode</h2>
      <ul className="episode-list-ul">
        {Array.isArray(AnimeList[animeListindex].link) &&
          AnimeList[animeListindex].link.map((link, index) => (
            <div className="episode-list-row">
              <a href={"/player/" + AnimeList[animeListindex].id + "/" + index}>
                <div className="episode-list-name">{link.name}</div>
              </a>

              <div className="episode-list-date">
                {AnimeList[animeListindex].date}
              </div>
            </div>
          ))}
      </ul>
    </div>
  );
}

export default EpisodeList;
