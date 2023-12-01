import {useState,useEffect} from "react";
import axios from "axios"

function useGetAlbumsData(url) {
    const [topAlbums,setTopAlbums] = useState([]);

    useEffect(()=>{
        async function getTopAlbums() {
            try{
                const data=await axios.get(url);
                const topAlbums =  data?.data;
                setTopAlbums(topAlbums)
            }
            catch(error) {
                console.log(error)
            }
           
        }
        getTopAlbums()
    
    },[url])
    return [topAlbums]
}

export default useGetAlbumsData;