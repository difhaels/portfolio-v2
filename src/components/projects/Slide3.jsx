import game from '../image/svg/game.svg';

import unrealengine from '../image/svg/unrealengine.svg';
import unity from '../image/svg/unity.svg';
import blender from '../image/svg/blender.svg';
import flutter from '../image/svg/flutter.svg';
import sqlite from '../image/svg/sqlite.svg';

export default function Slide3 (){
    return (<>
        <div className='flex mx-10 gap-10 justify-center items-center'>
            <div className='w-2/3'>
                <h1 className='py-5 font-bold'>StarQuest</h1>
                <span>A space adventure game that challenges players to explore the galaxy, complete missions and collect resources. With attractive graphics and exciting gameplay, StarQuest provides an entertaining gaming experience.</span>
                <h1 className='py-5 font-bold'>Technologies</h1>
                <div className='grid grid-cols-6 gap-x-10 gap-y-5'>
                    <img src={unrealengine} alt="unrealengine" className='w-full'/>
                    <img src={unity} alt="unity" className='w-full'/>
                    <img src={blender} alt="blender" className='w-full'/>
                    <img src={flutter} alt="flutter" className='w-full'/>
                    <img src={sqlite} alt="sqlite" className='w-full'/>
                </div>
                <div>
                    <div className='bg-[#9370DB] w-fit px-5 py-3 mt-7 rounded-2xl'>Would</div>
                </div>
            </div>
            <div className='w-1/3'>
                <img src={game} alt="game" className='w-full'/>
            </div>
        </div>
    </>)
}