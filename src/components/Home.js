import { motion } from "framer-motion";
export default function Home (){
    return(<>
        <div className="">
            ini Home
            <motion.div
      initial={{ opacity: 0, y: -100 }} // Properti awal animasi
      animate={{ opacity: 1, y: 0 }}     // Properti akhir animasi
      transition={{ duration: 1 }}      // Durasi animasi (dalam detik)
    >
      Hello, Framer Motion!
    </motion.div>
        </div>
    </>)
}