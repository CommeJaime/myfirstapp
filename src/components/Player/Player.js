import {AnimeList} from "../../datas/AnimeList";

function Player() {
    let actualAnime = (window.location.pathname).replace("/player/", "").split("/")[0]
    let actuelIndex = (window.location.pathname).replace("/player/" + actualAnime + "/","").replaceAll("/","")
    let link;
    AnimeList.map(( anime, index ) => {
            if(anime.id === actualAnime ) {
                link = AnimeList[index].link[actuelIndex].streaminglink
            }
        }
    )
    console.log(link)
    return (
        <iframe width="560" height="315" src={link} frameBorder="0" allowFullScreen></iframe>
    )
}

export default Player