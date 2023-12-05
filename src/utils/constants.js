export const TOPALBUMS_URL = "https://qtify-backend-labs.crio.do/albums/top";
export const NEWALBUMS_URL = "https://qtify-backend-labs.crio.do/albums/new";
export const ALLSONGS_URL = "https://qtify-backend-labs.crio.do/songs";

export function getSongsByGenre(genre,songs) {
  
     const filtredSongs= songs.filter((song)=>{
            return song.genre?.key===genre;
        })

    console.log(filtredSongs);
    return filtredSongs;
}