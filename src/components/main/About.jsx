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
                    <img src={agung} alt="agung saputra" className="rounded-full h-52 w-52 border-4 border-[#9370DB] mx-auto border-2" />
                </div>
                <div>
                    <div className='flex gap-5'>
                        <Swiper pagination={{ clickable: true }} modules={[Pagination]} spaceBetween={30} className='swiper-about'>
                            <SwiperSlide className='swiper-slide-about'>My daily activity is watching anime, I also like almost all anime genres</SwiperSlide>
                            <SwiperSlide className='swiper-slide-about'>So I like coding? Just the same</SwiperSlide>
                        </Swiper>
                        <Swiper pagination={{ clickable: true }} modules={[Pagination]} spaceBetween={30} className='swiper-about'>
                            <SwiperSlide className='swiper-slide-about'>Apart from Anime I spend my time playing games. Starting from single player games or multiplayer games with friends.</SwiperSlide>
                            <SwiperSlide className='swiper-slide-about'>so I like playing games? Just the same</SwiperSlide>
                        </Swiper>
                    </div>
                    <div className='mt-5'>
                        <Swiper pagination={{ clickable: true }} modules={[Pagination]} spaceBetween={30} className='swiper-about'>
                            <SwiperSlide className='swiper-slide-about'>and of course coding, I think my field is coding.</SwiperSlide>
                            <SwiperSlide className='swiper-slide-about'>So I like coding? Just the same</SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    </>)
}