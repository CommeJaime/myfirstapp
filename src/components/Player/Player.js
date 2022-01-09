import {AnimeList} from "../../datas/AnimeList";
import '../../styles/Player/Player.css'
import Banner from "../App/Banner";
import logo from "../../assets/logo.png";
import Footer from "../App/Footer";

function handleClick() {
    let actualAnime = (window.location.pathname).replace("/player/", "").split("/")[0]
    let nextIndex = parseInt((window.location.pathname).replace("/player/" + actualAnime + "/","").replaceAll("/","")) + 1
    window.location.pathname = "/player/" + actualAnime + "/" + nextIndex
}

function Player() {
    let actualAnime = (window.location.pathname).replace("/player/", "").split("/")[0]
    let actuelIndex = (window.location.pathname).replace("/player/" + actualAnime + "/","").replaceAll("/","")
    let link;
    let name;
    AnimeList.map(( anime, index ) => {
            if(anime.id === actualAnime ) {
                link = AnimeList[index].link[actuelIndex].streaminglink
                name = AnimeList[index].link[actuelIndex].name
            }
        }
    )
    return (
        <div>
            <Banner>
                <img src={logo} alt='AniMangaDatabase' className='logo' />
                <h1 className='title'>AniMangaDatabase</h1>
            </Banner>
            <div className='layout-inner'>
                <div id="all">
                    <div className="player-header" class="center">
                        <h2 className="player-header-title">{name}</h2>
                        <button className="player-header-button-next" type="button" onClick={handleClick}>
                            Next Episode
                        </button>
                    </div>
                    <iframe className="player-playerstream" width="560" height="315" src={link} frameBorder="0" allowFullScreen/>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Player