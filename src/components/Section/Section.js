import styles from "./Section.module.css";
import { useState } from "react";
import Card from "../Card/Card";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Carousel from "../Carousel/Carousel";

function Section({title,data,type}) {

    const [toggle,setToggle] = useState(false);
    console.log(toggle)
    function handleToggle() {
        setToggle(!toggle)
    }

    return (
        <div>
            <div className={styles.header}>
                <h3 className={styles.albumText}>{title}</h3>
                <h4 className={styles.toggleText} onClick={handleToggle}>{toggle ? "Show All" : "Collapse All"}</h4>
            </div>
            {
                data.length===0 ? (
                    <Box sx={{display:'flex', justifyContent:'center'}}>
                        <CircularProgress/>
                    </Box>
                ) : 
                    <div className={styles.cards_container}>
                        {!toggle?<div className={styles.wrapper}>
                            {
                                data.map((album)=>{
                                    return (
                                        <Card key={album.id} album={album} type="album"/>
                                    )
                                })
                            }
                        </div>:(<Carousel data={data} component={(data)=><Card album={data} type={type}/>}/>)} 
                    </div>}
        </div>
        
    )
}

export default Section