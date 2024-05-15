import agung from '../image/png/agung.png';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Navigation, Pagination } from 'swiper/modules';

export default function About(){
    return(<>
        <div className="relative mt-96">
            <div className="flex justify-center">
                <div className="w-96 h-52 border-t-4 border-l-4 border-[#9370DB] mr-[380px] -top-1 absolute "></div>
            </div>
            <div class="flex mt-52 justify-center">
                <div className='text-center'>
                    <h1 className='font-semibold text-2xl py-6'>About Me</h1>
                    <img src={agung} alt="agung saputra" className="rounded-full h-40 w-40 mx-auto border-2" />
                </div>
                <div>
                    <div>
                    <Swiper pagination={true} modules={[Pagination]}>
                        <SwiperSlide>Slide 1</SwiperSlide>
                        <SwiperSlide>Slide 2</SwiperSlide>
                        <SwiperSlide>Slide 3</SwiperSlide>
                        <SwiperSlide>Slide 4</SwiperSlide>
                        <SwiperSlide>Slide 5</SwiperSlide>
                        <SwiperSlide>Slide 6</SwiperSlide>
                        <SwiperSlide>Slide 7</SwiperSlide>
                        <SwiperSlide>Slide 8</SwiperSlide>
                        <SwiperSlide>Slide 9</SwiperSlide>
                    </Swiper>
                    </div>
                </div>
            </div>
        </div>
    </>)
}