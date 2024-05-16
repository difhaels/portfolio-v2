import { motion, useScroll, useSpring   } from "framer-motion";

export default function Scroll(){
    const { scrollYProgress } = useScroll()
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });
    return (<>
        <div  className="relative z-[99]">
            <motion.path className="fixed top-0 left-0 right-0 h-[10px] bg-primary transform origin-top-left" style={{ scaleX, originX: 0}}/>
        </div>
    </>)
}