import {TbError404} from "react-icons/tb";
import { motion } from "framer-motion";
import Button from "../components/common/Button";

export default function NotFound() {

  return (
    <motion.main 
    initial={{ scale: 0.5, opacity: 0 }}
    animate={{ scale:1,opacity: 1}}
    transition={{ duration: 0.8 }} className="dark:text-white flex items-center justify-center flex-col text-left h-screen ">
        <h1 className="font-bold text-center text-3xl sm:text-3xl md:text-5xl">
          PAGE <span className="text-newblue-500 ">N</span>OT FOUND
        </h1>
        <TbError404 className="text-5xl mb-3 sm:text-7xl"/>
       
            <Button rec="/">
                    Back to home
            </Button>
       
    </motion.main>
  )
}
