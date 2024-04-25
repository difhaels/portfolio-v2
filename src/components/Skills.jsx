import html from './image/svg/html5.svg'
import css from './image/svg/css3.svg'
import javascript from './image/svg/javascript.svg'
import tailwindcss from './image/svg/tailwindcss.svg'
import bootstrap from './image/svg/bootstrap.svg'
import react from './image/svg/react.svg'
import nodejs from './image/svg/nodejs.svg'
import php from './image/svg/php.svg'
import laravel from './image/svg/laravel.svg'
import mysql from './image/svg/mysql.svg'
import java from './image/svg/java.svg'
import canva from './image/svg/canva.svg'


export default function Skills(){
    return (<>
        <div className='mb-20'>
            {/* <div>
                <h1>Skills</h1>
                <h1>My TechStack and Skills</h1>
            </div> */}

            <div className="flex justify-center items-center gap-10">
                <div className='p-8 w-1/3 bg-[#EBEBEB] rounded-2xl border-2 shadow-2xl'>
                    <h1>WebDev</h1>
                    <div className='grid grid-cols-3 justify-center items-center gap-4'>
                        <div className='border-4 border-blue-300 px-5 py-5 rounded-2xl'>
                            <img src={html} alt="html"/>
                        </div>
                        <div className='border-4 border-blue-300 px-5 py-5 rounded-2xl'>
                            <img src={css} alt="css"/>
                        </div>
                        <div className='border-4 border-blue-300 px-5 py-5 rounded-2xl'>
                            <img src={javascript} alt="javascript"/>
                        </div>
                        <div className='border-4 border-blue-300 px-5 py-5 rounded-2xl'>
                            <img src={tailwindcss} alt="tailwindcss"/>
                        </div>
                        <div className='border-4 border-blue-300 px-5 py-5 rounded-2xl'>
                            <img src={bootstrap} alt="bootstrap"/>
                        </div>
                        <div className='border-4 border-blue-300 px-5 py-5 rounded-2xl'>
                            <img src={react} alt="react"/>
                        </div>

                        
                    </div>
                </div>
                <div className='p-8 w-1/3 bg-[#EBEBEB] rounded-2xl border-2 shadow-2xl'>
                    <h1>WebDev</h1>
                    <div className='grid grid-cols-3 justify-center items-center gap-4'>
                        <div className='border-4 border-blue-300 px-5 py-5 rounded-2xl'>
                            <img src={nodejs} alt="nodejs"/>
                        </div>
                        <div className='border-4 border-blue-300 px-5 py-5 rounded-2xl'>
                            <img src={php} alt="php"/>
                        </div>
                        <div className='border-4 border-blue-300 px-5 py-5 rounded-2xl'>
                            <img src={laravel} alt="css"/>
                        </div>
                        <div className='border-4 border-blue-300 px-5 py-5 rounded-2xl'>
                            <img src={mysql} alt="mysql"/>
                        </div>
                        <div className='border-4 border-blue-300 px-5 py-5 rounded-2xl'>
                            <img src={java} alt="java"/>
                        </div>
                        <div className='border-4 border-blue-300 px-5 py-5 rounded-2xl'>
                            <img src={canva} alt="canva"/>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </>)
}