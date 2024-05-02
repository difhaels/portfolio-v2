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


export default function Projects(props) {
    return (
        <>
            <div className='relative'>
                    <img src={quotebg} alt="quotebg" className='relative h-[750px] w-full object-cover blur-sm brightness-[.3] -skew-y-[4deg] z-10'/>
                    <div className="absolute left-0 right-0 top-28 z-20">
                        <Swiper
                            effect={"cards"}
                            grabCursor={true}
                            modules={[EffectCards]}
                            loop={true}
                            initialSlide={0}
                            className="mySwiper"
                        >
                            <SwiperSlide><props.slide1/></SwiperSlide>
                            <SwiperSlide><props.slide2/></SwiperSlide>
                            <SwiperSlide><props.slide3/></SwiperSlide>
                        </Swiper>
                    </div>
                    <div className="absolute -bottom-[380px] right-0 left-0 mx-auto w-1 h-96 bg-[#9370DB]"></div>
            </div>
        </>
    );
};