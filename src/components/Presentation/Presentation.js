import Banner from '../App/Banner'
import logo from '../../assets/logo.png'
import Footer from '../App/Footer'
import EpisodeList from "./EpisodeList";
import '../../styles/App/Layout.css'

function Presentation() {
    return (
        <div>
            <Banner>
                <img src={logo} alt='AniMangaDatabase' className='logo' />
                <h1 className='title'>AniMangaDatabase</h1>
            </Banner>
            <div className='layout-inner'>
                <EpisodeList />
            </div>
            <Footer />
        </div>
    )
}

export default Presentation
