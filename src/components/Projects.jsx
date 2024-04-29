// import Swiper core and required modules
// Import Swiper React components
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";


// import required modules
import { EffectCards } from "swiper";


import quotebg from './image/png/quotebg.png';


export default function Projects() {
    return (
        <>
            <div className='-skew-y-[4deg] mb-[500px]'>
                    <img src={quotebg} alt="quotebg" className='h-[750px] w-full object-cover blur-[1.8px] brightness-50'/>
            </div>
            <Swiper
                effect={"cards"}
                grabCursor={true}
                modules={[EffectCards]}
                loop={true}
                initialSlide={0}
                className="mySwiper"
            >
                <SwiperSlide>Slide 1</SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
            </Swiper>
        </>
    );
};