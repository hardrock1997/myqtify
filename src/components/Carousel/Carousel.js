import styles from "./Carousel.module.css";
import {Swiper, SwiperSlide} from 'swiper/react';
import { useSwiper } from "swiper/react";
import {Navigation} from 'swiper/modules';
import { useEffect } from "react";
import 'swiper/css';
import CarouselLeftNavigation from './CarouselLeftNavigation/CarouselLeftNavigation'
import CarouselRigthNavigation from './CarouselRightNavigation/CarouselRightNavigation';

function Controls({data,component}) {
    const swiper = useSwiper()

    useEffect(()=>{
        swiper.slideTo(0);
    },[data,swiper])
}

function Carousel({data,component}) {
   
    return (

    <div className={styles.wrapper}>
        <Swiper 
        style={{padding:"0px 20px"}} 
        initialSlide={0} modules={[Navigation]} 
        slidesPerView={"6"} 
        spaceBetween={40} 
        allowTouchMove
        >
            <Controls data={data} component={component}/>
            <CarouselLeftNavigation/>
            <CarouselRigthNavigation/>
            {
                data.map(item=>{
                    return (
                       <SwiperSlide key={item.id}>{component(item)}</SwiperSlide> 
                    )
                })
            }
        </Swiper>
    </div>
    )
}

export default Carousel