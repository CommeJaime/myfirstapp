
import { AnimeList } from "../../datas/AnimeList";
import '../../styles/Presentation/Synopsis.css'

function Synopsis({index}) {
    /* Code Javascript */
    return (
        <div className="synopsis">
            <h2 className="synopsis-title">Synopsis</h2>
            <p className="synopsis-text">{AnimeList[index].synopsis}</p>
        </div>
    )
}

export default Synopsis