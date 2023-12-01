import "./GridOfCards.css"
import useGetAlbumsData from "../hooks/useGetAlbumsData"
import Card from "./Card";
import { TOPALBUMS_URL } from "../utils/constants";

function TopAlbums({maintext,btntext}) {

    const [topAlbums] = useGetAlbumsData(TOPALBUMS_URL);
    console.log(topAlbums)
    return (
        <>
            <div className="top">
                <h3 className="albumtype">{maintext}</h3>
                <h3 className="btntext">{btntext}</h3>
            </div>
            <div className="cards_container">
                {
                    topAlbums.map((album,index)=>{
                        return (
                            <div key={album.id}>
                                <Card  numberOfFollowers={album.follows+" Follows"} title={album.title} cardImage={album.image}/>
                            </div>
                        )
                      
                    })
                }
            </div>
            
        </>
    )
}

export default TopAlbums