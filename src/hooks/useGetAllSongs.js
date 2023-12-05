import {useState,useEffect} from "react";
import axios from "axios";

function useGetAllSongs(url) {
    const [songs,setSongs] = useState([]);

    useEffect(()=>{
        async function getTopAlbums() {
            try{
                const data=await axios.get(url);
                const songs =  data.data;
                console.log(songs);
                setSongs(songs)
            }
            catch(error) {
                console.log(error)
            }
           
        }
        getTopAlbums()
    
    },[url])
    return [songs];
}

export default useGetAllSongs;