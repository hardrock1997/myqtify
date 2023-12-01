import '../components/Card.css'
// import cardImage from '../assets/cardImage.png'
export default function Card({numberOfFollowers,title,cardImage}) {
    return (
    <>
        <div className='card_container'>
            <img src={cardImage} alt='Card_image' height={170} className='cardImage'/>
            <div className='followers'>{numberOfFollowers}</div>
        </div>
        <div className='title'>
            <h4>{title}</h4>
        </div>
    </>
    )
}