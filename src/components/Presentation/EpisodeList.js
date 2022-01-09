import { AnimeList } from "../../datas/AnimeList";
import '../../styles/Presentation/EpisodeList.css'

function EpisodeList({index}) {
    return (
        <div className='episode-list-div'>
            <h2 className="episode-list-title">Liste des épisode</h2>
            <ul className='episode-list-ul'>
                {Array.isArray(AnimeList[index].link) && AnimeList[index].link.map(({name, streaminglink}) => (

                    <div className="episode-list-row">

                        <a href={streaminglink}>

                            <div className="episode-list-name">
                                {name}
                            </div>

                        </a>

                        <div className="episode-list-date">{AnimeList[index].date}</div>
                    </div>
                ))}
            </ul>
        </div>
    )
}

export default EpisodeList