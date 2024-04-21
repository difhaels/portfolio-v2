import { motion } from "framer-motion";
export default function Home (){
    return(<>
        <div>
            
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