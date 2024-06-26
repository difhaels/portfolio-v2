import { motion } from "framer-motion";

import agung from '../image/png/agung.png';
import waving from '../image/svg/waving.svg';
import mouse from '../image/svg/mouse.svg';
import quotebg from '../image/png/quotebg.png';

export default function Home (){
    return(<>
        <div className='mb-80 relative'>
            <div className='absolute -top-32 left-10'>
                <div className='bg-[#005CB3] w-1 h-96 mx-auto'></div>
                <div className='flex flex-col gap-2 mt-2'>
                    <a href="yt.com">
                        <svg className='w-5 h-5 cursor-pointer hover:scale-110' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18 22V15C18 13.8954 17.1046 13 16 13C14.8954 13 14 13.8954 14 15V22H10" stroke="#FA448C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M10 22V15C10 11.6863 12.6863 9 16 9C19.3137 9 22 11.6863 22 15V22H18" stroke="#FA448C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <rect x="3" y="9" width="4" height="13" stroke="#FA448C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <circle cx="5" cy="4" r="2" stroke="#FA448C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </a>
                    <a href="yt.com">
                        <svg width="22px" height="22px" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="cursor-pointer hover:scale-110">
                            <rect width="48" height="48" fill="white" fill-opacity="0.01"/>
                            <path d="M29.3444 30.4767C31.7481 29.9771 33.9292 29.1109 35.6247 27.8393C38.5202 25.6677 40 22.3137 40 19C40 16.6754 39.1187 14.5051 37.5929 12.6669C36.7427 11.6426 39.2295 4.00001 37.02 5.02931C34.8105 6.05861 31.5708 8.33691 29.8726 7.8341C28.0545 7.29577 26.0733 7.00001 24 7.00001C22.1992 7.00001 20.4679 7.22313 18.8526 7.63452C16.5046 8.23249 14.2591 6.00001 12 5.02931C9.74086 4.05861 10.9736 11.9633 10.3026 12.7946C8.84119 14.6052 8 16.7289 8 19C8 22.3137 9.79086 25.6677 12.6863 27.8393C14.6151 29.2858 17.034 30.2077 19.7401 30.6621" stroke="#FE0C23" stroke-width="4" stroke-linecap="round"/>
                            <path d="M19.7402 30.662C18.5817 31.9372 18.0024 33.148 18.0024 34.2946C18.0024 35.4411 18.0024 38.3465 18.0024 43.0108" stroke="#FE0C23" stroke-width="4" stroke-linecap="round"/>
                            <path d="M29.3443 30.4767C30.4421 31.9175 30.991 33.2112 30.991 34.3577C30.991 35.5043 30.991 38.3886 30.991 43.0108" stroke="#FE0C23" stroke-width="4" stroke-linecap="round"/>
                            <path d="M6 31.2156C6.89887 31.3255 7.56554 31.7388 8 32.4555C8.65169 33.5304 11.0742 37.5181 13.8251 37.5181C15.6591 37.5181 17.0515 37.5181 18.0024 37.5181" stroke="#FE0C23" stroke-width="4" stroke-linecap="round"/>
                        </svg>  
                    </a>
                    <a href="yt.com">
                        <svg width="22px" height="22px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="cursor-pointer hover:scale-110">
                            <path d="M3 8L8.44992 11.6333C9.73295 12.4886 10.3745 12.9163 11.0678 13.0825C11.6806 13.2293 12.3194 13.2293 12.9322 13.0825C13.6255 12.9163 14.2671 12.4886 15.5501 11.6333L21 8M6.2 19H17.8C18.9201 19 19.4802 19 19.908 18.782C20.2843 18.5903 20.5903 18.2843 20.782 17.908C21 17.4802 21 16.9201 21 15.8V8.2C21 7.0799 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V15.8C3 16.9201 3 17.4802 3.21799 17.908C3.40973 18.2843 3.71569 18.5903 4.09202 18.782C4.51984 19 5.07989 19 6.2 19Z" stroke="#005CB3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </a>
                </div>
            </div>
            <div className='absolute -top-32 left-20  w-10 border-l-4 border-b-4 border-[#FE0C23] h-80'></div>
            <div className='absolute -top-32 left-20  w-10 border-r-4 border-[#FA448C] h-44'></div>

            <div className='absolute -top-3 right-0 w-36 border-l-4 border-t-4 border-[#005CB3] h-10'></div>
            <div className='absolute top-3 right-0 w-28 border-l-4 border-b-4 border-[#FA448C] h-5'></div>

            <div className='mt-32 text-center w-1/2 mx-auto'>
                <div className="relative w-full">

                    <div className="absolute h-52 w-1 bg-red-500 -top-10 right-0 left-0 mx-auto -z-10"></div>
                    <div className="absolute h-52 w-1 bg-[#005CB3] -top-8 right-5 left-0 mx-auto -z-10"></div>
                    <div className="absolute h-52 w-1 bg-[#005CB3] -top-8 right-0 left-5 mx-auto -z-10"></div>

                    <img src={agung} alt="agung saputra" className="rounded-full h-56 w-56 mx-auto border-2 border-primary" />
                </div>
                <div className='flex justify-center items-center gap-3 pt-10'>
                    <h1 className='font-bold text-3xl'>Hi, I'm Agung</h1>
                    <motion.img
                    src={waving}
                    alt="mouse"
                    className="w-10 h-10"
                    animate={{ x: [0, -3, 0] }} 
                    transition={{ repeat: Infinity, duration: 3.0 }} 
                />
                </div>
                <motion.h1
                    className="font-bold text-3xl pt-3"
                    animate={{ color: ["#FE0C23", "#0055BF", "#FA448C"] }}
                    transition={{ repeat: Infinity, duration: 4.0 }} 
                >
                    Application Developer based in Indonesian
                </motion.h1>
                <h1 className='text-xl pt-3'>My name is Agung Saputra, a Application Developer and a Student. My goal is to become a Fullstack Developer, UI/UX designer, even a Systems Analyst, all of which can help me in developing applications. So that's it, here I will show some of the skills and projects that I have. I hope we can work together.</h1>
                <div className='flex justify-center gap-5 mt-5'>
                    <a href='yt.com' className='relative group hover:scale-110 flex justify-center items-center gap-3 bg-[#FE0C23] text-slate-50 px-5 py-3 transform transition-transform'>
                        <div className="absolute flex group-hover:gap-6">
                            <div className="h-9 w-16 border-l-4 border-t-2 border-b-2 transform transition-transform border-[#DFCE28]"></div>
                            <div className="h-9 w-16 border-r-4 border-t-2 border-b-2 transform transition-transform border-[#DFCE28]"></div>
                        </div>
                        <span className='text-base uppercase'>Contact Me</span>
                    </a>
                    <a href='yt.com' className='relative group hover:scale-110 flex justify-center items-center gap-3 bg-[#0055BF] text-slate-50 px-5 py-3 transform transition-transform'>
                        <div className="absolute flex group-hover:gap-6">
                            <div className="h-9 w-16 border-l-4 border-t-2 border-b-2 transform transition-transform border-[#DFCE28]"></div>
                            <div className="h-9 w-16 border-r-4 border-t-2 border-b-2 transform transition-transform border-[#DFCE28]"></div>
                        </div>
                        <span className='text-base uppercase'>My Projects</span>
                    </a>
                </div>
                <motion.img
                    src={mouse}
                    alt="mouse"
                    className="w-10 h-10 m-auto mt-9"
                    animate={{ y: [0, -8, 0] }} 
                    transition={{ repeat: Infinity, duration: 1.5 }} 
                />
            </div>
            
            <div className="absolute bottom-52 border-r-4 border-t-4 border-[#FA448C] w-10 h-96"></div>

            <div className='relative'>
                <h1 className='rotate-90 absolute -top-64 -right-24 font-senibold text-xl z-10'>agungsaputradifh@gmail.com</h1>
                <div className='bg-[#005CB3] w-1 h-72 mx-auto absolute right-10 -top-32'></div>
            </div>
            
            <div className='mb-20 mt-16 relative z-10'>
                <div>
                    <span className="absolute top-16 z-10 text-[4rem] font-bold mx-56 text-center text-white tracking-tight leading-none">"The strongest is the one who never loses, Maybe I'm not the strongest, but I'd win"</span>
                    <span className="z-10 text-center text-2xl text-slate-400 absolute top-72 left-0 right-0 texb">Agung Saputra</span>
                </div>
                
                <div className='-skew-y-3 '>
                    <img src={quotebg} alt="quotebg" className='h-96 w-full object-cover blur-[1.8px] brightness-50'/>
                </div>
            </div>

            <div className="absolute -bottom-40 right-10  w-[65%] h-64 border-r-4 border-b-4 border-[#9370DB]"></div>
            <div className="absolute -bottom-80 right-10  w-[65%] h-40 border-l-4 border-[#9370DB]"></div>

        </div>
    </>)
}