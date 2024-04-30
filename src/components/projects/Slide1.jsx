import web from '../image/svg/web.svg';

import html from '../image/svg/html5.svg';
import css from '../image/svg/css3.svg';
import javascript from '../image/svg/javascript.svg';
import tailwindcss from '../image/svg/tailwindcss.svg';
import nodejs from '../image/svg/nodejs.svg';
import mongodb from '../image/svg/mongodb.svg';
import typescript from '../image/svg/typescript.svg';
import vuejs from '../image/svg/vuejs.svg';
import sass from '../image/svg/sass.svg';


export default function Slide1 (){
    return (<>
        <div className='flex mx-10 gap-10 justify-center items-center'>
            <div className='w-2/3'>
                <h1 className='py-5 font-bold'> Simplicity</h1>
                <span>Is a personal portfolio website designed with a minimalist design to display your works elegantly. Built with HTML, CSS, and JavaScript, Simplicity offers a responsive experience across devices.</span>
                <h1 className='py-5 font-bold'>Technologies</h1>
                <div className='grid grid-cols-6 gap-x-10 gap-y-5'>
                    <img src={html} alt="html" className='w-full'/>
                    <img src={css} alt="css" className='w-full'/>
                    <img src={javascript} alt="javascript" className='w-full'/>
                    <img src={tailwindcss} alt="tailwindcss" className='w-full'/>
                    <img src={nodejs} alt="nodejs" className='w-full'/>
                    <img src={mongodb} alt="mongodb" className='w-full'/>
                    <img src={typescript} alt="typescript" className='w-full'/>
                    <img src={vuejs} alt="vuejs" className='w-full'/>
                    <img src={sass} alt="sass" className='w-full'/>
                </div>
                <div>
                    <div className='bg-[#9370DB] w-fit px-5 py-3 mt-7 rounded-2xl'>Would</div>
                </div>
            </div>
            <div className='w-1/3'>
                <img src={web} alt="web" className='w-full'/>
            </div>
        </div>
    </>)
}