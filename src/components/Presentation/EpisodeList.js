import { AnimeList } from "../../datas/AnimeList";
import '../../styles/Presentation/EpisodeList.css'

function EpisodeList() {
    let actualAnime = (window.location.pathname).replace("/presentation/", "")
    let animeIndex = 0;
    AnimeList.map(( anime, index ) => {
            if(anime.id === actualAnime ) {
                animeIndex = index;
            }
        }
    )
    return (
        <div className='list'>
            <ul className='anime-list'>
                {Array.isArray(AnimeList[animeIndex].link) && AnimeList[animeIndex].link.map(({name, streaminglink}) => (
                    <div className="list" id={name}>
                        <a href={streaminglink}>
                            <div className="name">{name}</div>
                        </a>
                        <div className="date">date</div>
                    </div>
                ))}
            </ul>
        </div>
    )
}

export default EpisodeList
