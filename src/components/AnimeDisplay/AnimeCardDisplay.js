import AnimeCard from './AnimeCard'
import '../../styles/AnimeDisplay/AnimeDisplay.css'
import { AnimeList } from '../../datas/AnimeList'

function AnimeCardDisplay() {

  return (
    <div className='list'>
      <ul className='anime-list'>
        {AnimeList.map(({ id, cover, name, longer }) =>
           (
            <div key={id}>
              <AnimeCard
                cover={cover}
                name={name}
                episodes={longer}
                id={id}
              />
            </div>
           )
        )}
      </ul>
    </div>
  )
}

export default AnimeCardDisplay
