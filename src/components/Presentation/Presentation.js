import Banner from '../App/Banner'
import logo from '../../assets/logo.png'
import Footer from '../App/Footer'
import EpisodeList from "./EpisodeList";
import '../../styles/App/Layout.css'
import {AnimeList} from "../../datas/AnimeList";
import Synopsis from "./Synopsis";

function Presentation() {
    let actualAnime = (window.location.pathname).replace("/presentation/", "")
    let animeIndex = 0;
    AnimeList.map(( anime, index ) => {
            if(anime.id === actualAnime ) {
                animeIndex = index;
            }
        }
    )
    return (
        <div>
            <Banner>
                <img src={logo} alt='AniMangaDatabase' className='logo' />
                <h1 className='title'>AniMangaDatabase</h1>
            </Banner>
            <Synopsis index={animeIndex} />
            <div className='layout-inner'>
                <EpisodeList index={animeIndex} />
            </div>
            <Footer />
        </div>
    )
}

export default Presentation
