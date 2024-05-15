import agung from '../image/png/agung.png';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


export default function About(){
    return(<>
        <div className="relative mt-96">
            <div className="flex justify-center">
                <div className="w-96 h-52 border-t-4 border-l-4 border-[#9370DB] mr-[380px] -top-1 absolute "></div>
            </div>

            <div class="flex mt-52 justify-center gap-20">
                <div className='text-center'>
                    <h1 className='font-semibold text-2xl py-6'>About Me</h1>
                    <img src={agung} alt="agung saputra" className="rounded-full h-52 w-52 border-4 border-[#9370DB] mx-auto" />
                </div>
                <div>
                    <div className='flex gap-5'>
                        <Swiper pagination={{ clickable: true }} modules={[Pagination]} spaceBetween={30} className='swiper-about'>
                            <SwiperSlide className='swiper-slide-about swiper-slide-about-1'>My daily activity is watching Anime, I also like almost all Anime genres</SwiperSlide>
                            <SwiperSlide className='swiper-slide-about swiper-slide-about-2'>So I like coding? <span className='swiper-slide-about-mention'>Just the same</span></SwiperSlide>
                        </Swiper>
                        <Swiper pagination={{ clickable: true }} modules={[Pagination]} spaceBetween={30} className='swiper-about'>
                            <SwiperSlide className='swiper-slide-about swiper-slide-about-1'>Apart from Anime I spend my time playing games. Starting from single player games or multiplayer games with my friends.</SwiperSlide>
                            <SwiperSlide className='swiper-slide-about swiper-slide-about-2'>So I like playing games? <span className='swiper-slide-about-mention'>Just the same</span></SwiperSlide>
                        </Swiper>
                    </div>
                    <div className='mt-5'>
                        <Swiper pagination={{ clickable: true }} modules={[Pagination]} spaceBetween={30} className='swiper-about'>
                            <SwiperSlide className='swiper-slide-about swiper-slide-about-1'>And of course Coding, I think my field is Coding.</SwiperSlide>
                            <SwiperSlide className='swiper-slide-about swiper-slide-about-2'>So I like Coding? <span className='swiper-slide-about-mention'>Just the same</span></SwiperSlide>
                            <SwiperSlide className='swiper-slide-about swiper-slide-about-3 text-center '>
                                <span className='text-red-600 font-bold text-xl'>But I'd Win</span>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
            
            <div className="flex justify-center mb-80">
                <div className="w-[440px] h-52 border-l-4 border-b-4 border-[#9370DB] mr-[310px] -bottom-56 absolute "></div>
            </div>
        </div>
    </>)
}