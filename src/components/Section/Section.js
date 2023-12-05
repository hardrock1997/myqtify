import styles from "./Section.module.css";
import { useState,useEffect } from "react";
import Card from "../Card/Card";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Carousel from "../Carousel/Carousel";
import BasicTabs from "../Tabs/Tabs";
import { getSongsByGenre } from "../../utils/constants";

function Section({title,data,type}) {
 
    const [toggle,setToggle] = useState(false);
    const [value, setValue] = useState(0);
    const [songsData,setSongsData] = useState(data);

    function handleToggle() {
        setToggle(!toggle)
    }
    
    const handleChange = (event, newValue) => {
      setValue(newValue);
      setSongsData(data);
    };



    useEffect(()=>{
        
        if(value===1) {
            const rockSongs = getSongsByGenre('rock',songsData);
            setSongsData(rockSongs);
        }
        else if(value===2) {
            const popSongs = getSongsByGenre('pop',songsData);
            setSongsData(popSongs);
        }
        else if(value===3) {
            const jazzSongs = getSongsByGenre('jazz',songsData);
            setSongsData(jazzSongs);
        }
        else if(value===4) {
            const bluesSongs = getSongsByGenre('blues',songsData);
            setSongsData(bluesSongs);
        }
    },[value])

    return (
        <div>
            <div className={styles.header}>
                <h3 className={styles.albumText}>{title}</h3>
                {type==='song'?null:<h4 className={styles.toggleText} onClick={handleToggle}>{toggle ? "Show All" : "Collapse All"}</h4>}
            </div>
            {type==='song'?<BasicTabs value={value} handleChange={handleChange}/>:null}
            {
                data.length===0 ? (
                    <Box sx={{display:'flex', justifyContent:'center'}}>
                        <CircularProgress/>
                    </Box>
                ) : 
                ( type==='album' ? (  <div className={styles.cards_container}>
                        {!toggle?<div className={styles.wrapper}>
                            {
                                data.map((album)=>{
                                    return (
                                        <Card key={album.id} data={album} type="album"/>
                                    )
                                })
                            }
                        </div>:(<Carousel data={data} component={(data)=><Card data={data} type={type}/>}/>)
                        } 
                    </div>) : (<Carousel data={songsData} component={(songsData)=><Card data={songsData} type={type}/>}/>)

                )   
                    }
        </div>
        
    )
}

export default Section