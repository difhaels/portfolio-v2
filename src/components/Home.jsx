import { motion, useScroll, useSpring   } from "framer-motion";
export default function Home (){
    const { scrollYProgress } = useScroll()
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });
    return(<>
        <div>
            <motion.path className="fixed top-0 left-0 right-0 h-[10px] bg-red-800 transform origin-top-left" style={{ scaleX, originX: 0}}/>
            ini Home
            <motion.div
                initial={{ opacity: 0, y: -100 }} // Properti awal animasi
                animate={{ opacity: 1, y: 0 }}     // Properti akhir animasi
                transition={{ duration: 3 }}      // Durasi animasi (dalam detik)
            >
                <h1 className="text-5xl text-red-500">Hello World</h1>
            </motion.div>
        </div>
    </>)
}