import game from '../image/svg/game.svg';

export default function Slide1 (){
    return (<>
        <div className='flex mx-10 gap-10 justify-center items-center'>
            <div className='w-2/3'>
                <h1>Judul</h1>
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque necessitatibus ad facilis ipsam, placeat ratione ab aliquid reprehenderit id nulla iste, quis adipisci? Odit vero veritatis numquam quia, labore dicta tempora, tenetur quibusdam dolor, repudiandae ipsum maiores.</span>
                <h1>Tech</h1>
            </div>
            <div className='w-1/3'>
                <img src={game} alt="game" className='w-full'/>
            </div>
        </div>
    </>)
}