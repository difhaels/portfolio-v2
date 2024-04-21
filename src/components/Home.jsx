import agung from './image/png/agung.png';
import waving from './image/svg/waving.svg';
import email from './image/svg/email.svg';
import github from './image/svg/github.svg';
import mouse from './image/svg/mouse.svg';

export default function Home (){
    return(<>
        <div>
            <div className='mt-32 text-center w-1/2 mx-auto'> 
                <img src={agung} alt="agung saputra" className="rounded-full h-56 w-56 mx-auto border-2" />
                <div className='flex justify-center items-center gap-2 pt-10'>
                    <h1 className='font-bold text-3xl'>Hi, I'm Agung</h1>
                    <img src={waving} alt="waving" className='h-10 w-10' />
                </div>
                <h1 className='font-bold text-3xl text-[#9370DB] pt-3'>Fullstack Developer based in Indonesian</h1>
                <h1 className='text-xl pt-3'>My name is Agung Saputra, a fullstack developer with the goal of advancing my career and participating in inspiring projects. Here, I showcase my work and my passion for web development. Let's shape digital solutions together and pave the way for the future!</h1>
                <div className='flex justify-center gap-3 mt-4'>
                    <a href='yt.com' className='flex justify-center items-center gap-3 bg-[#9370DB] text-slate-50 px-4 py-2 rounded-lg'>
                        <img src={email} alt="email" className='h-8 w-8' style={{ filter: 'invert(100%)' }} /> 
                        <span className='text-base font-bold'>Contact Me</span>
                    </a>
                    <a href='yt.com' className='flex justify-center items-center gap-3 bg-slate-900 text-slate-50 px-4 py-2 rounded-lg'>
                        <img src={github} alt="github" className='h-8 w-8' style={{ filter: 'invert(100%)' }}/> 
                        <span className='text-base font-bold'>My Project</span>
                    </a>
                </div>
                <img src={mouse} alt="mouse" className='w-10 h-10 m-auto mt-7' />
            </div>
        </div>
    </>)
}