import styles from'./Card.module.css'
import Tooltip from '@mui/material/Tooltip';
import Chip from '@mui/material/Chip';

export default function Card({data,type}) {
   
const getCard = (type) => {
    switch(type) {
        case "album": {
            const {image,follows,title,songs} = data
            return (
                
            <Tooltip title={`${songs.length} songs`} placement='top' arrow>
              <div className={styles.wrapper}>
                <div className={styles.card}>
                  <img src={image} alt="album" />
                <div className={styles.banner}>
                    <Chip
                      label={`${follows} Follows`}
                      size="small"
                      className={styles.chip}
                    />
                </div>
                </div>
                <div className={styles.titleWrapper}>
                  <p>{title}</p>
                </div>
            </div>
          </Tooltip>
        )
    }
    case "song" :{
      const {image,likes,title}=data;
    return   (
        <div className={styles.wrapper}>
        <div className={styles.card}>
          <img src={image} alt="album" />
        <div className={styles.banner}>
            <Chip
              label={`${likes} Likes`}
              size="small"
              className={styles.chip}
            />
        </div>
        </div>
        <div className={styles.titleWrapper}>
          <p>{title}</p>
        </div>
    </div>
      )
    }
    default:
        return <></>;  
    }
}
return getCard(type)
}

