import Banner from './Banner'
import logo from '../../assets/logo.png'
import Footer from './Footer'
import AnimeCardDisplay from '../AnimeDisplay/AnimeCardDisplay'
import '../../styles/App/Layout.css'

function App() {

  return (
    <div>
      <Banner>
        <img src={logo} alt='AniMangaDatabase' className='logo' />
        <h1 className='title'>AniMangaDatabase</h1>
      </Banner>
      <div className='layout-inner'>
        <AnimeCardDisplay />
      </div>
      <Footer />
    </div>
  )
}

export default App
